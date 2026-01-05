---
sidebar_position: 1
---

# SproutyDialogsManager

**Inherits**: [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

## Description

This class is used as the [Autoload](https://docs.godotengine.org/en/stable/tutorials/scripting/singletons_autoload.html) that manages the Sprouty Dialogs plugin.

Keep track of the running dialog players and dialog states by signals. Allows to access to the plugin singletons such as the variable manager, resource manager, and more.

Also, allows to start a dialog with the [`start_dialog`](#start-dialog-method)() method directly from code, without needing to create a [DialogPlayer](/docs/class-reference/nodes/dialog-player) instance previously in the scene.

## Properties

| Type                                                                                                                                   | Name                                                  | Default                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | -------------------------------------------------------------------------------- |
| [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)[[DialogPlayer](/docs/class-reference/nodes/dialog-player.md)] | [dialog_players_running](#dialog-players-running-var) | []                                                                               |
| [SproutyDialogsResourceManager](/docs/class-reference/utils/resource-manager.md)                                                       | [Resources](#resources-var)                           | new()                                                                            |
| [SproutyDialogsVariableManager](/docs/class-reference/utils/variable-manager.md)                                                       | [Variables](#variables-var)                           | new()                                                                            |
| [SproutyDialogsSettingsManager](/docs/class-reference/utils/settings-manager.md)                                                       | [Settings](#settings-var)                             | [SproutyDialogsSettingsManager](/docs/class-reference/utils/settings-manager.md) |

## Methods

| Return Type                                               | Method                                                                                                                                                                                                        |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [DialogPlayer](/docs/class-reference/nodes/dialog-player) | [start_dialog](#start-dialog-method)(data: [SproutyDialogsDialogueData](/docs/class-reference/resources/dialogue-data), start_id: [String](https://docs.godotengine.org/en/stable/classes/class_string.html)) |

## Signals

<h3 id="dialog-started-signal">
  <span class="reference-type">signal </span><code>dialog_started</code>
  <span class="parameters">(dialog_file: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, start_id: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when the dialog starts.</p>
<hr/>

<h3 id="dialog-paused-signal">
  <span class="reference-type">signal </span><code>dialog_paused</code>
  <span class="parameters">(dialog_file: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, start_id: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when the dialog is paused.</p>
<hr/>

<h3 id="dialog-resumed-signal">
  <span class="reference-type">signal </span><code>dialog_resumed</code>
  <span class="parameters">(dialog_file: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, start_id: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when the dialog is resumed.</p>
<hr/>

<h3 id="dialog-ended-signal">
  <span class="reference-type">signal </span><code>dialog_ended</code>
  <span class="parameters">(dialog_file: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, start_id: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when the dialog is ended.</p>
<hr/>

## Property Descriptions

<h3 id="dialog-players-running-var">
  <span class="reference-type">var </span><code>dialog_players_running</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>[<a target="_blank" href="/docs/class-reference/nodes/dialog-player.md">DialogPlayer</a>] = []</span>
</h3>
<p>The list of dialog players currently running. This is used to keep track of multiple dialog players running at the same time.</p>
<hr/>

<h3 id="resources-var">
  <span class="reference-type">var </span><code>Resources</code>
  <span class="default-value"> : <a target="_blank" href="/docs/class-reference/utils/resource-manager.md">SproutyDialogsResourceManager</a> = new()</span>
</h3>
<p>Resource manager singleton instance. You can access and handle the dialogue resources from this singleton. For more information see the <a target="_blank" href="/docs/class-reference/utils/resource-manager.md">resource manager</a> class reference.</p>
<hr/>

<h3 id="variables-var">
  <span class="reference-type">var </span><code>Variables</code>
  <span class="default-value"> : <a target="_blank" href="/docs/class-reference/utils/variable-manager.md">SproutyDialogsVariableManager</a> = new()</span>
</h3>
<p>Variable manager singleton instance. You can access and handle the variables from this singleton. For more information see the <a target="_blank" href="/docs/class-reference/utils/variable-manager.md">variable manager</a> class reference.</p>
<hr/>

<h3 id="settings-var">
  <span class="reference-type">var </span><code>Settings</code>
  <span class="default-value"> : <a target="_blank" href="/docs/class-reference/utils/settings-manager.md">SproutyDialogsSettingsManager</a> = <a target="_blank" href="/docs/class-reference/utils/settings-manager.md">SproutyDialogsSettingsManager</a></span>
</h3>
<p>Settings manager reference. You can access and handle the plugin settings from this reference. For more information see the <a target="_blank" href="/docs/class-reference/utils/settings-manager.md">settings manager</a> class reference.</p>
<hr/>

## Method Descriptions

<h3 id="start-dialog-method">
  <span class="reference-type">func </span><code>start_dialog</code><span class="parameters">(data: <a target="_blank" href="/docs/class-reference/resources/dialogue-data">SproutyDialogsDialogueData</a>, start_id: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> <a target="_blank" href="/docs/class-reference/nodes/dialog-player">DialogPlayer</a></span>
</h3>
<p>
  Start a dialog with the given data and start ID. This will create a new [DialogPlayer](/docs/class-reference/nodes/dialog-player) instance and start it.
  
  <i>Also, will load the resources needed for the dialog, such as characters, dialog boxes, and portraits, before starting the dialog player.<b>This may cause a slowdown if resources are large.</b></i>
</p>

:::info[Important]

It is recommended to start the dialog from a previously created [DialogPlayer](/docs/class-reference/nodes/dialog-player) instance, instead of calling this method from here. The dialog player will handle the resource loading on [\_ready()](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-ready), loading the resources only once and reusing them for the dialog.

:::

<hr/>
