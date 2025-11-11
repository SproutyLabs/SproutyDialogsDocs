---
sidebar_position: 1
---

# EditorSproutyDialogsVariableEditor

**Inherits**: [MarginContainer](https://docs.godotengine.org/en/stable/classes/class_margincontainer.html)

## Description

This module is the main interface for managing variables in the Sprouty Dialogs editor. It allows the user to add, remove, rename, filter and save variables. Variables can be organized into groups and support drag-and-drop reordering.

## Properties

| Type | Name | Default |
| ---- | ---- | ------- |
| [EditorUndoRedoManager](https://docs.godotengine.org/en/stable/classes/class_editorundoredomanager.html) | [undo_redo](#undo-redo-var) | null |

## Signals

<h3 id="variable-changed-signal">
  <span class="reference-type">signal </span><code>variable_changed</code>
  <span class="parameters">(var_data: <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span>
</h3>
<p>Emitted when a variable is changed.</p>
<hr/>

<h3 id="open-text-editor-signal">
  <span class="reference-type">signal </span><code>open_text_editor</code>
  <span class="parameters">(text: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when a text editor is called to edit a string variable.</p>
<hr/>

<h3 id="update-text-editor-signal">
  <span class="reference-type">signal </span><code>update_text_editor</code>
  <span class="parameters">(text: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when change the focus to another text box to update the text editor.</p>
<hr/>

## Property Descriptions

<h3 id="undo-redo-var">
  <span class="reference-type">var </span><code>undo_redo</code>
  <span class="default_value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_editorundoredomanager.html">EditorUndoRedoManager</a></span>
</h3>
<p>UndoRedo manager for handling undo/redo operations in the variable editor.</p>
<hr/>
