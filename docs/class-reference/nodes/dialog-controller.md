---
sidebar_position: 5
---

# DialogController

**Inherits**: [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

## Description

Node that runs dialog trees from Sprouty Dialogs plugin without creating any UI.

It processes the dialogue tree and emits execution signals when a dialogue or a set of options must be presented. The controller does **not** create dialog boxes or portraits and does **not** handle input, so you must display the dialogue with your own UI and call [continue_dialogue](#continue-dialogue-method)() or [select_option](#select-option-method)() to advance.

This makes it suitable for custom dialogue interfaces, games that already have their own UI, automated tests, and headless/server-side execution. Internally, it uses a [SproutyDialogsRunner](../runtime/sprouty-dialogs-runner.md) to execute the dialogue tree.

If you want the built-in dialog box, portraits, and input handling, use a [DialogPlayer](./dialog-player.md) instead. See the [Dialog Controller guide](../../dialogues/dialog-controller.md) for usage examples and a detailed comparison.

:::info[Autoload integration]

When a `DialogController` starts a dialogue, it registers itself in the [SproutyDialogsManager](../core/sprouty-dialogs-manager.md) autoload. The controller is available in [dialog_controllers_running](../core/sprouty-dialogs-manager#dialog-controllers-running-var), and the autoload emits the `controller_*` signals with the controller as the first argument. These signals are separate from the ones emitted by [DialogPlayer](./dialog-player.md).

:::

## Properties

| Type                                                                   | Name                                | Default |
| ---------------------------------------------------------------------- | ----------------------------------- | ------- |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html) | [print_debug](#print-debug-var)     | `false` |

## Methods

| Return Type                                                                | Method                                                                                                                    |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| void                                                                       | [set_dialog](#set-dialog-method)(dialog_data: [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html), start_id: [String](https://docs.godotengine.org/en/stable/classes/class_string.html)) |
| void                                                                       | [clear_dialog](#clear-dialog-method)()                                                                                    |
| void                                                                       | [play](#play-method)()                                                                                                    |
| void                                                                       | [continue_dialogue](#continue-dialogue-method)()                                                                          |
| void                                                                       | [select_option](#select-option-method)(option_index: [int](https://docs.godotengine.org/en/stable/classes/class_int.html)) |
| void                                                                       | [pause](#pause-method)()                                                                                                  |
| void                                                                       | [resume](#resume-method)()                                                                                                |
| void                                                                       | [stop](#stop-method)()                                                                                                    |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)     | [is_running](#is-running-method)()                                                                                        |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html) | [get_current_node](#get-current-node-method)()                                                                            |
| [SproutyDialogsDialogueData](../resources/dialogue-data)                   | [get_dialog_data](#get-dialog-data-method)()                                                                              |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html) | [get_start_id](#get-start-id-method)()                                                                                    |
| [SproutyDialogsCharacterData](../resources/character-data)                 | [get_character_data](#get-character-data-method)(key_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html)) |

## Signals

<h3 id="dialog-started-signal">
  <span class="reference-type">signal </span><code>dialog_started</code>
  <span class="parameters">()</span>
</h3>
<p>Emitted when the dialog starts. The start node is processed before this signal is emitted, so the first <a href="#dialogue-requested-signal">dialogue_requested</a> or <a href="#options-requested-signal">options_requested</a> signal can arrive before it.</p>
<hr/>

<h3 id="dialogue-requested-signal">
  <span class="reference-type">signal </span><code>dialogue_requested</code>
  <span class="parameters">(character_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, translated_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, portrait: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, dialogue_data: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span>
</h3>
<p>Emitted when a dialogue node is processed and should be displayed. Call <a href="#continue-dialogue-method">continue_dialogue</a>() when you want to advance to the next node.</p>
<hr/>

<h3 id="options-requested-signal">
  <span class="reference-type">signal </span><code>options_requested</code>
  <span class="parameters">(options: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>, disabled_options: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>)</span>
</h3>
<p>Emitted when an options node is processed and the options should be displayed. Call <a href="#select-option-method">select_option</a>() with the index of the selected option. The arrays include disabled options to preserve the original options order.</p>
<hr/>

<h3 id="wait-started-signal">
  <span class="reference-type">signal </span><code>wait_started</code>
  <span class="parameters">(wait_time: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_float.html">float</a>, close_dialog: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a>)</span>
</h3>
<p>Emitted when a wait node starts processing. <code>close_dialog</code> is <code>true</code> when the dialog box should be closed.</p>
<hr/>

<h3 id="wait-ended-signal">
  <span class="reference-type">signal </span><code>wait_ended</code>
  <span class="parameters">()</span>
</h3>
<p>Emitted when a wait node finishes waiting.</p>
<hr/>

<h3 id="dialog-paused-signal">
  <span class="reference-type">signal </span><code>dialog_paused</code>
  <span class="parameters">()</span>
</h3>
<p>Emitted when the dialog is paused.</p>
<hr/>

<h3 id="dialog-resumed-signal">
  <span class="reference-type">signal </span><code>dialog_resumed</code>
  <span class="parameters">()</span>
</h3>
<p>Emitted when the dialog is resumed.</p>
<hr/>

<h3 id="dialog-ended-signal">
  <span class="reference-type">signal </span><code>dialog_ended</code>
  <span class="parameters">()</span>
</h3>
<p>Emitted when the dialog is ended or stopped.</p>
<hr/>

<h3 id="option-selected-signal">
  <span class="reference-type">signal </span><code>option_selected</code>
  <span class="parameters">(option_index: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>, option_dialog: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span>
</h3>
<p>Emitted when a dialog option is selected. <code>option_index</code> keeps the legacy 1-based option number for compatibility.</p>
<hr/>

<h3 id="signal-event-signal">
  <span class="reference-type">signal </span><code>signal_event</code>
  <span class="parameters">(signal_id: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, args: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>)</span>
</h3>
<p>Emitted when a signal event is emitted.</p>
<hr/>

## Property Descriptions

<h3 id="print-debug-var">
  <span class="reference-type">var </span><code>print_debug</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = false</span>
</h3>
<p>If true, the controller will print debug messages to the console. This is used to debug the dialog processing flow while it is running.</p>
<hr/>

## Method Descriptions

<h3 id="set-dialog-method">
  <span class="reference-type">func </span><code>set_dialog</code><span class="parameters">(dialog_data: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_resource.html">Resource</a>, start_id: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Sets the dialogue data and start ID to play a dialog tree. This method loads the dialogue resources and prepares the controller to process the dialog tree before calling <a href="#play-method">play</a>(). If it is called while a dialogue is running, the execution is reset without emitting <a href="#dialog-ended-signal">dialog_ended</a>.</p>
<hr/>

<h3 id="clear-dialog-method">
  <span class="reference-type">func </span><code>clear_dialog</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Clears the current dialogue data and releases its resources. It does not emit <a href="#dialog-ended-signal">dialog_ended</a>.</p>
<hr/>

<h3 id="play-method">
  <span class="reference-type">func </span><code>play</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Starts processing the configured dialogue branch. The dialogue data and start ID must be set before calling this method. Content signals can be emitted synchronously from this method, so connect your signals before calling it.</p>
<hr/>

<h3 id="continue-dialogue-method">
  <span class="reference-type">func </span><code>continue_dialogue</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Continues to the next node after a <a href="#dialogue-requested-signal">dialogue_requested</a> signal. It has no effect when the controller is not waiting for a continuation.</p>
<hr/>

<h3 id="select-option-method">
  <span class="reference-type">func </span><code>select_option</code><span class="parameters">(option_index: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Selects an option after an <a href="#options-requested-signal">options_requested</a> signal. The index is <b>0-based and only counts selectable options</b>, excluding disabled options. For example, with options <code>["A", "B", "C"]</code> and disabled flags <code>[false, true, false]</code>, the valid indexes are <code>0</code> for <code>"A"</code> and <code>1</code> for <code>"C"</code>.</p>
<hr/>

<h3 id="pause-method">
  <span class="reference-type">func </span><code>pause</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Pauses processing the dialog tree and emits <a href="#dialog-paused-signal">dialog_paused</a>. If the dialogue is not waiting for a continuation or an option, the current node is remembered so it can be resumed later.</p>
<hr/>

<h3 id="resume-method">
  <span class="reference-type">func </span><code>resume</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Resumes processing the dialog tree and emits <a href="#dialog-resumed-signal">dialog_resumed</a>. If the dialogue was waiting for input when paused, it simply waits for the same input again.</p>
<hr/>

<h3 id="stop-method">
  <span class="reference-type">func </span><code>stop</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Stops processing the dialog tree, releases its resources, and emits <a href="#dialog-ended-signal">dialog_ended</a>. The configured dialogue data is kept, so <a href="#play-method">play</a>() can be called again to restart the dialogue. Use <a href="#clear-dialog-method">clear_dialog</a>() to also discard the data.</p>
<hr/>

<h3 id="is-running-method">
  <span class="reference-type">func </span><code>is_running</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a></span>
</h3>
<p>Returns whether the dialogue is currently running.</p>
<hr/>

<h3 id="get-current-node-method">
  <span class="reference-type">func </span><code>get_current_node</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Returns the name of the node currently being processed, or an empty string if there is none.</p>
<hr/>

<h3 id="get-dialog-data-method">
  <span class="reference-type">func </span><code>get_dialog_data</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="../resources/dialogue-data">SproutyDialogsDialogueData</a></span>
</h3>
<p>Returns the [DialogueData](../resources/dialogue-data) resource being processed.</p>
<hr/>

<h3 id="get-start-id-method">
  <span class="reference-type">func </span><code>get_start_id</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Returns the start ID of the dialog tree being processed.</p>
<hr/>

<h3 id="get-character-data-method">
  <span class="reference-type">func </span><code>get_character_data</code><span class="parameters">(key_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> <a target="_blank" href="../resources/character-data">SproutyDialogsCharacterData</a></span>
</h3>
<p>Returns the [CharacterData](../resources/character-data) for a given character key name. The character resources are loaded by <a href="#set-dialog-method">set_dialog</a>(), so this method is only valid after that call.</p>
<hr/>
