---
sidebar_position: 7
---

# EditorSproutyDialogsExpandableTextBox

**Inherits**: [HBoxContainer](https://docs.godotengine.org/en/stable/classes/class_hboxcontainer.html)

## Description

Component that extends a text box with an expand button to open a larger text editor.

## Methods

| Return Type                                                                | Method                                                                                                         |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html) | [get_text](#get-text-method)()                                                                                 |
| void                                                                       | [set_text](#set-text-method)(text: [String](https://docs.godotengine.org/en/stable/classes/class_string.html)) |

## Signals

<h3 id="text-changed-signal">
  <span class="reference-type">signal </span><code>text_changed</code>
  <span class="parameters">(text: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when the text in the text box changes.</p>
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
<p>Emitted when the text in the text editor is updated.</p>
<hr/>

<h3 id="text-box-focus-exited-signal">
  <span class="reference-type">signal </span><code>text_box_focus_exited</code>
</h3>
<p>Emitted when the text box loses focus.</p>
<hr/>

## Method Descriptions

<h3 id="get-text-method">
  <span class="reference-type">func </span><code>get_text</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Returns the text from the text box.</p>
<hr/>

<h3 id="set-text-method">
  <span class="reference-type">func </span><code>set_text</code><span class="parameters">(text: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set the text to the text box.</p>
<hr/>
