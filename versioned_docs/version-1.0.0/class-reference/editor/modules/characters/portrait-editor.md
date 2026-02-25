---
sidebar_position: 2
---

# EditorSproutyDialogsPortraitEditor

**Inherits**: [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

## Description

This module allows the user to edit a portrait for a character. It provides a preview of the portrait and allows the user to set various properties and settings including transform settings (scale, rotation, offset, mirror) and exported properties from the portrait scene.

## Properties

| Type                                                                                                     | Name                        | Default |
| -------------------------------------------------------------------------------------------------------- | --------------------------- | ------- |
| [EditorUndoRedoManager](https://docs.godotengine.org/en/stable/classes/class_editorundoredomanager.html) | [undo_redo](#undo-redo-var) | null    |

## Methods

| Return Type                                                                 | Method                                                                                                                                                                                                                |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [SproutyDialogsPortraitData](/docs/class-reference/resources/portrait-data) | [get_portrait_data](#get-portrait-data-method)()                                                                                                                                                                      |
| void                                                                        | [load_portrait_data](#load-portrait-data-method)(name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), data: [SproutyDialogsPortraitData](/docs/class-reference/resources/portrait-data)) |
| void                                                                        | [set_portrait_name](#set-portrait-name-method)(name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                      |
| void                                                                        | [update_preview_transform](#update-preview-transform-method)(parent_transform: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html))                                                    |

## Signals

<h3 id="modified-signal">
  <span class="reference-type">signal </span><code>modified</code>
  <span class="parameters">(modified: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a>)</span>
</h3>
<p>Emitted when the portrait is modified.</p>
<hr/>

## Property Descriptions

<h3 id="undo-redo-var">
  <span class="reference-type">var </span><code>undo_redo</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_editorundoredomanager.html">EditorUndoRedoManager</a></span>
</h3>
<p>UndoRedo manager for handling undo/redo operations in the portrait editor.</p>
<hr/>

## Method Descriptions

<h3 id="get-portrait-data-method">
  <span class="reference-type">func </span><code>get_portrait_data</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="/docs/class-reference/resources/portrait-data">SproutyDialogsPortraitData</a></span>
</h3>
<p>
  Returns the portrait data from the editor. This includes the portrait scene path, export property overrides, and transform settings (scale, offset, rotation, mirror).
</p>
<hr/>

<h3 id="load-portrait-data-method">
  <span class="reference-type">func </span><code>load_portrait_data</code><span class="parameters">(name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, data: <a target="_blank" href="/docs/class-reference/resources/portrait-data">SproutyDialogsPortraitData</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>
  Load the portrait data into the editor. The <code>name</code> parameter is used to set the portrait name in the preview. This method loads the portrait scene, export overrides, and transform settings.
</p>
<hr/>

<h3 id="set-portrait-name-method">
  <span class="reference-type">func </span><code>set_portrait_name</code><span class="parameters">(name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set the portrait name displayed in the editor.</p>
<hr/>

<h3 id="update-preview-transform-method">
  <span class="reference-type">func </span><code>update_preview_transform</code><span class="parameters">(parent_transform: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{\})</span><span class="return-type"> -> void</span>
</h3>
<p>Update the preview scene with the transformation settings.</p>
<hr/>
