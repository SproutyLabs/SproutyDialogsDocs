---
sidebar_position: 8
---

# EditorSproutyDialogsOptionContainer

**Inherits**: [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

## Description

Component that display a dialog option in the options node.

## Properties

| Type                                                                 | Name                              | Default |
| -------------------------------------------------------------------- | --------------------------------- | ------- |
| [int](https://docs.godotengine.org/en/stable/classes/class_int.html) | [option_index](#option-index-var) | 0       |

## Methods

| Return Type                                                                        | Method                                                                                                                            |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)         | [get_dialog_key](#get-dialog-key-method)()                                                                                        |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [get_dialogs_text](#get-dialogs-text-method)()                                                                                    |
| void                                                                               | [load_dialogs](#load-dialogs-method)(dialogs: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html)) |

## Signals

<h3 id="modified-signal">
  <span class="reference-type">signal </span><code>modified</code>
  <span class="parameters">(modified: <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a>)</span>
</h3>
<p>Emitted when the text in any of the text boxes changes.</p>
<hr/>

<h3 id="open-text-editor-signal">
  <span class="reference-type">signal </span><code>open_text_editor</code>
  <span class="parameters">(text_box: <a href="https://docs.godotengine.org/en/stable/classes/class_textedit.html">TextEdit</a>)</span>
</h3>
<p>Emitted when pressing the expand button to open the text editor.</p>
<hr/>

<h3 id="update-text-editor-signal">
  <span class="reference-type">signal </span><code>update_text_editor</code>
  <span class="parameters">(text_box: <a href="https://docs.godotengine.org/en/stable/classes/class_textedit.html">TextEdit</a>)</span>
</h3>
<p>Emitted when change the focus to another text box while the text editor is open.</p>
<hr/>

<h3 id="option-removed-signal">
  <span class="reference-type">signal </span><code>option_removed</code>
  <span class="parameters">(index: <a href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>)</span>
</h3>
<p>Triggered when the option is removed.</p>
<hr/>

## Property Descriptions

<h3 id="option-index-var">
  <span class="reference-type">var </span><code>option_index</code>
  <span class="default-value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a> = 0</span>
</h3>
<p>Option position index.</p>
<hr/>

## Method Descriptions

<h3 id="get-dialog-key-method">
  <span class="reference-type">func </span><code>get_dialog_key</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Return the dialog key for this option.</p>
<hr/>

<h3 id="get-dialogs-text-method">
  <span class="reference-type">func </span><code>get_dialogs_text</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>Returns dialog text and its translations.</p>
<hr/>

<h3 id="load-dialogs-method">
  <span class="reference-type">func </span><code>load_dialogs</code><span class="parameters">(dialogs: <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Load dialog and translations.</p>
<hr/>
