---
sidebar_position: 8
---

# SproutyDialogsFileUtils

**Inherits**: [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

## Description

This module is responsible for some file operations and references. It provides methods to manage recent file paths, check file extensions, validate resource UIDs, and other useful methods.

## Methods

| Return Type                                                                | Method                                                                                                                                                                                                                                                                                                                           |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html) | [get_recent_file_path](#get-recent-file-path-method)(file_type: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                                                                                                                      |
| void                                                                       | [set_recent_file_path](#set-recent-file-path-method)(file_type: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), path: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                                    |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)     | [check_valid_extension](#check-valid-extension-method)(path: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), extensions: [Array](https://docs.godotengine.org/en/stable/classes/class_array.html))                                                                                                   |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)     | [check_valid_uid_path](#check-valid-uid-path-method)(uid: [int](https://docs.godotengine.org/en/stable/classes/class_int.html))                                                                                                                                                                                                  |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html) | [ensure_unique_name](#ensure-unique-name-method)(name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), existing_names: [Array](https://docs.godotengine.org/en/stable/classes/class_array.html), empty_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html) = "Unnamed") |
| void                                                                       | [open_scene_in_editor](#open-scene-in-editor-method)(scene_path: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), scene_tree: [SceneTree](https://docs.godotengine.org/en/stable/classes/class_scenetree.html))                                                                                       |
| void                                                                       | [create_new_scene_file](#create-new-scene-file-method)(scene_path: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), scene_type: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                           |

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

<h3 id="open-scene-in-editor-method">
  <span class="reference-type">func </span><code>open_scene_in_editor</code><span class="parameters">(scene_path: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, scene_tree: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_scenetree.html">SceneTree</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Open a scene in the editor given its path. Also, needs a reference to the <a target="_blank" href="https://docs.godotengine.org/en/stable/tutorials/scripting/scene_tree.html">SceneTree</a> (using <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-method-get-tree">Node.get_tree()</a>) to process a timer.</p>
<hr/>

<h3 id="create-new-scene-file-method">
  <span class="reference-type">func </span><code>create_new_scene_file</code><span class="parameters">(scene_path: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, scene_type: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Create a new dialog box or portrait scene file. Needs the path where save the scene file and the type of the scene that can be `"dialog_box"` or `"portrait_scene"`.</p>
<hr/>
