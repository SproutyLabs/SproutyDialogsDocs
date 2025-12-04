---
sidebar_position: 1
---

# SproutyDialogsBaseNode

<span class="abstract-class-label">Abstract Class</span>

**Inherits**: [GraphNode](https://docs.godotengine.org/en/stable/classes/class_graphnode.html)

## Description

Abstract class for graph nodes from Sprouty Dialogs plugin.

It handles the node color and icon for the titlebar. It also provides methods to get and set the node data that should be overridden in each child node class.

:::info

You should inherit from this class to create your own dialog nodes.

:::

## Properties

| Type                                                                             | Name                                    | Default |
| -------------------------------------------------------------------------------- | --------------------------------------- | ------- |
| [Color](https://docs.godotengine.org/en/stable/classes/class_color.html)         | [node_color](#node-color-var)           | -       |
| [Texture2D](https://docs.godotengine.org/en/stable/classes/class_texture2d.html) | [node_icon](#node-icon-var)             | null    |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)       | [start_node_name](#start-node-name-var) | ""      |
| [SproutyDialogsBaseNode](/docs/class-reference/event-nodes/base-node)            | [start_node](#start-node-var)           | null    |
| [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)         | [to_node](#to-node-var)                 | []      |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)       | [node_type](#node-type-var)             | ""      |
| [int](https://docs.godotengine.org/en/stable/classes/class_int.html)             | [node_index](#node-index-var)           | 0       |

## Methods

| Return Type                                                                        | Method                                                                                                                                                                       |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [get_data](#get-data-method)() <span class="abstract-method-label">(abstract)</span>                                                                                         |
| void                                                                               | [set_data](#set-data-method)(dict: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html)) <span class="abstract-method-label">(abstract)</span> |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)         | [get_start_id](#get-start-id-method)()                                                                                                                                       |

## Signals

<h3 id="modified-signal">
  <span class="reference-type">signal </span><code>modified</code>
  <span class="parameters">(modified: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a>)</span>
</h3>
<p>Emitted when the node is modified.</p>
<hr/>

## Property Descriptions

<h3 id="node-color-var">
  <span class="reference-type">var </span><code>node_color</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_color.html">Color</a></span>
</h3>
<p>Node color to display on the node titlebar.</p>
<hr/>

<h3 id="node-icon-var">
  <span class="reference-type">var </span><code>node_icon</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_texture2d.html">Texture2D</a></span>
</h3>
<p>Icon to display on the node titlebar.</p>
<hr/>

<h3 id="start-node-name-var">
  <span class="reference-type">var </span><code>start_node_name</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = ""</span>
</h3>
<p>Name of the start node in the dialog tree where the node belongs. Used to find the start node in the graph editor on load.</p>
<hr/>

<h3 id="start-node-var">
  <span class="reference-type">var </span><code>start_node</code>
  <span class="default-value"> : <a target="_blank" href="/docs/class-reference/event-nodes/base-node">SproutyDialogsBaseNode</a> = null</span>
</h3>
<p>Start node of the dialog tree where the node belongs.</p>
<hr/>

<h3 id="to-node-var">
  <span class="reference-type">var </span><code>to_node</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a> = []</span>
</h3>
<p>Array to store the output nodes connections.</p>
<hr/>

<h3 id="node-type-var">
  <span class="reference-type">var </span><code>node_type</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = ""</span>
</h3>
<p>Node type name.</p>
<hr/>

<h3 id="node-index-var">
  <span class="reference-type">var </span><code>node_index</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a> = 0</span>
</h3>
<p>Index of the node in the graph editor.</p>
<hr/>

## Method Descriptions

<h3 id="get-data-method">
  <span class="reference-type">func </span><code>get_data</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span> <span class="abstract-method-label"> (abstract)</span>
</h3>
<p>Returns the node data as a dictionary. <b>This method must be overridden in each node.</b></p>
<hr/>

<h3 id="set-data-method">
  <span class="reference-type">func </span><code>set_data</code><span class="parameters">(dict: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span><span class="return-type"> -> void</span> <span class="abstract-method-label"> (abstract)</span>
</h3>
<p>Set the node data from a dictionary. <b>This method must be overridden in each node.</b></p>
<hr/>

<h3 id="get-start-id-method">
  <span class="reference-type">func </span><code>get_start_id</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Returns the start node id of the dialog tree.</p>
<hr/>
