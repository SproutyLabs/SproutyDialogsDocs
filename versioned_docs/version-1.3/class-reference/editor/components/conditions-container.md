---
sidebar_position: 13
---

# EditorSproutyDialogsConditionsContainer

**Inherits**: [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

## Description

Component that allows to set a condition to change the visibility of a dialog option in the options node.

If the condition is not met, you can set the option as "hidden" or "disabled".

## Signals

<h3 id="open-text-editor-signal">
  <span class="reference-type">signal </span><code>open_text_editor</code>
  <span class="parameters">(text_box: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_textedit.html">TextEdit</a>)</span>
</h3>
<p>Emitted when the expand button in a text box field is pressed.</p>
<hr/>

<h3 id="update-text-editor-signal">
  <span class="reference-type">signal </span><code>update_text_editor</code>
  <span class="parameters">(text_box: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_textedit.html">TextEdit</a>)</span>
</h3>
<p>Emitted when a text box field gains focus and should update the text editor.</p>
<hr/>

<h3 id="modified-signal">
  <span class="reference-type">signal </span><code>modified</code>
  <span class="parameters">(modified: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a>)</span>
</h3>
<p>Emitted when the condition is modified.</p>
<hr/>

## Properties

| Type                                                                                                     | Name                        | Default |
| -------------------------------------------------------------------------------------------------------- | --------------------------- | ------- |
| [EditorUndoRedoManager](https://docs.godotengine.org/en/stable/classes/class_editorundoredomanager.html) | [undo_redo](#undo-redo-var) | -       |

## Methods

| Return Type                                                                        | Method                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [get_data](#get-data-method)()                                                                                                                                                                                        |
| void                                                                               | [set_data](#set-data-method)(data: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html))                                                                                                |
| void                                                                               | [load_type_data](#load-type-data-method)(data: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html), field_index: [int](https://docs.godotengine.org/en/stable/classes/class_int.html)) |

## Property Descriptions

<h3 id="undo-redo-var">
  <span class="reference-type">var </span><code>undo_redo</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_editorundoredomanager.html">EditorUndoRedoManager</a></span>
</h3>
<p>UndoRedo manager for tracking changes to the condition.</p>
<hr/>

## Method Descriptions

<h3 id="get-data-method">
  <span class="reference-type">func </span><code>get_data</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>Returns the condition data as a dictionary containing:</p>
<ul>
  <li><code>enabled</code>: Whether the condition is enabled</li>
  <li><code>first_var</code>: First variable data (type, metadata, value)</li>
  <li><code>second_var</code>: Second variable data (type, metadata, value)</li>
  <li><code>operator</code>: The comparison operator</li>
  <li><code>visibility</code>: The visibility setting (hidden or disabled)</li>
</ul>
<hr/>

<h3 id="set-data-method">
  <span class="reference-type">func </span><code>set_data</code><span class="parameters">(data: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Sets the condition data from a dictionary. Loads all condition settings including enabled state, variable types, values, operator, and visibility options.</p>
<hr/>

<h3 id="load-type-data-method">
  <span class="reference-type">func </span><code>load_type_data</code><span class="parameters">(data: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>, field_index: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Loads the variable type data for the specified field index. Handles special metadata hints like expressions, file paths, and directories.</p>
<hr/>
