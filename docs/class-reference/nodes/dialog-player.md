---
sidebar_position: 1
---

# DialogPlayer

**Inherits**: [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

## Description

Node that plays dialog trees from Sprouty Dialogs plugin. It reads a dialog file and processes a dialog tree by ID to play the dialog.

The dialog tree is composed of nodes that represent dialogues and actions. The player processes the nodes and plays the dialogues in [DialogBox](/docs/class-reference/nodes/dialog-box) nodes.

## Methods

| Return Type                                                                   | Method                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| void                                                                          | [play_on_ready](#play-on-ready-method)(play_on_ready: [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html))                                                                                                                                                                                                                                                                                                         |
| void                                                                          | [destroy_on_end](#destroy-on-end-method)(destroy: [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html))                                                                                                                                                                                                                                                                                                             |
| [SproutyDialogsDialogueData](/docs/class-reference/resources/dialogue-data)   | [get_dialog_data](#get-dialog-data-method)()                                                                                                                                                                                                                                                                                                                                                                                          |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)    | [get_start_id](#get-start-id-method)()                                                                                                                                                                                                                                                                                                                                                                                                |
| [SproutyDialogsCharacterData](/docs/class-reference/resources/character-data) | [get_character_data](#get-character-data-method)(key_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                                                                                                                                                                                                                                |
| [DialogPortrait](/docs/class-reference/nodes/dialog-portrait)                 | [get_current_portrait](#get-current-portrait-method)()                                                                                                                                                                                                                                                                                                                                                                                |
| [DialogBox](/docs/class-reference/nodes/dialog-box)                           | [get_current_dialog_box](#get-current-dialog-box-method)()                                                                                                                                                                                                                                                                                                                                                                            |
| void                                                                          | [set_dialog](#set-dialog-method)(data: [SproutyDialogsDialogueData](/docs/class-reference/resources/dialogue-data), start_id: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), portrait_parents: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) = \{\}, dialog_box_parents: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) = \{\}) |
| void                                                                          | [start](#start-method)()                                                                                                                                                                                                                                                                                                                                                                                                              |
| void                                                                          | [pause](#pause-method)()                                                                                                                                                                                                                                                                                                                                                                                                              |
| void                                                                          | [resume](#resume-method)()                                                                                                                                                                                                                                                                                                                                                                                                            |
| void                                                                          | [stop](#stop-method)()                                                                                                                                                                                                                                                                                                                                                                                                                |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)        | [is_running](#is-running-method)()                                                                                                                                                                                                                                                                                                                                                                                                    |

## Signals

<h3 id="dialog-started-signal">
  <span class="reference-type">signal </span><code>dialog_started</code>
  <span class="parameters">(dialog_file: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, start_id: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when the dialog starts.</p>
<hr/>

<h3 id="dialog-paused-signal">
  <span class="reference-type">signal </span><code>dialog_paused</code>
  <span class="parameters">(dialog_file: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, start_id: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when the dialog is paused.</p>
<hr/>

<h3 id="dialog-resumed-signal">
  <span class="reference-type">signal </span><code>dialog_resumed</code>
  <span class="parameters">(dialog_file: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, start_id: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when the dialog is resumed.</p>
<hr/>

<h3 id="dialog-ended-signal">
  <span class="reference-type">signal </span><code>dialog_ended</code>
  <span class="parameters">(dialog_file: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, start_id: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when the dialog is ended.</p>
<hr/>

<h3 id="dialog-player-stop-signal">
  <span class="reference-type">signal </span><code>dialog_player_stop</code>
  <span class="parameters">(dialog_player: <a href="/docs/class-reference/nodes/dialog-player">DialogPlayer</a>)</span>
</h3>
<p>Emitted when the dialog player stops.</p>
<hr/>

<h3 id="option-selected-signal">
  <span class="reference-type">signal </span><code>option_selected</code>
  <span class="parameters">(current_node: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, option_index: <a href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>)</span>
</h3>
<p>Emitted when a dialog option is selected.</p>
<hr/>

<h3 id="signal-event-signal">
  <span class="reference-type">signal </span><code>signal_event</code>
  <span class="parameters">(argument: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when a signal event is emitted.</p>
<hr/>

## Method Descriptions

<h3 id="play-on-ready-method">
  <span class="reference-type">func </span><code>play_on_ready</code><span class="parameters">(play_on_ready: <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Sets whether the dialog will be played when the player node is ready. If true, the dialog will start processing when the dialog player node is ready.</p>
<hr/>

<h3 id="destroy-on-end-method">
  <span class="reference-type">func </span><code>destroy_on_end</code><span class="parameters">(destroy: <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Sets whether the player will be destroyed when the dialogue ends. If true, the player will be freed from the scene tree when the dialog ends. If false, the player will remain in the scene tree to be reused later.</p>
<hr/>

<h3 id="get-dialog-data-method">
  <span class="reference-type">func </span><code>get_dialog_data</code><span class="parameters">()</span><span class="return-type"> -> <a href="/docs/class-reference/resources/dialogue-data">SproutyDialogsDialogueData</a></span>
</h3>
<p>Returns the [DialogueData](/docs/class-reference/resources/dialogue-data) resource being processed.</p>
<hr/>

<h3 id="get-start-id-method">
  <span class="reference-type">func </span><code>get_start_id</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Returns the start ID of the dialog tree being processed.</p>
<hr/>

<h3 id="get-character-data-method">
  <span class="reference-type">func </span><code>get_character_data</code><span class="parameters">(key_name: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> <a href="/docs/class-reference/resources/character-data">SproutyDialogsCharacterData</a></span>
</h3>
<p>Returns the [CharacterData](/docs/class-reference/resources/character-data) for a given character key name.</p>
<hr/>

<h3 id="get-current-portrait-method">
  <span class="reference-type">func </span><code>get_current_portrait</code><span class="parameters">()</span><span class="return-type"> -> <a href="/docs/class-reference/nodes/dialog-portrait">DialogPortrait</a></span>
</h3>
<p>Returns the current portrait being displayed.</p>
<hr/>

<h3 id="get-current-dialog-box-method">
  <span class="reference-type">func </span><code>get_current_dialog_box</code><span class="parameters">()</span><span class="return-type"> -> <a href="/docs/class-reference/nodes/dialog-box">DialogBox</a></span>
</h3>
<p>Returns the current dialog box being displayed.</p>
<hr/>

<h3 id="set-dialog-method">
  <span class="reference-type">func </span><code>set_dialog</code><span class="parameters">(data: <a href="/docs/class-reference/resources/dialogue-data">SproutyDialogsDialogueData</a>, start_id: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, portrait_parents: <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{\}, dialog_box_parents: <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{\})</span><span class="return-type"> -> void</span>
</h3>
<p>Set the dialogue data and start ID to play a dialog tree. This method loads the dialog resources and prepares the player to process the dialog tree before calling the <a href="#start-method">start()</a> method.</p>
<hr/>

<h3 id="start-method">
  <span class="reference-type">func </span><code>start</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Start processing a dialog tree. Need to set the dialogue data and start ID before calling this method. The resources are loaded on the [_ready()](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-ready) method.</p>
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
  <span class="reference-type">func </span><code>is_running</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a></span>
</h3>
<p>Check if the dialog is running.</p>
<hr/>
