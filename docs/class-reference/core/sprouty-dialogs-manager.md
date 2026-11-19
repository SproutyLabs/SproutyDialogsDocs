---
sidebar_position: 1
---

# SproutyDialogsManager

**Inherits**: [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

## Description

This class is used as the [Autoload](https://docs.godotengine.org/en/stable/tutorials/scripting/singletons_autoload.html) that manages the Sprouty Dialogs plugin.

Keep track of the running dialog players, dialog controllers, and dialog states by signals. Allows to access to the plugin singletons such as the variable manager, resource manager, and more.

Also, allows to start a dialog with the [play](#play-method)() method directly from code, without needing to create a [DialogPlayer](../nodes/dialog-player) instance previously in the scene.

:::info[About Dialog controllers]

[DialogController](../nodes/dialog-controller) nodes register themselves in the autoload automatically. Controllers are tracked in [dialog_controllers_running](#dialog-controllers-running-var) and emit the separate `controller_*` signals, so listeners can always identify which controller triggered an event. See the [Dialog Controller guide](../../dialogues/dialog-controller.md) for more details.

:::

## Properties

| Type                                                                                                                        | Name                                                          | Default                                                       |
| --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)[[DialogPlayer](../nodes/dialog-player.md)]         | [dialog_players_running](#dialog-players-running-var)         | []                                                            |
| [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)[[DialogController](../nodes/dialog-controller.md)] | [dialog_controllers_running](#dialog-controllers-running-var) | []                                                            |
| [SproutyDialogsResourceManager](../runtime/resource-manager.md)                                                               | [Resources](#resources-var)                                   | new()                                                         |
| [SproutyDialogsVariableManager](../utils/variable-manager.md)                                                               | [Variables](#variables-var)                                   | new()                                                         |
| [SproutyDialogsSettingsManager](../utils/settings-manager.md)                                                               | [Settings](#settings-var)                                     | [SproutyDialogsSettingsManager](../utils/settings-manager.md) |

## Methods

| Return Type                            | Method                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [DialogPlayer](../nodes/dialog-player) | [play](#play-method)(data: [SproutyDialogsDialogueData](../resources/dialogue-data), start_id: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), portrait_parents: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) = \{\}, dialog_box_parents: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) = \{\})                 |
| [DialogPlayer](../nodes/dialog-player) | [start_dialog](#start-dialog-method)(data: [SproutyDialogsDialogueData](../resources/dialogue-data), start_id: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), portrait_parents: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) = \{\}, dialog_box_parents: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) = \{\}) |

## Signals

<h3 id="dialog-started-signal">
  <span class="reference-type">signal </span><code>dialog_started</code>
  <span class="parameters">()</span>
</h3>
<p>Emitted when a dialog starts.</p>
<hr/>

<h3 id="dialog-paused-signal">
  <span class="reference-type">signal </span><code>dialog_paused</code>
  <span class="parameters">()</span>
</h3>
<p>Emitted when a dialog is paused.</p>
<hr/>

<h3 id="dialog-resumed-signal">
  <span class="reference-type">signal </span><code>dialog_resumed</code>
  <span class="parameters">()</span>
</h3>
<p>Emitted when a dialog is resumed.</p>
<hr/>

<h3 id="dialog-ended-signal">
  <span class="reference-type">signal </span><code>dialog_ended</code>
  <span class="parameters">()</span>
</h3>
<p>Emitted when a dialog is ended.</p>
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

<h3 id="controller-started-signal">
  <span class="reference-type">signal </span><code>controller_started</code>
  <span class="parameters">(controller: <a target="_blank" href="../nodes/dialog-controller">DialogController</a>)</span>
</h3>
<p>Emitted when a <a target="_blank" href="../nodes/dialog-controller">DialogController</a> starts a dialogue.</p>
<hr/>

<h3 id="controller-dialogue-requested-signal">
  <span class="reference-type">signal </span><code>controller_dialogue_requested</code>
  <span class="parameters">(controller: <a target="_blank" href="../nodes/dialog-controller">DialogController</a>, character_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, translated_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, portrait: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, dialogue_data: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span>
</h3>
<p>Emitted when a <a target="_blank" href="../nodes/dialog-controller">DialogController</a> processes a dialogue node.</p>
<hr/>

<h3 id="controller-options-requested-signal">
  <span class="reference-type">signal </span><code>controller_options_requested</code>
  <span class="parameters">(controller: <a target="_blank" href="../nodes/dialog-controller">DialogController</a>, options: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>, disabled_options: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>)</span>
</h3>
<p>Emitted when a <a target="_blank" href="../nodes/dialog-controller">DialogController</a> processes an options node.</p>
<hr/>

<h3 id="controller-wait-started-signal">
  <span class="reference-type">signal </span><code>controller_wait_started</code>
  <span class="parameters">(controller: <a target="_blank" href="../nodes/dialog-controller">DialogController</a>, wait_time: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_float.html">float</a>, close_dialog: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a>)</span>
</h3>
<p>Emitted when a <a target="_blank" href="../nodes/dialog-controller">DialogController</a> starts processing a wait node.</p>
<hr/>

<h3 id="controller-wait-ended-signal">
  <span class="reference-type">signal </span><code>controller_wait_ended</code>
  <span class="parameters">(controller: <a target="_blank" href="../nodes/dialog-controller">DialogController</a>)</span>
</h3>
<p>Emitted when a <a target="_blank" href="../nodes/dialog-controller">DialogController</a> finishes waiting.</p>
<hr/>

<h3 id="controller-paused-signal">
  <span class="reference-type">signal </span><code>controller_paused</code>
  <span class="parameters">(controller: <a target="_blank" href="../nodes/dialog-controller">DialogController</a>)</span>
</h3>
<p>Emitted when a <a target="_blank" href="../nodes/dialog-controller">DialogController</a> is paused.</p>
<hr/>

<h3 id="controller-resumed-signal">
  <span class="reference-type">signal </span><code>controller_resumed</code>
  <span class="parameters">(controller: <a target="_blank" href="../nodes/dialog-controller">DialogController</a>)</span>
</h3>
<p>Emitted when a <a target="_blank" href="../nodes/dialog-controller">DialogController</a> is resumed.</p>
<hr/>

<h3 id="controller-ended-signal">
  <span class="reference-type">signal </span><code>controller_ended</code>
  <span class="parameters">(controller: <a target="_blank" href="../nodes/dialog-controller">DialogController</a>)</span>
</h3>
<p>Emitted when a <a target="_blank" href="../nodes/dialog-controller">DialogController</a> ends or is stopped.</p>
<hr/>

<h3 id="controller-option-selected-signal">
  <span class="reference-type">signal </span><code>controller_option_selected</code>
  <span class="parameters">(controller: <a target="_blank" href="../nodes/dialog-controller">DialogController</a>, option_index: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>, option_dialog: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span>
</h3>
<p>Emitted when an option is selected on a <a target="_blank" href="../nodes/dialog-controller">DialogController</a>.</p>
<hr/>

<h3 id="controller-signal-event-signal">
  <span class="reference-type">signal </span><code>controller_signal_event</code>
  <span class="parameters">(controller: <a target="_blank" href="../nodes/dialog-controller">DialogController</a>, signal_id: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, args: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>)</span>
</h3>
<p>Emitted when a <a target="_blank" href="../nodes/dialog-controller">DialogController</a> emits a signal event.</p>
<hr/>

## Property Descriptions

<h3 id="dialog-players-running-var">
  <span class="reference-type">var </span><code>dialog_players_running</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>[<a target="_blank" href="../nodes/dialog-player">DialogPlayer</a>] = []</span>
</h3>
<p>The list of dialog players currently running. This is used to keep track of multiple dialog players running at the same time.</p>
<hr/>

<h3 id="dialog-controllers-running-var">
  <span class="reference-type">var </span><code>dialog_controllers_running</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>[<a target="_blank" href="../nodes/dialog-controller">DialogController</a>] = []</span>
</h3>
<p>The list of dialog controllers currently running. A <a target="_blank" href="../nodes/dialog-controller">DialogController</a> adds itself when it starts a dialogue and removes itself when the dialogue ends, is stopped, or the controller leaves the scene tree. Systems that check if a dialogue is active must also check this list when controlled dialogues count.</p>
<hr/>

<h3 id="resources-var">
  <span class="reference-type">var </span><code>Resources</code>
  <span class="default-value"> : <a target="_blank" href="../runtime/resource-manager">SproutyDialogsResourceManager</a> = new()</span>
</h3>
<p>Resource manager singleton instance. You can access and handle the dialogue resources from this singleton. For more information see the <a target="_blank" href="../runtime/resource-manager">resource manager</a> class reference.</p>
<hr/>

<h3 id="variables-var">
  <span class="reference-type">var </span><code>Variables</code>
  <span class="default-value"> : <a target="_blank" href="../utils/variable-manager">SproutyDialogsVariableManager</a> = new()</span>
</h3>
<p>Variable manager singleton instance. You can access and handle the variables from this singleton. For more information see the <a target="_blank" href="../utils/variable-manager">variable manager</a> class reference.</p>
<hr/>

<h3 id="settings-var">
  <span class="reference-type">var </span><code>Settings</code>
  <span class="default-value"> : <a target="_blank" href="../utils/settings-manager">SproutyDialogsSettingsManager</a> = <a target="_blank" href="../utils/settings-manager">SproutyDialogsSettingsManager</a></span>
</h3>
<p>Settings manager reference. You can access and handle the plugin settings from this reference. For more information see the <a target="_blank" href="../utils/settings-manager">settings manager</a> class reference.</p>
<hr/>

## Method Descriptions

<h3 id="play-method">
  <span class="reference-type">func </span><code>play</code><span class="parameters">(data: <a target="_blank" href="../resources/dialogue-data">SproutyDialogsDialogueData</a>, start_id: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, portrait_parents: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{\}, dialog_box_parents: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{\})</span><span class="return-type"> -> <a target="_blank" href="../nodes/dialog-player">DialogPlayer</a></span>
</h3>
<p>
  Play a dialog with the given data and start ID. This will create a new [DialogPlayer](../nodes/dialog-player) instance and play it. It's the same as [start_dialog](#start-dialog-method). *(This was added to follow the Godot conventions, without breaking existing API.)*
</p>

:::info[Important]

This method also loads all the resources needed for the dialogue at once when the method is called, so may cause a **slowdown if you have large resources to load**.

For more details see the [about dialogue resources](../runtime/resource-manager) section.

:::

<hr/>

<h3 id="start-dialog-method">
  <span class="reference-type">func </span><code>start_dialog</code><span class="parameters">(data: <a target="_blank" href="../resources/dialogue-data">SproutyDialogsDialogueData</a>, start_id: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, portrait_parents: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{\}, dialog_box_parents: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{\})</span><span class="return-type"> -> <a target="_blank" href="../nodes/dialog-player">DialogPlayer</a></span>
</h3>
<p>
  Start a dialog with the given data and start ID. This will create a new [DialogPlayer](../nodes/dialog-player) instance and start it.
</p>

:::note[Deprecated]

Use [play](#play-method) instead.

:::

:::info[Important]

This method also loads all the resources needed for the dialogue at once when the method is called, so may cause a **slowdown if you have large resources to load**.

For more details see the [about dialogue resources](../runtime/resource-manager) section.

:::

<hr/>
