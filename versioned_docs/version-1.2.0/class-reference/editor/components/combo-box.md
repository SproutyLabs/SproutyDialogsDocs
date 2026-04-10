---
sidebar_position: 6
---

# EditorSproutyDialogsComboBox

**Inherits**: [LineEdit](https://docs.godotengine.org/en/stable/classes/class_lineedit.html)

## Description

Component that combines a text input with a dropdown list of selectable options. Users can either pick an item from the list or type a custom value directly.

## Methods

| Return Type                                                                                                                                            | Method                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)                                                                             | [get_value](#get-value-method)()                                                                                      |
| void                                                                                                                                                   | [set_value](#set-value-method)(value: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))     |
| [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)\[[String](https://docs.godotengine.org/en/stable/classes/class_string.html)\] | [get_options](#get-options-method)()                                                                                  |
| void                                                                                                                                                   | [set_options](#set-options-method)(options: [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)) |

## Signals

<h3 id="option-selected-signal">
  <span class="reference-type">signal </span><code>option_selected</code>
  <span class="parameters">(option: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when an option is selected from the dropdown list.</p>
<hr/>

<h3 id="input-changed-signal">
  <span class="reference-type">signal </span><code>input_changed</code>
  <span class="parameters">(text: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when the text in the input field changes.</p>
<hr/>

<h3 id="input-submitted-signal">
  <span class="reference-type">signal </span><code>input_submitted</code>
  <span class="parameters">(text: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when the user submits the input.</p>
<hr/>

<h3 id="input-focus-exited-signal">
  <span class="reference-type">signal </span><code>input_focus_exited</code>
</h3>
<p>Emitted when the input field loses focus.</p>
<hr/>

## Method Descriptions

<h3 id="get-value-method">
  <span class="reference-type">func </span><code>get_value</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Returns the current text in the input field.</p>
<hr/>

<h3 id="set-value-method">
  <span class="reference-type">func </span><code>set_value</code><span class="parameters">(value: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Sets the text in the input field.</p>
<hr/>

<h3 id="get-options-method">
  <span class="reference-type">func </span><code>get_options</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>[<a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>]</span>
</h3>
<p>Returns the current options for the dropdown list.</p>
<hr/>

<h3 id="set-options-method">
  <span class="reference-type">func </span><code>set_options</code><span class="parameters">(options: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set the options to show in the dropdown list.</p>
<hr/>
