---
sidebar_position: 8
---

# SproutyDialogsFileUtils

**Inherits**: [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

## Description

This module is responsible for some file operations and references. It provides methods to manage recent file paths, check file extensions, validate resource UIDs, and ensure unique naming within a list.

## Methods

| Return Type                                                                | Method                                                                                                                                                                                                                                                                                                                           |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html) | [get_recent_file_path](#get-recent-file-path-method)(file_type: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                                                                                                                      |
| void                                                                       | [set_recent_file_path](#set-recent-file-path-method)(file_type: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), path: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                                    |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)     | [check_valid_extension](#check-valid-extension-method)(path: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), extensions: [Array](https://docs.godotengine.org/en/stable/classes/class_array.html))                                                                                                   |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)     | [check_valid_uid_path](#check-valid-uid-path-method)(uid: [int](https://docs.godotengine.org/en/stable/classes/class_int.html))                                                                                                                                                                                                  |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html) | [ensure_unique_name](#ensure-unique-name-method)(name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), existing_names: [Array](https://docs.godotengine.org/en/stable/classes/class_array.html), empty_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html) = "Unnamed") |

## Method Descriptions

<h3 id="get-recent-file-path-method">
  <span class="reference-type">func </span><code>get_recent_file_path</code><span class="parameters">(file_type: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Get the last used path for a file type in a file dialog.</p>
<hr/>

<h3 id="set-recent-file-path-method">
  <span class="reference-type">func </span><code>set_recent_file_path</code><span class="parameters">(file_type: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, path: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set the last used path for a file type in a file dialog.</p>
<hr/>

<h3 id="check-valid-extension-method">
  <span class="reference-type">func </span><code>check_valid_extension</code><span class="parameters">(path: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, extensions: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a></span>
</h3>
<p>Check if the path has valid extension.</p>
<hr/>

<h3 id="check-valid-uid-path-method">
  <span class="reference-type">func </span><code>check_valid_uid_path</code><span class="parameters">(uid: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a></span>
</h3>
<p>Check if a UID has a valid resource path associated with it.</p>
<hr/>

<h3 id="ensure-unique-name-method">
  <span class="reference-type">func </span><code>ensure_unique_name</code><span class="parameters">(name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, existing_names: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>, empty_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = "Unnamed")</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Ensure a name is unique within a list of existing names.</p>
<hr/>
