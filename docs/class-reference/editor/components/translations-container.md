---
sidebar_position: 10
---

# EditorSproutyDialogsTranslationsContainer

**Inherits**: [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

## Description

Component to handle translations text boxes. It allows to set the dialog text boxes for each locale, load the dialog translations text and get the dialog translations text on a dict.

## Methods

| Return Type                                                                        | Method                                                                                                                                                |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [get_translations_text](#get-translations-text-method)()                                                                                              |
| void                                                                               | [set_translation_boxes](#set-translation-boxes-method)(locales: [Array](https://docs.godotengine.org/en/stable/classes/class_array.html))             |
| void                                                                               | [load_translations_text](#load-translations-text-method)(dialogs: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html)) |

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
<p>Emitted when pressing the expand button of a text box to open the text editor.</p>
<hr/>

<h3 id="update-text-editor-signal">
  <span class="reference-type">signal </span><code>update_text_editor</code>
  <span class="parameters">(text_box: <a href="https://docs.godotengine.org/en/stable/classes/class_textedit.html">TextEdit</a>)</span>
</h3>
<p>Emitted when change the focus to another text box while the text editor is open.</p>
<hr/>

## Method Descriptions

<h3 id="get-translations-text-method">
  <span class="reference-type">func </span><code>get_translations_text</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>Return the dialog translations text on a dictionary.</p>
<hr/>

<h3 id="set-translation-boxes-method">
  <span class="reference-type">func </span><code>set_translation_boxes</code><span class="parameters">(locales: <a href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set input text boxes for each locale.</p>
<hr/>

<h3 id="load-translations-text-method">
  <span class="reference-type">func </span><code>load_translations_text</code><span class="parameters">(dialogs: <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Load dialog translations text.</p>
<hr/>
