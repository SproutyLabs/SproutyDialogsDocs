---
sidebar_position: 7
---

# Dialog Controller (Headless)

The [DialogController](../class-reference/nodes/dialog-controller.md) runs Sprouty Dialogs dialogue trees **without creating any UI**. It processes the dialogue and emits signals when a dialogue or a set of options must be presented, and it waits for you to explicitly continue or select an option.

This makes it suitable for:

- **Custom dialogue interfaces** that do not use the built-in [DialogBox](../class-reference/nodes/dialog-box.md).
- Games that already have their own dialogue UI.
- **Headless/server-side** execution.
- **Automated tests** of your dialogue trees.

If you want the built-in dialog box, portraits, and input handling, use a [DialogPlayer](../class-reference/nodes/dialog-player.md) instead.

## DialogController vs DialogPlayer

---

Both nodes run the same dialogue trees through the same internal [SproutyDialogsRunner](../class-reference/runtime/sprouty-dialogs-runner.md), but they differ in who owns the presentation and input:

|                                 | [DialogPlayer](../class-reference/nodes/dialog-player.md) | [DialogController](../class-reference/nodes/dialog-controller.md) |
| ------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------- |
| Creates dialog boxes            | Yes                                                       | No                                                                |
| Creates portraits               | Yes                                                       | No                                                                |
| Handles input                   | Yes, through `DialogBox`                                  | No, you call `continue_dialogue()` / `select_option()`            |
| Emits the dialogue text         | No, it renders it                                         | Yes, through `dialogue_requested`                                 |
| Handles `[auto]` and `[noskip]` | Yes                                                       | You must                                                          |
| Autoload integration            | Generic signals and `dialog_players_running`              | `controller_*` signals and `dialog_controllers_running`           |
| Works headless                  | No (needs UI nodes)                                       | Yes                                                               |
| Best for                        | Standard in-game dialogues                                | Custom UIs, tests, servers                                        |

In short: **DialogPlayer is the "batteries included" option, DialogController is the "bring your own UI" option.**

## Quick start

---

