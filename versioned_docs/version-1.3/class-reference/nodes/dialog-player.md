---
sidebar_position: 1
---

# DialogPlayer

**Inherits**: [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

## Description

Node that plays dialog trees from Sprouty Dialogs plugin. It reads a dialog file and processes a dialog tree by ID to play the dialog.

The dialog tree is composed of nodes that represent dialogues and actions. The player processes the nodes and plays the dialogues in [DialogBox](./dialog-box) nodes.

## Properties

| Type                                                                   | Name                                                | Default |
| ---------------------------------------------------------------------- | --------------------------------------------------- | ------- |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html) | [autoplay](#autoplay-var)                           | `false` |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html) | [free_on_end](#free-on-end-var)                     | `true`  |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html) | [auto_advance](#auto-advance-var)                   | `false` |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html) | [text_reveal_skippable](#text-reveal-skippable-var) | `true`  |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html) | [print_debug](#print-debug-var)                     | `false` |

## Methods

| Return Type                                                                | Method                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| void                                                                       | [play](#play-method)()                                                                                                                                                                                                                                                                                                                                                                                             |
| void                                                                       | [start](#start-method)()                                                                                                                                                                                                                                                                                                                                                                                           |
| void                                                                       | [pause](#pause-method)()                                                                                                                                                                                                                                                                                                                                                                                           |
| void                                                                       | [resume](#resume-method)()                                                                                                                                                                                                                                                                                                                                                                                         |
| void                                                                       | [stop](#stop-method)()                                                                                                                                                                                                                                                                                                                                                                                             |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)     | [is_running](#is-running-method)()                                                                                                                                                                                                                                                                                                                                                                                 |
| void                                                                       | [play_on_ready](#play-on-ready-method)(enabled: [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html))                                                                                                                                                                                                                                                                                            |
| void                                                                       | [destroy_on_end](#destroy-on-end-method)(enabled: [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html))                                                                                                                                                                                                                                                                                          |
| [SproutyDialogsDialogueData](../resources/dialogue-data)                   | [get_dialog_data](#get-dialog-data-method)()                                                                                                                                                                                                                                                                                                                                                                       |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html) | [get_start_id](#get-start-id-method)()                                                                                                                                                                                                                                                                                                                                                                             |
| [SproutyDialogsCharacterData](../resources/character-data)                 | [get_character_data](#get-character-data-method)(key_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                                                                                                                                                                                                             |
| [DialogPortrait](./dialog-portrait)                                        | [get_current_portrait](#get-current-portrait-method)()                                                                                                                                                                                                                                                                                                                                                             |
| [DialogBox](./dialog-box)                                                  | [get_current_dialog_box](#get-current-dialog-box-method)()                                                                                                                                                                                                                                                                                                                                                         |
| [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)     | [get_portraits_display_override](#get-portraits-display-override-method)(character_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html) = "")                                                                                                                                                                                                                                          |
| [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)     | [get_dialog_box_display_override](#get-dialog-box-display-override-method)(character_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html) = "")                                                                                                                                                                                                                                        |
| [DialogBox](./dialog-box)                                                  | [get_dialog_box_override](#get-dialog-box-override-method)(character_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html) = "")                                                                                                                                                                                                                                                        |
| void                                                                       | [set_portraits_display_override](#set-portraits-display-override-method)(portrait_parent: [Node](https://docs.godotengine.org/en/stable/classes/class_node.html), character_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html) = "")                                                                                                                                                 |
| void                                                                       | [set_dialog_box_display_override](#set-dialog-box-display-override-method)(dialog_box_parent: [Node](https://docs.godotengine.org/en/stable/classes/class_node.html), character_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html) = "")                                                                                                                                             |
| void                                                                       | [set_dialog_box_override](#set-dialog-box-override-method)(dialog_box: [DialogBox](./dialog-box), ignore_display_override: [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html) = false, character_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html) = "")                                                                                                        |
| void                                                                       | [set_dialog](#set-dialog-method)(data: [SproutyDialogsDialogueData](../resources/dialogue-data), start_id: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), portrait_parents: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) = \{\}, dialog_box_parents: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) = \{\}) |

## Signals

<h3 id="dialog-started-signal">
  <span class="reference-type">signal </span><code>dialog_started</code>
  <span class="parameters">()</span>
</h3>
<p>Emitted when the dialog starts.</p>
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
<p>Emitted when the dialog is ended.</p>
<hr/>

<h3 id="option-selected-signal">
  <span class="reference-type">signal </span><code>option_selected</code>
  <span class="parameters">(option_index: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>, option_dialog: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span>
</h3>
<p>Emitted when a dialog option is selected.</p>
<hr/>

<h3 id="signal-event-signal">
  <span class="reference-type">signal </span><code>signal_event</code>
  <span class="parameters">(signal_id: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, args: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>)</span>
</h3>
<p>Emitted when a signal event is emitted.</p>
<hr/>

<h3 id="dialog-player-stop-signal">
  <span class="reference-type">signal </span><code>dialog_player_stop</code>
  <span class="parameters">()</span>
</h3>
<p>Emitted when the dialog player stops.</p>
<hr/>

## Property Descriptions

<h3 id="autoplay-var">
  <span class="reference-type">var </span><code>autoplay</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = false</span>
</h3>
<p>If true, dialog plays when the player node is ready. It's the same as the [play_on_ready](#play-on-ready-method) method. *(This was added to follow the Godot conventions, without breaking existing API)*</p>
<hr/>

<h3 id="free-on-end-var">
  <span class="reference-type">var </span><code>free_on_end</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = true</span>
</h3>
<p>If true, the player will be freed from the scene tree when the dialog ends. If false, the player will remain in the scene tree to be reused later. It's the same as the [destroy_on_end](#destroy-on-end-method) method. *(This was added to follow the Godot conventions, without breaking existing API)*</p>
<hr/>

<h3 id="auto-advance-var">
  <span class="reference-type">var </span><code>auto_advance</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = false</span>
</h3>
<p>If true, the player will automatically continue to the next node after a dialog is displayed. If false, the player will wait for the user to press the continue button to display the next dialog.</p>
<p>If the setting [Enabled at the start](../../settings#auto-advance) is enabled, the player will start with auto-advance enabled ignoring the value of this property set in the inspector.</p>
<hr/>

<h3 id="text-reveal-skippable-var">
  <span class="reference-type">var </span><code>text_reveal_skippable</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = true</span>
</h3>
<p>If true, the player will allow skipping the text reveal animation by pressing the continue button. If false, the player will wait for the text reveal animation to finish before continuing.</p>
<p>The setting [Allow skip text reveal](../../settings#skip-text-reveal) must be enabled to allow skipping the text reveal animation.</p>
<hr/>

<h3 id="print-debug-var">
  <span class="reference-type">var </span><code>print_debug</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = false</span>
</h3>
<p>If true, the player will print debug messages to the console. This is used to debug the dialog processing flow while is running.</p>
<hr/>

## Method Descriptions

<h3 id="play-method">
  <span class="reference-type">func </span><code>play</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Plays the dialog tree. Need to set the dialogue data and start ID before calling this method. It's the same as [start](#start-method)().</p>
<hr/>

<h3 id="start-method">
  <span class="reference-type">func </span><code>start</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Start processing a dialog tree. Need to set the dialogue data and start ID before calling this method. The resources are loaded on the [_ready](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-ready)() method.</p>

:::note[Deprecated]

Use [play](#play-method)() instead.

:::

<hr/>

<h3 id="pause-method">
  <span class="reference-type">func </span><code>pause</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Pause processing the dialog tree.</p>
<hr/>

<h3 id="resume-method">
  <span class="reference-type">func </span><code>resume</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Resume processing the dialog tree.</p>
<hr/>

<h3 id="stop-method">
  <span class="reference-type">func </span><code>stop</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Stop processing the dialog tree.</p>
<hr/>

<h3 id="is-running-method">
  <span class="reference-type">func </span><code>is_running</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a></span>
</h3>
<p>Check if the dialog is running.</p>
<hr/>

<h3 id="play-on-ready-method">
  <span class="reference-type">func </span><code>play_on_ready</code><span class="parameters">(enabled: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Sets whether the dialog will be played when the player node is ready. If true, the dialog will start processing when the dialog player node is ready.</p>

:::note[Deprecated]

Use the `autoplay` property instead.

:::

<hr/>

<h3 id="destroy-on-end-method">
  <span class="reference-type">func </span><code>destroy_on_end</code><span class="parameters">(enabled: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Sets whether the player will be destroyed when the dialogue ends. If true, the player will be freed from the scene tree when the dialog ends. If false, the player will remain in the scene tree to be reused later.</p>

:::note[Deprecated]

Use the `free_on_end` property instead.

:::

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
<p>Returns the [CharacterData](../resources/character-data) for a given character key name.</p>
<hr/>

<h3 id="get-current-portrait-method">
  <span class="reference-type">func </span><code>get_current_portrait</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="./dialog-portrait">DialogPortrait</a></span>
</h3>
<p>Returns the current portrait being displayed.</p>
<hr/>

<h3 id="get-current-dialog-box-method">
  <span class="reference-type">func </span><code>get_current_dialog_box</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="./dialog-box">DialogBox</a></span>
</h3>
<p>Returns the current dialog box being displayed.</p>
<hr/>

<h3 id="get-portraits-display-override-method">
  <span class="reference-type">func </span><code>get_portraits_display_override</code><span class="parameters">(character_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = "")</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_node.html">Node</a></span>
</h3>
<p>Returns the parent node where the portraits will be displayed for a given character. If no character name is provided, it returns the default portraits display parent node for all characters (if set, otherwise it returns null).</p>
<hr/>

<h3 id="get-dialog-box-display-override-method">
  <span class="reference-type">func </span><code>get_dialog_box_display_override</code><span class="parameters">(character_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = "")</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_node.html">Node</a></span>
</h3>
<p>Returns the parent node where the dialog box will be displayed for a given character. If no character name is provided, it returns the default dialog box display parent node for all characters (if set, otherwise it returns null).</p>
<hr/>

<h3 id="get-dialog-box-override-method">
  <span class="reference-type">func </span><code>get_dialog_box_override</code><span class="parameters">(character_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = "")</span><span class="return-type"> -> <a target="_blank" href="./dialog-box">DialogBox</a></span>
</h3>
<p>Returns the dialog box node to be used for a given character. If no character name is provided, it returns the default overrided dialog box node for all characters (if set, otherwise it returns null).</p>
<hr/>

<h3 id="set-portraits-display-override-method">
  <span class="reference-type">func </span><code>set_portraits_display_override</code><span class="parameters">(portrait_parent: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_node.html">Node</a>, character_name: <a target="_blank" href="https://docs.gotengine.org/en/stable/classes/class_string.html">String</a> = "")</span><span class="return-type"> -> void</span>
</h3>
<p>Sets the parent node where the portraits will be displayed for a given character. If no character name is provided, it sets the default portraits display parent node for all characters.</p>
<hr/>

<h3 id="set-dialog-box-display-override-method">
  <span class="reference-type">func </span><code>set_dialog_box_display_override</code><span class="parameters">(dialog_box_parent: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_node.html">Node</a>, character_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = "")</span><span class="return-type"> -> void</span>
</h3>
<p>Sets the parent node where the dialog box will be displayed for a given character. If no character name is provided, it sets the default dialog box display parent node for all characters.</p>
<hr/>

<h3 id="set-dialog-box-override-method">
  <span class="reference-type">func </span><code>set_dialog_box_override</code><span class="parameters">(dialog_box: <a target="_blank" href="./dialog-box">DialogBox</a>, ignore_display_override: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = false, character_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = "")</span><span class="return-type"> -> void</span>
</h3>
<p>Sets the dialog box node to be used for a given character. If no character name is provided, it sets the default dialog box override for all characters. If the ignore_display_override flag is set to true, the dialog box will be used as is, without changing its parent node.</p>
<hr/>

<h3 id="set-dialog-method">
  <span class="reference-type">func </span><code>set_dialog</code><span class="parameters">(data: <a target="_blank" href="../resources/dialogue-data">SproutyDialogsDialogueData</a>, start_id: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, portrait_parents: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{\}, dialog_box_parents: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{\})</span><span class="return-type"> -> void</span>
</h3>
<p>Set the dialogue data and start ID to play a dialog tree. This method loads the dialog resources and prepares the player to process the dialog tree before calling the <a target="_blank" href="#start-method">start</a>() method.</p>
<hr/>
