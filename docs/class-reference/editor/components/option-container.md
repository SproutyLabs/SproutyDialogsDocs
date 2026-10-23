---
sidebar_position: 8
---

# EditorSproutyDialogsOptionContainer

**Inherits**: [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

## Description

Component that display a dialog option in the options node.

## Properties

| Type                                                                                                     | Name                              | Default |
| -------------------------------------------------------------------------------------------------------- | --------------------------------- | ------- |
| [int](https://docs.godotengine.org/en/stable/classes/class_int.html)                                     | [option_index](#option-index-var) | 0       |
| [EditorUndoRedoManager](https://docs.godotengine.org/en/stable/classes/class_editorundoredomanager.html) | [undo_redo](#undo-redo-var)       | -       |

## Methods

| Return Type                                                                        | Method                                                                                                                                                    |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [get_conditions](#get-conditions-method)()                                                                                                                |
| void                                                                               | [load_conditions](#load-conditions-method)(data: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html))                      |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)         | [get_dialog_key](#get-dialog-key-method)()                                                                                                                |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [get_dialogs_text](#get-dialogs-text-method)()                                                                                                            |
| void                                                                               | [load_dialogs](#load-dialogs-method)(dialogs: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html))                         |
| void                                                                               | [on_locales_changed](#on-locales-changed-method)()                                                                                                        |
| void                                                                               | [on_translation_enabled_changed](#on-translation-enabled-changed-method)(enabled: [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)) |
| void                                                                               | [update_option_index](#update-option-index-method)(index: [int](https://docs.godotengine.org/en/stable/classes/class_int.html))                           |

## Signals

<h3 id="modified-signal">
  <span class="reference-type">signal </span><code>modified</code>
  <span class="parameters">(modified: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a>)</span>
</h3>
<p>Emitted when the text in any of the text boxes changes.</p>
<hr/>

<h3 id="open-text-editor-signal">
  <span class="reference-type">signal </span><code>open_text_editor</code>
  <span class="parameters">(text_box: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_textedit.html">TextEdit</a>)</span>
</h3>
<p>Emitted when pressing the expand button to open the text editor.</p>
<hr/>

<h3 id="update-text-editor-signal">
  <span class="reference-type">signal </span><code>update_text_editor</code>
  <span class="parameters">(text_box: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_textedit.html">TextEdit</a>)</span>
</h3>
<p>Emitted when change the focus to another text box while the text editor is open.</p>
<hr/>

<h3 id="option-removed-signal">
  <span class="reference-type">signal </span><code>option_removed</code>
  <span class="parameters">(index: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>)</span>
</h3>
<p>Triggered when the option is removed.</p>
<hr/>

## Property Descriptions

<h3 id="option-index-var">
  <span class="reference-type">var </span><code>option_index</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a> = 0</span>
</h3>
<p>Option position index.</p>
<hr/>

<h3 id="undo-redo-var">
  <span class="reference-type">var </span><code>undo_redo</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_editorundoredomanager.html">EditorUndoRedoManager</a></span>
</h3>
<p>UndoRedo manager for tracking changes to the option.</p>
<hr/>

## Method Descriptions

<h3 id="get-conditions-method">
  <span class="reference-type">func </span><code>get_conditions</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>Returns the conditions data of this option.</p>
<hr/>

<h3 id="load-conditions-method">
  <span class="reference-type">func </span><code>load_conditions</code><span class="parameters">(data: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Load the given conditions data into this option.</p>
<hr/>

<h3 id="get-dialog-key-method">
  <span class="reference-type">func </span><code>get_dialog_key</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Return the dialog key for this option.</p>
<hr/>

<h3 id="get-dialogs-text-method">
  <span class="reference-type">func </span><code>get_dialogs_text</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>Returns dialog text and its translations.</p>
<hr/>

<h3 id="load-dialogs-method">
  <span class="reference-type">func </span><code>load_dialogs</code><span class="parameters">(dialogs: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Load dialog and translations.</p>
<hr/>

<h3 id="on-locales-changed-method">
  <span class="reference-type">func </span><code>on_locales_changed</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Update the locale text boxes.</p>
<hr/>

<h3 id="on-translation-enabled-changed-method">
  <span class="reference-type">func </span><code>on_translation_enabled_changed</code><span class="parameters">(enabled: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Handle the translation enabled setting change.</p>
<hr/>

<h3 id="update-option-index-method">
  <span class="reference-type">func </span><code>update_option_index</code><span class="parameters">(index: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Update the option position index.</p>
<hr/>
