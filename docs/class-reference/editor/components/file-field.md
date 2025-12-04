---
sidebar_position: 5
---

# EditorSproutyDialogsFileField

**Inherits**: [MarginContainer](https://docs.godotengine.org/en/stable/classes/class_margincontainer.html)

## Description

Component that allows the user to select a file from the file system. Also can be configured to select a directory instead of a file.

## Methods

| Return Type                                                                | Method                                                                                                                     |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html) | [get_value](#get-value-method)()                                                                                           |
| void                                                                       | [set_value](#set-value-method)(value: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))          |
| void                                                                       | [open_directory](#open-directory-method)(open_dir: [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)) |
| void                                                                       | [disable_field](#disable-field-method)(disable: [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html))    |

## Signals

<h3 id="path-changed-signal">
  <span class="reference-type">signal </span><code>path_changed</code>
  <span class="parameters">(path: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when the file or folder path changes.</p>
<hr/>

<h3 id="path-submitted-signal">
  <span class="reference-type">signal </span><code>path_submitted</code>
  <span class="parameters">(path: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when the file or folder path is submitted.</p>
<hr/>

<h3 id="field-focus-exited-signal">
  <span class="reference-type">signal </span><code>field_focus_exited</code>
</h3>
<p>Emitted when the field loses focus.</p>
<hr/>

## Method Descriptions

<h3 id="get-value-method">
  <span class="reference-type">func </span><code>get_value</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Returns the current value of the field.</p>
<hr/>

<h3 id="set-value-method">
  <span class="reference-type">func </span><code>set_value</code><span class="parameters">(value: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set the current value of the field.</p>
<hr/>

<h3 id="open-directory-method">
  <span class="reference-type">func </span><code>open_directory</code><span class="parameters">(open_dir: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Configure the field to open a directory instead of a file.</p>
<hr/>

<h3 id="disable-field-method">
  <span class="reference-type">func </span><code>disable_field</code><span class="parameters">(disable: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Disable the field for editing.</p>
<hr/>
