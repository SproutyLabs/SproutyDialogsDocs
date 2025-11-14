---
sidebar_position: 1
---

# SproutyDialogsManager

**Inherits**: [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

## Description

This class is used an [Autoload](https://docs.godotengine.org/es/4.x/tutorials/scripting/singletons_autoload.html) that manages the Sprouty Dialogs plugin.

Keep track of the running dialog players and dialog states by signals. Also, allows to start a dialog with the [`start_dialog`](#start-dialog-method)() method directly from code, without needing to create a [DialogPlayer](/docs/class-reference/nodes/dialog-player) instance previously in the scene.

## Methods

| Return Type                                                                                                                           | Method                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)\[[DialogPlayer](/docs/class-reference/nodes/dialog-player)\] | [get_running_dialog_players](#get-running-dialog-players-method)()                                                                                                                                            |
| void                                                                                                                                  | [set_dialog_player_as_running](#set-dialog-player-as-running-method)(player: [DialogPlayer](/docs/class-reference/nodes/dialog-player))                                                                       |
| [SproutyDialogsResourceManager](/docs/class-reference/utils/resource-manager)                                                         | [get_resource_manager](#get-resource-manager-method)()                                                                                                                                                        |
| [DialogPlayer](/docs/class-reference/nodes/dialog-player)                                                                             | [start_dialog](#start-dialog-method)(data: [SproutyDialogsDialogueData](/docs/class-reference/resources/dialogue-data), start_id: [String](https://docs.godotengine.org/en/stable/classes/class_string.html)) |

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

## Method Descriptions

<h3 id="get-running-dialog-players-method">
  <span class="reference-type">func </span><code>get_running_dialog_players</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>[<a href="/docs/class-reference/nodes/dialog-player">DialogPlayer</a>]</span>
</h3>
<p>Returns the current dialog players instances running.</p>
<hr/>

<h3 id="set-dialog-player-as-running-method">
  <span class="reference-type">func </span><code>set_dialog_player_as_running</code><span class="parameters">(player: <a href="/docs/class-reference/nodes/dialog-player">DialogPlayer</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Sets a dialog player as running. Connects the dialog player signals to the manager.</p>
<hr/>

<h3 id="get-resource-manager-method">
  <span class="reference-type">func </span><code>get_resource_manager</code><span class="parameters">()</span><span class="return-type"> -> <a href="/docs/class-reference/utils/resource-manager">SproutyDialogsResourceManager</a></span>
</h3>
<p>Returns the resource manager instance used to load resources for the dialogs in the current scene. If no resource manager is set, it will create a new one.</p>
<hr/>

<h3 id="start-dialog-method">
  <span class="reference-type">func </span><code>start_dialog</code><span class="parameters">(data: <a href="/docs/class-reference/resources/dialogue-data">SproutyDialogsDialogueData</a>, start_id: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> <a href="/docs/class-reference/nodes/dialog-player">DialogPlayer</a></span>
</h3>
<p>
  Start a dialog with the given data and start ID. This will create a new [DialogPlayer](/docs/class-reference/nodes/dialog-player) instance and start it.
  
  <i>Also, will load the resources needed for the dialog, such as characters, dialog boxes, and portraits, before starting the dialog player.<b>This may cause a slowdown if resources are large.</b></i>
</p>

:::info[Important]

It is recommended to start the dialog from a previously created [DialogPlayer](/docs/class-reference/nodes/dialog-player) instance, instead of calling this method from here. The dialog player will handle the resource loading on [\_ready()](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-ready), loading the resources only once and reusing them for the dialog.

:::

<hr/>