Add a `DialogController` to your scene, or create one from code. Connect every signal **before** calling [play](../class-reference/nodes/dialog-controller#play-method)(), because the first content signal can be emitted synchronously from `play()`:

```gdscript title="custom_dialogue_ui.gd" showLineNumbers
extends Control

@onready var speaker_label: Label = %SpeakerLabel
@onready var dialogue_label: RichTextLabel = %DialogueLabel
@onready var options_container: Container = %OptionsContainer

var _controller: DialogController


func _ready() -> void:
	# Create the controller. It runs the dialogue but does not create any UI.
	_controller = DialogController.new()
	add_child(_controller)

	# Connect before play(): the first content signal can be emitted synchronously.
	_controller.dialogue_requested.connect(_on_dialogue_requested)
	_controller.options_requested.connect(_on_options_requested)
	_controller.dialog_ended.connect(_on_dialog_ended)

	# Load the dialogue resources and start processing from the START node.
	_controller.set_dialog(load("res://dialogues/example.tres"), "START")
	_controller.play()


func _unhandled_input(event: InputEvent) -> void:
	# The controller never advances on its own, so forward the continue action.
	# This is ignored while idle or while waiting for an option selection.
	if event.is_action_pressed("dialogs_continue_action"):
		_controller.continue_dialogue()


func _on_dialogue_requested(
		_character_name: String,
		translated_name: String,
		_portrait: String,
		dialogue_data: Dictionary) -> void:
	# Show the dialogue text. Processing stays here until continue_dialogue() is called.
	speaker_label.text = translated_name
	dialogue_label.text = dialogue_data.get("text", "")


func _on_options_requested(options: Array, disabled_options: Array) -> void:
	# Build one button per option. Disabled options are excluded from the
	# selectable index expected by select_option().
	var selectable_index := 0
	for i in options.size():
		var disabled: bool = disabled_options[i] if i < disabled_options.size() else false
		var button := Button.new()
		button.text = options[i]
		button.disabled = disabled
		if not disabled:
			# select_option() expects the index among the selectable options.
			button.pressed.connect(_controller.select_option.bind(selectable_index))
			selectable_index += 1
		options_container.add_child(button)


func _on_dialog_ended() -> void:
	# Hide the dialogue UI when the dialogue ends or is stopped.
	hide()
```

## Continuing and selecting options

---

The controller never advances on its own:

- After `dialogue_requested` is emitted, call [continue_dialogue](../class-reference/nodes/dialog-controller#continue-dialogue-method)() when the player presses the continue action.
  ```gdscript
  func _unhandled_input(event: InputEvent) -> void:
  	# Ignored while the dialogue is idle or waiting for an option selection.
  	if event.is_action_pressed("dialogs_continue_action"):
  		_controller.continue_dialogue()
  ```
- After `options_requested` is emitted, call [select_option](../class-reference/nodes/dialog-controller#select-option-method)(index) when the player chooses an option.

`select_option()` expects the index **among the selectable options**, with disabled options excluded. For example, with options `["A", "B", "C"]` and disabled flags `[false, true, false]`, the valid indexes are `0` for `"A"` and `1` for `"C"`.

The `option_selected` signal keeps the legacy **1-based** option number for compatibility, while `select_option()` receives the **0-based** selectable index.

:::warning[Connect signals before play()]

The first `dialogue_requested` or `options_requested` signal can be emitted **before** `dialog_started` and **before** `play()` returns. Connect every signal before calling `play()`, and do not use `dialog_started` as a "first content is ready" trigger.

:::

## Signals

---

The controller exposes the following signals:

| Signal                                                                         | Description                                                                     |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| `dialog_started()`                                                             | The dialogue started processing.                                                |
| `dialogue_requested(character_name, translated_name, portrait, dialogue_data)` | A dialogue node must be displayed. Wait for `continue_dialogue()`.              |
| `options_requested(options, disabled_options)`                                 | Options must be displayed. Wait for `select_option()`.                          |
| `wait_started(wait_time, close_dialog)`                                        | A wait node started. Close or hide your dialog box if `close_dialog` is `true`. |
| `wait_ended()`                                                                 | The wait node finished waiting.                                                 |
| `option_selected(option_index, option_dialog)`                                 | An option was selected. `option_index` is 1-based for compatibility.            |
| `dialog_paused()`                                                              | The dialogue was paused.                                                        |
| `dialog_resumed()`                                                             | The dialogue was resumed.                                                       |
| `dialog_ended()`                                                               | The dialogue ended or was stopped.                                              |
| `signal_event(signal_id, args)`                                                | A signal node was processed.                                                    |

The `dialogue_data` dictionary contains the dialogue text and its tag data, including the `[auto]` and `[noskip]` values when present. The `portrait` argument is the name of the portrait assigned to the dialogue node (or the character's default portrait).

## Using DialogBox as a view only

---

You can use the built-in [DialogBox](../class-reference/nodes/dialog-box.md) for presentation while the controller owns the input. Set [handle_input](../class-reference/nodes/dialog-box#handle-input-var) to `false` so the dialog box does not advance or select options by itself:

```gdscript title="view_only_dialog_box.gd" showLineNumbers
extends Node

var _controller: DialogController
var _dialog_box: DialogBox


func _ready() -> void:
	_controller = DialogController.new()
	add_child(_controller)

	var dialog_box_scene := load("res://path/to/dialog_box.tscn") as PackedScene
	_dialog_box = dialog_box_scene.instantiate() as DialogBox
	# Let the controller own input while the dialog box only displays content.
	_dialog_box.handle_input = false
	add_child(_dialog_box)

	_controller.dialogue_requested.connect(_on_dialogue_requested)
	_controller.options_requested.connect(_on_options_requested)
	_controller.dialog_ended.connect(_on_dialog_ended)

	# The dialog box only signals that all its text segments were displayed. The
	# controller still decides when to advance to the next dialogue node.
	_dialog_box.continue_dialog.connect(_controller.continue_dialogue)

	_controller.set_dialog(load("res://dialogues/example.tres"), "START")
	_controller.play()


func _unhandled_input(event: InputEvent) -> void:
	# With handle_input disabled, advance the box manually on the continue action.
	# It emits continue_dialog when the whole dialogue node was displayed.
	if event.is_action_pressed("dialogs_continue_action"):
		_dialog_box.advance_dialog()


func _on_dialogue_requested(
		_character_name: String,
		translated_name: String,
		_portrait: String,
		dialogue_data: Dictionary) -> void:
	_dialog_box.play_dialog(translated_name, dialogue_data)


func _on_options_requested(options: Array, disabled_options: Array) -> void:
	# The box displays the options, but they are not clickable while handle_input
	# is false. Build your own option buttons and call _controller.select_option().
	_dialog_box.display_options(options, disabled_options)


func _on_dialog_ended() -> void:
	_dialog_box.stop_dialog(true)

```

With `handle_input = false`, the dialog box still displays the dialogue and the options, but it does not react to input and does not emit `option_selected` by itself. Options rendered by a view-only box are **not clickable by design**. If you want mouse selection with the built-in dialog box, either build your own option buttons from `options_requested`, or keep `handle_input = true` and forward the dialog box signals to the controller:

```gdscript
# With handle_input = true, forward the box's input signals to the controller.
dialog_box.continue_dialog.connect(_controller.continue_dialogue)
dialog_box.option_selected.connect(_controller.select_option)
```

If the dialogue node has multiple text segments, the `_unhandled_input()` handler in the example uses [advance_dialog](../class-reference/nodes/dialog-box#advance-dialog-method)() instead of calling `continue_dialogue()` directly. It skips the typing effect, shows the next segment, and emits `continue_dialog` only when the whole dialogue node was displayed. Do not call `controller.continue_dialogue()` while a view-only `DialogBox` still has pending text segments, since that would skip the remaining segments.

Also remember to call [hide_options](../class-reference/nodes/dialog-box#hide-options-method)() after selecting an option when you build your own option buttons, or stale options can remain visible.

## Portraits

---

`DialogController` does not instantiate portraits. The `dialogue_requested` signal provides the character key and the portrait name, so your custom UI can decide how to display them. You can instantiate them through the [resource manager](../class-reference/runtime/resource-manager.md) so all the plugin settings are applied:

```gdscript
# Instantiate the portrait through the resource manager so the plugin settings apply.
var portrait: DialogPortrait = SproutyDialogs.Resources.instantiate_portrait(
		character_name, portrait_name, portrait_parent, dialog_box)
```

Pass the current dialog box as the last argument when the character uses `portrait_on_dialog_box`, otherwise pass the parent node where portraits should be added.

You are responsible for the portrait lifecycle: show or hide portraits per character, call `set_portrait()` and `on_portrait_enter()` when a character joins, and call `on_portrait_exit()` and free the portrait parents when the dialogue ends. You can also use `on_portrait_talk()`, `on_portrait_stop_talking()`, `highlight_portrait()`, and `unhighlight_portrait()` to react to your typing effect and the active speaker.

The [get_character_data](../class-reference/nodes/dialog-controller#get-character-data-method)() method gives you the character's translated name, default portrait, and dialog box configuration when you need more than the values provided by `dialogue_requested`.

## Wait nodes

---

Wait nodes emit `wait_started(wait_time, close_dialog)` when they begin and `wait_ended()` when the wait time (in seconds) elapses. The controller never touches your UI, so handle the presentation yourself:

```gdscript
_controller.wait_started.connect(
	func(_wait_time: float, close_dialog: bool) -> void:
		# Close the dialogue view only when the wait node requests it.
		if close_dialog:
			dialog_box.stop_dialog(true)
		else:
			dialog_box.stop_dialog()
			dialog_box.show())

_controller.wait_ended.connect(func() -> void:
	# Hide a waiting indicator, resume animations, etc.
	pass)
```

With a view-only `DialogBox`, this reproduces what `DialogPlayer` does automatically. With a custom UI, use the signals to close or hide your dialogue view, stop your typing effect, or show a waiting indicator. `close_dialog` is the flag configured on the wait node in the dialogue editor.

## Auto-advance and no-skip tags

---

The `[auto]` tag data arrives in `dialogue_data["auto"]` as `{ "enabled": bool, "delay": float }` (the delay may be missing, but you can set a default delay or use the [default advance delay setting](../settings#auto-advance)), and `[noskip]` arrives in `dialogue_data["noskip"]`. **`DialogPlayer` applies both to its dialog box automatically; `DialogController` does not**.

When using a view-only `DialogBox`, apply the tag data yourself on every `dialogue_requested`:

```gdscript
_controller.dialogue_requested.connect(
	func(_character_name: String, translated_name: String, _portrait: String,
	dialogue_data: Dictionary) -> void:
		# Display the dialogue, then apply the [auto] and [noskip] tag data.
		dialog_box.play_dialog(translated_name, dialogue_data)
		var auto_data: Dictionary = dialogue_data.get("auto", {})
		if not auto_data.is_empty():
			# Use the tag delay when present, otherwise the default delay.
			dialog_box.set_auto_advance(
					auto_data.get("enabled", true),
					auto_data.get("delay", 0.1))
		dialog_box.text_reveal_skippable = not dialogue_data.get("noskip", false)
```

With a fully custom UI, implement the timer in your host; only your view knows when the text reveal finishes. Auto-advance is off by default even for view-only boxes, so enable it with [set_auto_advance](../class-reference/nodes/dialog-box#set-auto-advance-method)() when the tag enables it.

For more information about the tags, see the [auto-advance guide](./auto-advance.md) and the [text editor tags](./text-editor#special-tags).

## Headless usage

---

The controller does not require a viewport or any UI node, so it can run in headless builds. The `SproutyDialogs` autoload and the dialogue resources (characters, portraits, translations) must still be available:

```gdscript
func _ready() -> void:
	# No UI nodes are needed: print each dialogue line to the console instead.
	var controller := DialogController.new()
	add_child(controller)
	controller.dialogue_requested.connect(
			func(_character_name: String, translated_name: String, _portrait: String,
			dialogue_data: Dictionary) -> void:
				print(translated_name, ": ", dialogue_data.get("text", "")))
	# End the headless run when the dialogue finishes.
	controller.dialog_ended.connect(func() -> void: get_tree().quit())
	controller.set_dialog(dialogue_resource, "START")
	controller.play()
```

For automated tests, connect `dialogue_requested` and call `continue_dialogue()` immediately, and connect `options_requested` and call `select_option()` with the desired selectable index.

## Important considerations

---

- > **The controller never advances on its own.** If you forget to call `continue_dialogue()` or `select_option()`, the dialogue simply stays put.

- > **Signals can fire synchronously from `play()`.** The first content request can arrive before `dialog_started` and before `play()` returns.
- > **`options_requested` does not always come after `dialogue_requested`.** Handle both signals independently.
- > **Option indexes are different.** `select_option()` uses a 0-based selectable index (disabled options excluded), while `option_selected` uses the legacy 1-based option number.
- > **There are no display overrides.** The `set_portraits_display_override()`, `set_dialog_box_display_override()`, `set_dialog_box_override()` and per-character variants of `DialogPlayer` have no controller equivalent. Choose the parent nodes and box instances yourself.
- > **There is no autoplay and no `free_on_end`.** Call `play()` yourself and free the controller when you are done.
- > **Lifecycle details:**
  >
  > - `stop()` emits `dialog_ended`, releases resources, but keeps the configured dialogue data so you can call `play()` again.
  > - `clear_dialog()` also discards the data.
  > - `stop()` emits `dialog_ended` even if the controller is idle, `set_dialog()` / `play()` while running reset the execution without emitting `dialog_ended`, and freeing the controller node does not emit `dialog_ended`.
  > - Do not rely on the signal to detect every start/stop pair.
- > **Pause and resume have no UI effects.** You must pause your own typing tweens/timers, animations, and portrait talking state, and restore them on resume. Pausing while waiting for input does not consume or change the pending request.
- > **Resources are loaded by `set_dialog()` / `play()`.** `get_character_data()` is only valid after `set_dialog()`. If you build or edit dialogue data at runtime, call `sync_character_references()` yourself before using it with the controller.
- > **You are responsible for input.** `DialogBox.block_input_propagation` only takes effect while the box handles input. With a custom UI, call `get_viewport().set_input_as_handled()` yourself if you need to consume the event.

## Autoload integration

---

Controllers register themselves in the `SproutyDialogs` autoload when they enter the scene tree. While a dialogue is running, the controller is available in [dialog_controllers_running](../class-reference/core/sprouty-dialogs-manager#dialog-controllers-running-var), and the autoload emits controller-specific versions of every controller signal, with the controller as the first argument:

| Signal                                                                                                | Description                                       |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `controller_started(controller)`                                                                      | The controller started a dialogue.                |
| `controller_dialogue_requested(controller, character_name, translated_name, portrait, dialogue_data)` | A dialogue node must be displayed.                |
| `controller_options_requested(controller, options, disabled_options)`                                 | Options must be displayed.                        |
| `controller_wait_started(controller, wait_time, close_dialog)`                                        | A wait node started.                              |
| `controller_wait_ended(controller)`                                                                   | The wait node finished.                           |
| `controller_paused(controller)`                                                                       | The controller was paused.                        |
| `controller_resumed(controller)`                                                                      | The controller was resumed.                       |
| `controller_ended(controller)`                                                                        | The dialogue ended or the controller was stopped. |
| `controller_option_selected(controller, option_index, option_dialog)`                                 | An option was selected.                           |
| `controller_signal_event(controller, signal_id, args)`                                                | A signal node was processed.                      |

These signals are separate from the ones emitted by `DialogPlayer`, so listeners can identify which controller triggered the event. Controllers are removed from `dialog_controllers_running` when the dialogue ends, is stopped, or the controller leaves the scene tree.

```gdscript
# Listen to every controller through the autoload.
SproutyDialogs.controller_started.connect(func(controller: DialogController) -> void:
	print("Dialogue started on ", controller.name))
```

## See also

---

- [DialogController class reference](../class-reference/nodes/dialog-controller.md)
- [SproutyDialogsRunner class reference](../class-reference/runtime/sprouty-dialogs-runner.md)
- [Using Dialogues](./using-dialogues.md)
- [DialogPlayer class reference](../class-reference/nodes/dialog-player.md)
- [DialogBox class reference](../class-reference/nodes/dialog-box.md)
