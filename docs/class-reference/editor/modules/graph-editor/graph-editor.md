---
sidebar_position: 1
---

# EditorSproutyDialogsGraphEditor

**Inherits**: [GraphEdit](https://docs.godotengine.org/en/stable/classes/class_graphedit.html)

## Description

This module is the graph editor where the dialog trees are edited in the Sprouty Dialogs plugin. It handles the nodes, connections, and graph data. Provides a visual interface for creating and managing dialogue flow with support for multiple node types, drag-and-drop, copy/paste operations, and undo/redo functionality.

## Properties

| Type                                                                                                     | Name                        | Default |
| -------------------------------------------------------------------------------------------------------- | --------------------------- | ------- |
| [EditorUndoRedoManager](https://docs.godotengine.org/en/stable/classes/class_editorundoredomanager.html) | [undo_redo](#undo-redo-var) | null    |

## Methods

| Return Type                                                                        | Method                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| void                                                                               | [on_locales_changed](#on-locales-changed-method)()                                                                                                                                                                                                                                                          |
| void                                                                               | [on_translation_enabled_changed](#on-translation-enabled-changed-method)(enabled: [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html))                                                                                                                                                   |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [get_graph_data](#get-graph-data-method)()                                                                                                                                                                                                                                                                  |
| void                                                                               | [load_graph_data](#load-graph-data-method)(data: [SproutyDialogsDialogueData](/docs/class-reference/resources/dialogue-data), dialogs: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html))                                                                                  |
| void                                                                               | [delete_node](#delete-node-method)(node: [GraphNode](https://docs.godotengine.org/en/stable/classes/class_graphnode.html), from_request: [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html))                                                                                            |
| [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)           | [get_node_connections](#get-node-connections-method)(node: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), all: [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html), out: [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html))            |
| [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)           | [get_node_output_connections](#get-node-output-connections-method)(node: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), port: [int](https://docs.godotengine.org/en/stable/classes/class_int.html))                                                                            |
| void                                                                               | [disconnect_node_on_port](#disconnect-node-on-port-method)(node: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), port: [int](https://docs.godotengine.org/en/stable/classes/class_int.html), as_action: [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)) |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)             | [is_graph_empty](#is-graph-empty-method)()                                                                                                                                                                                                                                                                  |
| void                                                                               | [clear_graph](#clear-graph-method)()                                                                                                                                                                                                                                                                        |

## Signals

<h3 id="modified-signal">
  <span class="reference-type">signal </span><code>modified</code>
  <span class="parameters">(modified: <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a>)</span>
</h3>
<p>Triggered when the graph is modified.</p>
<hr/>

<h3 id="nodes-loaded-signal">
  <span class="reference-type">signal </span><code>nodes_loaded</code>
</h3>
<p>Triggered when all the nodes are loaded.</p>
<hr/>

<h3 id="open-character-file-request-signal">
  <span class="reference-type">signal </span><code>open_character_file_request</code>
  <span class="parameters">(path: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when is requesting to open a character file.</p>
<hr/>

<h3 id="play-dialog-request-signal">
  <span class="reference-type">signal </span><code>play_dialog_request</code>
  <span class="parameters">(start_id: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when is requesting to play a dialog from a start node.</p>
<hr/>

<h3 id="open-text-editor-signal">
  <span class="reference-type">signal </span><code>open_text_editor</code>
  <span class="parameters">(text_box: <a href="https://docs.godotengine.org/en/stable/classes/class_textedit.html">TextEdit</a>)</span>
</h3>
<p>Emitted when an expand button to open the text editor is pressed.</p>
<hr/>

<h3 id="update-text-editor-signal">
  <span class="reference-type">signal </span><code>update_text_editor</code>
  <span class="parameters">(text_box: <a href="https://docs.godotengine.org/en/stable/classes/class_textedit.html">TextEdit</a>)</span>
</h3>
<p>Emitted when change the focus to another text box while the text editor is open.</p>
<hr/>

<h3 id="locales-changed-signal">
  <span class="reference-type">signal </span><code>locales_changed</code>
</h3>
<p>Emitted when the locales are changed.</p>
<hr/>

<h3 id="translation-enabled-changed-signal">
  <span class="reference-type">signal </span><code>translation_enabled_changed</code>
  <span class="parameters">(enabled: <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a>)</span>
</h3>
<p>Emitted when the translation enabled state is changed.</p>
<hr/>

## Property Descriptions

<h3 id="undo-redo-var">
  <span class="reference-type">var </span><code>undo_redo</code>
  <span class="default-value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_editorundoredomanager.html">EditorUndoRedoManager</a></span>
</h3>
<p>UndoRedo manager for handling undo/redo operations in the graph editor.</p>
<hr/>

## Method Descriptions

<h3 id="on-locales-changed-method">
  <span class="reference-type">func </span><code>on_locales_changed</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Notify the nodes that the locales have changed in the project settings.</p>
<hr/>

<h3 id="on-translation-enabled-changed-method">
  <span class="reference-type">func </span><code>on_translation_enabled_changed</code><span class="parameters">(enabled: <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Notify the nodes that the translation enabled state has changed.</p>
<hr/>

<h3 id="get-graph-data-method">
  <span class="reference-type">func </span><code>get_graph_data</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>
  Return the graph data in a dictionary, including nodes data, dialogs, and characters. Each one is stored in a separate sub-dictionary. The nodes data has the graph data organized by start node ID and unplugged nodes.
</p>
<hr/>

<h3 id="load-graph-data-method">
  <span class="reference-type">func </span><code>load_graph_data</code><span class="parameters">(data: <a href="/docs/class-reference/resources/dialogue-data">SproutyDialogsDialogueData</a>, dialogs: <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>
  Load graph data from a [SproutyDialogsDialogueData](/docs/class-reference/resources/dialogue-data) resource and dialogs dictionary. Creates all nodes and establishes connections based on the provided data.
</p>
<hr/>

<h3 id="delete-node-method">
  <span class="reference-type">func </span><code>delete_node</code><span class="parameters">(node: <a href="https://docs.godotengine.org/en/stable/classes/class_graphnode.html">GraphNode</a>, from_request: <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = false)</span><span class="return-type"> -> void</span>
</h3>
<p>
  Delete a node from graph. Disconnects all connections and removes the node. If <code>from_request</code> is false, creates an undo/redo action.
</p>
<hr/>

<h3 id="get-node-connections-method">
  <span class="reference-type">func </span><code>get_node_connections</code><span class="parameters">(node: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, all: <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = false, out: <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = true)</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a></span>
</h3>
<p>
  Return the output or input connections of a given node. If <code>all</code> is true, returns both input and output connections. If <code>out</code> is true, returns only output connections, otherwise input connections.
</p>
<hr/>

<h3 id="get-node-output-connections-method">
  <span class="reference-type">func </span><code>get_node_output_connections</code><span class="parameters">(node: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, port: <a href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>)</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a></span>
</h3>
<p>Return the connections from a node on the given output port.</p>
<hr/>

<h3 id="disconnect-node-on-port-method">
  <span class="reference-type">func </span><code>disconnect_node_on_port</code><span class="parameters">(node: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, port: <a href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>, as_action: <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = false)</span><span class="return-type"> -> void</span>
</h3>
<p>
  Disconnect an output connection from a node on the given port. If <code>as_action</code> is true, creates an undo/redo action.
</p>
<hr/>

<h3 id="is-graph-empty-method">
  <span class="reference-type">func </span><code>is_graph_empty</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a></span>
</h3>
<p>Check if graph does not have any nodes.</p>
<hr/>

<h3 id="clear-graph-method">
  <span class="reference-type">func </span><code>clear_graph</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Clear graph removing all current nodes.</p>
<hr/>
