---
sidebar_position: 3
---

# SproutyDialogsRunner

**Inherits**: [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

## Description

Internal node that executes the dialogue trees from Sprouty Dialogs plugin.

It processes the event nodes, manages the dialogue state and resources, and emits execution events for a presentation layer to display the dialogues. It does not create or depend on any UI node.

This class is used internally by [DialogPlayer](../nodes/dialog-player.md) and [DialogController](../nodes/dialog-controller.md). Use one of those nodes instead of using the runner directly.

:::info[Important]

`SproutyDialogsRunner` is an implementation detail. **You should not need to use this class directly.** Use [DialogPlayer](../nodes/dialog-player.md) for dialogues with the built-in UI and input handling, or [DialogController](../nodes/dialog-controller.md) to handle the presentation externally.

:::

## Properties

| Type                                                                               | Name                                      | Default |
| ---------------------------------------------------------------------------------- | ----------------------------------------- | ------- |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)             | [print_debug](#print-debug-var)           | `false` |
| [Callable](https://docs.godotengine.org/en/stable/classes/class_callable.html)     | [dialog_box_getter](#dialog-box-getter-var) | `Callable()` |

## Methods

| Return Type                                                                | Method                                                                                                                    |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| void                                                                       | [set_dialog](#set-dialog-method)(dialog_data: [SproutyDialogsDialogueData](../resources/dialogue-data), start_id: [String](https://docs.godotengine.org/en/stable/classes/class_string.html)) |
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
| [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)     | [get_current_dialog_box](#get-current-dialog-box-method)()                                                                |

## Signals

<h3 id="dialog-started-signal">
  <span class="reference-type">signal </span><code>dialog_started</code>
  <span class="parameters">()</span>
</h3>
<p>Emitted when the dialog starts.</p>
<hr/>

<h3 id="dialogue-requested-signal">
  <span class="reference-type">signal </span><code>dialogue_requested</code>
  <span class="parameters">(character_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, translated_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, portrait: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, dialogue_data: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span>
</h3>
<p>Emitted when a dialogue node is processed and should be displayed. The runner does not advance until <a href="#continue-dialogue-method">continue_dialogue</a>() is called.</p>
<hr/>

<h3 id="options-requested-signal">
  <span class="reference-type">signal </span><code>options_requested</code>
  <span class="parameters">(options: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>, disabled_options: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>)</span>
</h3>
<p>Emitted when an options node is processed and the options should be displayed. The runner does not select an option until <a href="#select-option-method">select_option</a>() is called.</p>
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

## Property Descriptions

<h3 id="print-debug-var">
  <span class="reference-type">var </span><code>print_debug</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = false</span>
</h3>
<p>If true, the runner will print debug messages to the console. This is used to debug the dialog processing flow while it is running.</p>
<hr/>

<h3 id="dialog-box-getter-var">
  <span class="reference-type">var </span><code>dialog_box_getter</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_callable.html">Callable</a> = Callable()</span>
</h3>
<p>Optional callback used by wait nodes to retrieve the dialog box that should be stopped or hidden. A presentation layer can assign any [Callable](https://docs.godotengine.org/en/stable/classes/class_callable.html) that returns a [Node](https://docs.godotengine.org/en/stable/classes/class_node.html), keeping the runner independent from UI classes. Presentation layers that do not provide a getter can react to <a href="#wait-started-signal">wait_started</a> and <a href="#wait-ended-signal">wait_ended</a> instead.</p>
<hr/>

## Method Descriptions

<h3 id="set-dialog-method">
  <span class="reference-type">func </span><code>set_dialog</code><span class="parameters">(dialog_data: <a target="_blank" href="../resources/dialogue-data">SproutyDialogsDialogueData</a>, start_id: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Sets the dialogue data and start ID to play a dialog tree. This method loads the dialog resources and prepares the runner to process the dialog tree before calling <a href="#play-method">play</a>().</p>
<hr/>

<h3 id="clear-dialog-method">
  <span class="reference-type">func </span><code>clear_dialog</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Clears the current dialogue data and releases its resources.</p>
<hr/>

<h3 id="play-method">
  <span class="reference-type">func </span><code>play</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Starts processing the configured dialogue branch.</p>
<hr/>

<h3 id="continue-dialogue-method">
  <span class="reference-type">func </span><code>continue_dialogue</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Continues to the next node after a dialogue was requested.</p>
<hr/>

<h3 id="select-option-method">
  <span class="reference-type">func </span><code>select_option</code><span class="parameters">(option_index: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Selects an option after an options node was processed. The index is 0-based and only counts selectable options, excluding disabled options.</p>
<hr/>

<h3 id="pause-method">
  <span class="reference-type">func </span><code>pause</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Pauses processing the dialog tree.</p>
<hr/>

<h3 id="resume-method">
  <span class="reference-type">func </span><code>resume</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Resumes processing the dialog tree.</p>
<hr/>

<h3 id="stop-method">
  <span class="reference-type">func </span><code>stop</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Stops processing the dialog tree and releases its resources.</p>
<hr/>

<h3 id="is-running-method">
  <span class="reference-type">func </span><code>is_running</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a></span>
</h3>
<p>Returns whether the dialogue is currently running.</p>
<hr/>

<h3 id="get-current-node-method">
  <span class="reference-type">func </span><code>get_current_node</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Returns the name of the node currently being processed.</p>
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

<h3 id="get-current-dialog-box-method">
  <span class="reference-type">func </span><code>get_current_dialog_box</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_node.html">Node</a></span>
</h3>
<p>Returns the dialog box provided by the presentation layer through <a href="#dialog-box-getter-var">dialog_box_getter</a>, if any. This is used by wait nodes to keep working with the event interpreter.</p>
<hr/>
