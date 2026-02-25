---
sidebar_position: 9
---

# EditorSproutyDialogsTranslationBox

**Inherits**: [Container](https://docs.godotengine.org/en/stable/classes/class_container.html)

## Description

Component to display a text box with header labels that indicates the language and locale code of the translation.

Needs a text box child node that can be a [LineEdit](https://docs.godotengine.org/en/stable/classes/class_lineedit.html), [TextEdit](https://docs.godotengine.org/en/stable/classes/class_textedit.html) or [ExpandableTextBox](/docs/class-reference/editor/components/expandable-text-box).

## Methods

| Return Type                                                                | Method                                                                                                               |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html) | [get_text](#get-text-method)()                                                                                       |
| void                                                                       | [set_text](#set-text-method)(text: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))       |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html) | [get_locale](#get-locale-method)()                                                                                   |
| void                                                                       | [set_locale](#set-locale-method)(locale: [String](https://docs.godotengine.org/en/stable/classes/class_string.html)) |

## Signals

<h3 id="modified-signal">
  <span class="reference-type">signal </span><code>modified</code>
  <span class="parameters">(modified: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a>)</span>
</h3>
<p>Emitted when the translation box is modified.</p>
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
<p>Emitted when the text box focus is changed while the text editor is open.</p>
<hr/>

## Method Descriptions

<h3 id="get-text-method">
  <span class="reference-type">func </span><code>get_text</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Returns the text from the text box.</p>
<hr/>

<h3 id="set-text-method">
  <span class="reference-type">func </span><code>set_text</code><span class="parameters">(text: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set the text to the text box.</p>
<hr/>

<h3 id="get-locale-method">
  <span class="reference-type">func </span><code>get_locale</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Returns the locale code.</p>
<hr/>

<h3 id="set-locale-method">
  <span class="reference-type">func </span><code>set_locale</code><span class="parameters">(locale: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set the locale code and update the labels.</p>
<hr/>
