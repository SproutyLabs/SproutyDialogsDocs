---
sidebar_position: 3
---

# EditorSproutyDialogsVariableItem

**Inherits**: [Container](https://docs.godotengine.org/en/stable/classes/class_container.html)

## Description

Component that represents a single variable item in the variable editor panel. It allows the user to set the variable name, type and value. Supports drag-and-drop for reordering and moving between groups.

## Properties

| Type                                                                                                     | Name                              | Default |
| -------------------------------------------------------------------------------------------------------- | --------------------------------- | ------- |
| [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)                                   | [parent_group](#parent-group-var) | null    |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)                                   | [new_item](#new-item-var)         | true    |
| [EditorUndoRedoManager](https://docs.godotengine.org/en/stable/classes/class_editorundoredomanager.html) | [undo_redo](#undo-redo-var)       | null    |

## Methods

| Return Type                                                                        | Method                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [get_variable_data](#get-variable-data-method)()                                                                                                                                                       |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)         | [get_item_path](#get-item-path-method)()                                                                                                                                                               |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)         | [get_item_name](#get-item-name-method)()                                                                                                                                                               |
| [int](https://docs.godotengine.org/en/stable/classes/class_int.html)               | [get_type](#get-type-method)()                                                                                                                                                                         |
| [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html)       | [get_value](#get-value-method)()                                                                                                                                                                       |
| void                                                                               | [set_item_name](#set-item-name-method)(new_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                           |
| void                                                                               | [set_type](#set-type-method)(type: [int](https://docs.godotengine.org/en/stable/classes/class_int.html), metadata: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html)) |
| void                                                                               | [set_value](#set-value-method)(value: [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html))                                                                                    |
| void                                                                               | [update_path_tooltip](#update-path-tooltip-method)()                                                                                                                                                   |
| void                                                                               | [mark_as_modified](#mark-as-modified-method)(was_modified: [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html))                                                                     |
| void                                                                               | [clear_modified_state](#clear-modified-state-method)()                                                                                                                                                 |
| void                                                                               | [show_drop_highlight](#show-drop-highlight-method)(above: [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html))                                                                      |
| void                                                                               | [hide_drop_highlight](#hide-drop-highlight-method)()                                                                                                                                                   |

## Signals

<h3 id="modified-signal">
  <span class="reference-type">signal </span><code>modified</code>
  <span class="parameters">(modified: <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a>)</span>
</h3>
<p>Emitted when the variable is modified.</p>
<hr/>

<h3 id="variable-changed-signal">
  <span class="reference-type">signal </span><code>variable_changed</code>
  <span class="parameters">(var_data: <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span>
</h3>
<p>Emitted when the variable is changed.</p>
<hr/>

<h3 id="variable-renamed-signal">
  <span class="reference-type">signal </span><code>variable_renamed</code>
  <span class="parameters">(old_name: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, new_name: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when the variable is renamed.</p>
<hr/>

<h3 id="remove-pressed-signal">
  <span class="reference-type">signal </span><code>remove_pressed</code>
</h3>
<p>Emitted when the remove button is pressed.</p>
<hr/>

<h3 id="open-text-editor-signal">
  <span class="reference-type">signal </span><code>open_text_editor</code>
  <span class="parameters">(text_box: <a href="https://docs.godotengine.org/en/stable/classes/class_lineedit.html">LineEdit</a>)</span>
</h3>
<p>Emitted when an expand button is pressed to open the text editor.</p>
<hr/>

<h3 id="update-text-editor-signal">
  <span class="reference-type">signal </span><code>update_text_editor</code>
  <span class="parameters">(text_box: <a href="https://docs.godotengine.org/en/stable/classes/class_lineedit.html">LineEdit</a>)</span>
</h3>
<p>Emitted when change the focus to another text box to update the text editor.</p>
<hr/>

## Property Descriptions

<h3 id="parent-group-var">
  <span class="reference-type">var </span><code>parent_group</code>
  <span class="default-value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_node.html">Node</a> = null</span>
</h3>
<p>Parent group of the item. Can be an [EditorSproutyDialogsVariableGroup](/docs/class-reference/editor/modules/variables/variable-group.md) or the main container.</p>
<hr/>

<h3 id="new-item-var">
  <span class="reference-type">var </span><code>new_item</code>
  <span class="default-value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = true</span>
</h3>
<p>Flag to indicate that the item has just been created.</p>
<hr/>

<h3 id="undo-redo-var">
  <span class="reference-type">var </span><code>undo_redo</code>
  <span class="default-value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_editorundoredomanager.html">EditorUndoRedoManager</a></span>
</h3>
<p>UndoRedo manager for handling undo/redo operations.</p>
<hr/>

## Method Descriptions

<h3 id="get-variable-data-method">
  <span class="reference-type">func </span><code>get_variable_data</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>
  Returns the variable data as a dictionary with the following structure:
</p>
<pre><code>
{`{
	  "name": String,
	  "type": int,
	  "value": Variant,
	  "metadata": Dictionary
}`}
</code></pre>
<hr/>

<h3 id="get-item-path-method">
  <span class="reference-type">func </span><code>get_item_path</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Return the item path in the variables tree. For items in groups, returns the full path (e.g., "GroupName/VariableName").</p>
<hr/>

<h3 id="get-item-name-method">
  <span class="reference-type">func </span><code>get_item_name</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Returns the variable name.</p>
<hr/>

<h3 id="get-type-method">
  <span class="reference-type">func </span><code>get_type</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a></span>
</h3>
<p>Returns the variable type.</p>
<hr/>

<h3 id="get-value-method">
  <span class="reference-type">func </span><code>get_value</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a></span>
</h3>
<p>Returns the variable value.</p>
<hr/>

<h3 id="set-item-name-method">
  <span class="reference-type">func </span><code>set_item_name</code><span class="parameters">(new_name: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Rename the variable item and update the path tooltip.</p>
<hr/>

<h3 id="set-type-method">
  <span class="reference-type">func </span><code>set_type</code><span class="parameters">(type: <a href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>, metadata: <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set the variable type and metadata. Updates the value field to match the new type.</p>
<hr/>

<h3 id="set-value-method">
  <span class="reference-type">func </span><code>set_value</code><span class="parameters">(value: <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set the variable value. The value type must match the current variable type.</p>
<hr/>

<h3 id="update-path-tooltip-method">
  <span class="reference-type">func </span><code>update_path_tooltip</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Update the tooltip with the current item path.</p>
<hr/>

<h3 id="mark-as-modified-method">
  <span class="reference-type">func </span><code>mark_as_modified</code><span class="parameters">(was_modified: <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Mark the variable item as modified. Shows a visual indicator when modified.</p>
<hr/>

<h3 id="clear-modified-state-method">
  <span class="reference-type">func </span><code>clear_modified_state</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Clear the modified state of the variable item.</p>
<hr/>

<h3 id="show-drop-highlight-method">
  <span class="reference-type">func </span><code>show_drop_highlight</code><span class="parameters">(above: <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = true)</span><span class="return-type"> -> void</span>
</h3>
<p>Show the drop highlight for drag-and-drop operations. Displays above or below the item based on the parameter.</p>
<hr/>

<h3 id="hide-drop-highlight-method">
  <span class="reference-type">func </span><code>hide_drop_highlight</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Hide the drop highlight.</p>
<hr/>
