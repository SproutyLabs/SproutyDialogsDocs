---
sidebar_position: 1
---

# EditorSproutyDialogsCharacterEditor

**Inherits**: [HSplitContainer](https://docs.godotengine.org/en/stable/classes/class_hsplitcontainer.html)

## Description

This module is responsible for the character files creation and editing. It allows the user to edit character data, including the character's name, description, dialog box and portraits.

## Properties

| Type                                                                                                     | Name                        | Default |
| -------------------------------------------------------------------------------------------------------- | --------------------------- | ------- |
| [EditorUndoRedoManager](https://docs.godotengine.org/en/stable/classes/class_editorundoredomanager.html) | [undo_redo](#undo-redo-var) | null    |

## Methods

| Return Type                                                                        | Method                                                                                                                                                                                                                                                                                                                   |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [get_editor_state](#get-editor-state-method)()                                                                                                                                                                                                                                                                           |
| void                                                                               | [load_editor_state](#load-editor-state-method)(editor_state: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html))                                                                                                                                                                         |
| [SproutyDialogsCharacterData](../../../resources/character-data)                   | [get_character_data](#get-character-data-method)()                                                                                                                                                                                                                                                                       |
| void                                                                               | [load_character](#load-character-method)(data: [SproutyDialogsCharacterData](../../../resources/character-data), name_data: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html), editor_state: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) = \{\}) |
| void                                                                               | [update_key_name](#update-key-name-method)(key_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                                                                                                                         |
| void                                                                               | [on_locales_changed](#on-locales-changed-method)()                                                                                                                                                                                                                                                                       |
| void                                                                               | [on_translation_enabled_changed](#on-translation-enabled-changed-method)(enabled: [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html))                                                                                                                                                                |

## Signals

<h3 id="modified-signal">
  <span class="reference-type">signal </span><code>modified</code>
  <span class="parameters">(modified: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a>)</span>
</h3>
<p>Triggered when something is modified in the character editor.</p>
<hr/>

<h3 id="view-state-changed-signal">
  <span class="reference-type">signal </span><code>view_state_changed</code>
  <span class="parameters">(editor_state: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span>
</h3>
<p>Emitted when the character editor UI state changes.</p>
<hr/>

## Property Descriptions

<h3 id="undo-redo-var">
  <span class="reference-type">var </span><code>undo_redo</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_editorundoredomanager.html">EditorUndoRedoManager</a></span>
</h3>
<p>UndoRedo manager for handling undo/redo operations in the character editor.</p>
<hr/>

## Method Descriptions

<h3 id="get-editor-state-method">
  <span class="reference-type">func </span><code>get_editor_state</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>
  Returns the current editor state as a dictionary. This includes the visibility of the dialog box settings, portrait settings, and portraits list sections, the portrait search text, the portrait tree state, and the currently selected portrait path.
</p>
<hr/>

<h3 id="load-editor-state-method">
  <span class="reference-type">func </span><code>load_editor_state</code><span class="parameters">(editor_state: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>
  Restore the editor UI state from a dictionary. Handles section visibility, portrait search, portrait tree state, and the selected portrait path.
</p>
<hr/>

<h3 id="get-character-data-method">
  <span class="reference-type">func </span><code>get_character_data</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="../../../resources/character-data">SproutyDialogsCharacterData</a></span>
</h3>
<p>
  Returns the character data from the editor. This includes the character's key name, display name (with translations), description, dialog box scene path, portrait settings, and portraits data.
</p>
<hr/>

<h3 id="load-character-method">
  <span class="reference-type">func </span><code>load_character</code><span class="parameters">(data: <a target="_blank" href="../../../resources/character-data">SproutyDialogsCharacterData</a>, name_data: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>, editor_state: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{\})</span><span class="return-type"> -> void</span>
</h3>
<p>
  Load the character data into the editor. If <code>name_data</code> is provided, it will be used to load the name translations. Otherwise, the name translations will be loaded from the character data. If <code>editor_state</code> is provided, the editor UI state will be restored.
</p>
<hr/>

<h3 id="update-key-name-method">
  <span class="reference-type">func </span><code>update_key_name</code><span class="parameters">(key_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>
  Update the character key name and its CSV translation key to the given name. The CSV key is set to the key name uppercased with a <code>_CHAR</code> suffix.
</p>
<hr/>

<h3 id="on-locales-changed-method">
  <span class="reference-type">func </span><code>on_locales_changed</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>
  Update name translations text boxes when locales change in the project settings. This method handles locale changes and updates the translation boxes accordingly.
</p>
<hr/>

<h3 id="on-translation-enabled-changed-method">
  <span class="reference-type">func </span><code>on_translation_enabled_changed</code><span class="parameters">(enabled: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>
  Handle the translation enabled change. When enabled is true, shows translation boxes. When false, hides translation boxes and default locale label.
</p>
<hr/>
