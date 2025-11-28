---
sidebar_position: 5
---

# SproutyDialogsEventInterpreter

**Inherits**: [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

## Description

Node that process the event nodes of a dialog tree from the Sprouty Dialogs plugin.

This node is used by the [DialogPlayer](/docs/class-reference/nodes/dialog-player) to process the nodes of a dialog tree.

:::info[Important]

The processors can be access by the [node_processors](#node-processors-var) dictionary, that is used by the [DialogPlayer](/docs/class-reference/nodes/dialog-player) to process the nodes by their type. **You should not use this node directly.**

:::

## Properties

| Type                                                                               | Name                                    | Default         |
| ---------------------------------------------------------------------------------- | --------------------------------------- | --------------- |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [node_processors](#node-processors-var) | See description |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)             | [print_debug](#print-debug-var)         | true            |

## Signals

<h3 id="continue-to-node-signal">
  <span class="reference-type">signal </span><code>continue_to_node</code>
  <span class="parameters">(to_node: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when a node is processed and is ready to continue to the next node.</p>
<hr/>

<h3 id="dialogue-processed-signal">
  <span class="reference-type">signal </span><code>dialogue_processed</code>
  <span class="parameters">(character_name: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, translated_name: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, portrait: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, dialog: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, next_node: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when a dialogue node was processed.</p>
<hr/>

<h3 id="options-processed-signal">
  <span class="reference-type">signal </span><code>options_processed</code>
  <span class="parameters">(options: <a href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>, next_nodes: <a href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>)</span>
</h3>
<p>Emitted when a options node was processed.</p>
<hr/>

<h3 id="signal-processed-signal">
  <span class="reference-type">signal </span><code>signal_processed</code>
  <span class="parameters">(signal_argument: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, next_node: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when a signal node was processed.</p>
<hr/>

## Property Descriptions

<h3 id="node-processors-var">
  <span class="reference-type">var </span><code>node_processors</code>
  <span class="default-value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>
  Node processors reference dictionary. This dictionary maps the node type to its processing method. You can call the processors from this dictionary.
</p>
<hr/>

<h3 id="print-debug-var">
  <span class="reference-type">var </span><code>print_debug</code>
  <span class="default-value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = true</span>
</h3>
<p>If true, will print debug messages to the console.</p>
<hr/>
