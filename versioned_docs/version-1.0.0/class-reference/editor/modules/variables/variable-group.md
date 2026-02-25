---
sidebar_position: 2
---

# EditorSproutyDialogsVariableGroup

**Inherits**: [Container](https://docs.godotengine.org/en/stable/classes/class_container.html)

## Description

Component that represents a group of variables in the variable editor panel. It allows the user to set the group name and color, and contains variable items. Groups can be nested and support drag-and-drop functionality.

## Properties

| Type                                                                                                     | Name                              | Default |
| -------------------------------------------------------------------------------------------------------- | --------------------------------- | ------- |
| [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)                                   | [parent_group](#parent-group-var) | null    |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)                                   | [new_item](#new-item-var)         | true    |
| [EditorUndoRedoManager](https://docs.godotengine.org/en/stable/classes/class_editorundoredomanager.html) | [undo_redo](#undo-redo-var)       | null    |

## Methods

| Return Type                                                                | Method                                                                                                                             |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html) | [get_item_path](#get-item-path-method)()                                                                                           |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html) | [get_item_name](#get-item-name-method)()                                                                                           |
| void                                                                       | [set_item_name](#set-item-name-method)(new_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))       |
| [Color](https://docs.godotengine.org/en/stable/classes/class_color.html)   | [get_color](#get-color-method)()                                                                                                   |
| void                                                                       | [set_color](#set-color-method)(new_color: [Color](https://docs.godotengine.org/en/stable/classes/class_color.html))                |
| [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)   | [get_items](#get-items-method)()                                                                                                   |
| void                                                                       | [add_item](#add-item-method)(item: [Node](https://docs.godotengine.org/en/stable/classes/class_node.html))                         |
| void                                                                       | [show_items](#show-items-method)()                                                                                                 |
| void                                                                       | [update_path_tooltip](#update-path-tooltip-method)()                                                                               |
| void                                                                       | [mark_as_modified](#mark-as-modified-method)(was_modified: [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)) |
| void                                                                       | [clear_modified_state](#clear-modified-state-method)()                                                                             |
| void                                                                       | [show_drop_highlight](#show-drop-highlight-method)(above: [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html))  |

## Signals

<h3 id="modified-signal">
  <span class="reference-type">signal </span><code>modified</code>
  <span class="parameters">(modified: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a>)</span>
</h3>
<p>Emitted when the group is modified.</p>
<hr/>

<h3 id="group-renamed-signal">
  <span class="reference-type">signal </span><code>group_renamed</code>
  <span class="parameters">(old_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, new_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when the group is renamed.</p>
<hr/>

<h3 id="remove-pressed-signal">
  <span class="reference-type">signal </span><code>remove_pressed</code>
</h3>
<p>Emitted when the remove button is pressed.</p>
<hr/>

## Property Descriptions

<h3 id="parent-group-var">
  <span class="reference-type">var </span><code>parent_group</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_node.html">Node</a> = null</span>
</h3>
<p>Parent group of this group. Can be another [EditorSproutyDialogsVariableGroup](#) or the main container.</p>
<hr/>

<h3 id="new-item-var">
  <span class="reference-type">var </span><code>new_item</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = true</span>
</h3>
<p>Flag to indicate that the group has just been created.</p>
<hr/>

<h3 id="undo-redo-var">
  <span class="reference-type">var </span><code>undo_redo</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_editorundoredomanager.html">EditorUndoRedoManager</a></span>
</h3>
<p>UndoRedo manager for handling undo/redo operations.</p>
<hr/>

## Method Descriptions

<h3 id="get-item-path-method">
  <span class="reference-type">func </span><code>get_item_path</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Return the group path in the variables tree. For nested groups, returns the full path (e.g., "ParentGroup/ChildGroup").</p>
<hr/>

<h3 id="get-item-name-method">
  <span class="reference-type">func </span><code>get_item_name</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Returns the group name.</p>
<hr/>

<h3 id="set-item-name-method">
  <span class="reference-type">func </span><code>set_item_name</code><span class="parameters">(new_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set the group name and update the path tooltip.</p>
<hr/>

<h3 id="get-color-method">
  <span class="reference-type">func </span><code>get_color</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_color.html">Color</a></span>
</h3>
<p>Returns the group color.</p>
<hr/>

<h3 id="set-color-method">
  <span class="reference-type">func </span><code>set_color</code><span class="parameters">(new_color: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_color.html">Color</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set the group color which affects the border and visual appearance.</p>
<hr/>

<h3 id="get-items-method">
  <span class="reference-type">func </span><code>get_items</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a></span>
</h3>
<p>Returns all items in the group (both variable items and nested groups).</p>
<hr/>

<h3 id="add-item-method">
  <span class="reference-type">func </span><code>add_item</code><span class="parameters">(item: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_node.html">Node</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Add an item to the group. The item can be a [EditorSproutyDialogsVariableItem](/docs/class-reference/editor/modules/variables/variable-item.md) or another [EditorSproutyDialogsVariableGroup](#).</p>
<hr/>

<h3 id="show-items-method">
  <span class="reference-type">func </span><code>show_items</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Show all the items in the group.</p>
<hr/>

<h3 id="update-path-tooltip-method">
  <span class="reference-type">func </span><code>update_path_tooltip</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Update the tooltip with the current group path. Also updates tooltips for all child items.</p>
<hr/>

<h3 id="mark-as-modified-method">
  <span class="reference-type">func </span><code>mark_as_modified</code><span class="parameters">(was_modified: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Mark the group as modified. Shows a visual indicator when modified.</p>
<hr/>

<h3 id="clear-modified-state-method">
  <span class="reference-type">func </span><code>clear_modified_state</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Clear the modified state of the group and all its items.</p>
<hr/>

<h3 id="show-drop-highlight-method">
  <span class="reference-type">func </span><code>show_drop_highlight</code><span class="parameters">(above: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Show the drop highlight for drag-and-drop operations. The highlight appears above or below based on the parameter.</p>
<hr/>
