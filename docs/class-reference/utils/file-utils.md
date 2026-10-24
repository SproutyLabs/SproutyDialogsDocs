---
sidebar_position: 8
---

# SproutyDialogsFileUtils

**Inherits**: [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

## Description

This module is responsible for some file operations and references. It provides methods to manage recent file paths, check file extensions, validate resource UIDs, load resources by UID with a file path fallback, and other useful methods.

## Methods

| Return Type                                                                        | Method                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)         | [get_recent_file_path](#get-recent-file-path-method)(file_type: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                                                                                                                      |
| void                                                                               | [set_recent_file_path](#set-recent-file-path-method)(file_type: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), path: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                                    |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)             | [check_valid_extension](#check-valid-extension-method)(path: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), extensions: [Array](https://docs.godotengine.org/en/stable/classes/class_array.html))                                                                                                   |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)             | [check_valid_uid_path](#check-valid-uid-path-method)(uid: [int](https://docs.godotengine.org/en/stable/classes/class_int.html))                                                                                                                                                                                                  |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [make_reference](#make-reference-method)(uid: [int](https://docs.godotengine.org/en/stable/classes/class_int.html) = -1, path: [String](https://docs.godotengine.org/en/stable/classes/class_string.html) = "")                                                                                                                  |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [build_reference](#build-reference-method)(path: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                                                                                                                                     |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [normalize_reference](#normalize-reference-method)(reference: [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html))                                                                                                                                                                                      |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)             | [reference_is_empty](#reference-is-empty-method)(reference: [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html))                                                                                                                                                                                        |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)         | [get_uid_path](#get-uid-path-method)(uid: [int](https://docs.godotengine.org/en/stable/classes/class_int.html), path_fallback: [String](https://docs.godotengine.org/en/stable/classes/class_string.html) = "")                                                                                                                  |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)         | [reference_path](#reference-path-method)(reference: [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html))                                                                                                                                                                                                |
| [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)     | [load_resource](#load-resource-method)(uid: [int](https://docs.godotengine.org/en/stable/classes/class_int.html), path_fallback: [String](https://docs.godotengine.org/en/stable/classes/class_string.html) = "")                                                                                                                |
| [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)     | [load_reference](#load-reference-method)(reference: [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html))                                                                                                                                                                                                |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)         | [ensure_unique_name](#ensure-unique-name-method)(name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), existing_names: [Array](https://docs.godotengine.org/en/stable/classes/class_array.html), empty_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html) = "Unnamed") |
| void                                                                               | [open_scene_in_editor](#open-scene-in-editor-method)(scene_path: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), scene_tree: [SceneTree](https://docs.godotengine.org/en/stable/classes/class_scenetree.html))                                                                                       |
| void                                                                               | [create_new_scene_file](#create-new-scene-file-method)(scene_path: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), scene_type: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                           |
| [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)           | [get_resources_of_type](#get-resources-of-type-method)(type: [String](https://docs.godotengine.org/en/stable/classes/class_string.html) = "dialogue", path: [String](https://docs.godotengine.org/en/stable/classes/class_string.html) = "res://")                                                                               |
| [SproutyDialogsCharacterData](../resources/character-data)                         | [load_character_reference](#load-character-reference-method)(character_key: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), reference: [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html))                                                                                 |
| [SproutyDialogsCharacterData](../resources/character-data)                         | [find_character_resource_by_key](#find-character-resource-by-key-method)(character_key: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), path: [String](https://docs.godotengine.org/en/stable/classes/class_string.html) = "res://")                                                                 |

## Method Descriptions

<h3 id="get-recent-file-path-method">
  <span class="reference-type">static func </span><code>get_recent_file_path</code><span class="parameters">(file_type: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Get the last used path for a file type in a file dialog.</p>
<hr/>

<h3 id="set-recent-file-path-method">
  <span class="reference-type">static func </span><code>set_recent_file_path</code><span class="parameters">(file_type: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, path: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set the last used path for a file type in a file dialog.</p>
<hr/>

<h3 id="check-valid-extension-method">
  <span class="reference-type">static func </span><code>check_valid_extension</code><span class="parameters">(path: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, extensions: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a></span>
</h3>
<p>Check if the path has valid extension.</p>
<hr/>

<h3 id="check-valid-uid-path-method">
  <span class="reference-type">static func </span><code>check_valid_uid_path</code><span class="parameters">(uid: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a></span>
</h3>
<p>Check if a UID has a valid resource path associated with it.</p>
<hr/>

<h3 id="make-reference-method">
  <span class="reference-type">static func </span><code>make_reference</code><span class="parameters">(uid: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a> = -1, path: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = "")</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>Returns a resource reference dictionary with the given resource UID and file path. This is the format used to store the resource references in the plugin data (e.g. the character references of the dialogue data), so the resource can still be loaded by its path when the UID is no longer valid.</p>
<hr/>

<h3 id="build-reference-method">
  <span class="reference-type">static func </span><code>build_reference</code><span class="parameters">(path: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>Returns a resource reference dictionary for the resource at the given path, storing both its UID and the path itself to load the resource as a fallback.</p>
<hr/>

<h3 id="normalize-reference-method">
  <span class="reference-type">static func </span><code>normalize_reference</code><span class="parameters">(reference: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>Normalizes a stored resource reference to a dictionary with <code>"uid"</code> and <code>"path"</code> keys. Accepts legacy references storing only the resource UID as an int, returning a reference with the UID and an empty path. Any other value is normalized to an empty reference.</p>
<hr/>

<h3 id="reference-is-empty-method">
  <span class="reference-type">static func </span><code>reference_is_empty</code><span class="parameters">(reference: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a></span>
</h3>
<p>Check if a resource reference (<code>"uid"</code>/<code>"path"</code> dictionary) is empty, meaning that it stores no usable UID nor file path.</p>
<hr/>

<h3 id="get-uid-path-method">
  <span class="reference-type">static func </span><code>get_uid_path</code><span class="parameters">(uid: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>, path_fallback: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = "")</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Returns the file path of a resource UID, using the given path as fallback when the UID is no longer valid (e.g. the resource was renamed or moved outside of the editor). Returns an empty string when none of them is valid.</p>
<hr/>

<h3 id="reference-path-method">
  <span class="reference-type">static func </span><code>reference_path</code><span class="parameters">(reference: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Returns the resolved file path of a resource reference (<code>"uid"</code>/<code>"path"</code> dictionary). The stored UID is resolved first, using the stored path as fallback when the UID is no longer valid. Returns an empty string when the path cannot be resolved.</p>
<hr/>

<h3 id="load-resource-method">
  <span class="reference-type">static func </span><code>load_resource</code><span class="parameters">(uid: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>, path_fallback: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = "")</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_resource.html">Resource</a></span>
</h3>
<p>Load a resource by its UID, using the given path as fallback. The resource is loaded from its UID path first; when the UID is no longer valid, the resource is loaded from the fallback path instead, if the file exists there. Returns null when the resource cannot be loaded.</p>
<hr/>

<h3 id="load-reference-method">
  <span class="reference-type">static func </span><code>load_reference</code><span class="parameters">(reference: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_resource.html">Resource</a></span>
</h3>
<p>Load a resource from a resource reference (<code>"uid"</code>/<code>"path"</code> dictionary). The resource is loaded from its stored UID first, using the stored path as fallback when the UID is no longer valid. Returns null when the resource cannot be loaded.</p>
<hr/>

<h3 id="ensure-unique-name-method">
  <span class="reference-type">static func </span><code>ensure_unique_name</code><span class="parameters">(name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, existing_names: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>, empty_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = "Unnamed")</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Ensure a name is unique within a list of existing names.</p>
<hr/>

<h3 id="open-scene-in-editor-method">
  <span class="reference-type">static func </span><code>open_scene_in_editor</code><span class="parameters">(scene_path: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, scene_tree: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_scenetree.html">SceneTree</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Open a scene in the editor given its path. Also, needs a reference to the <a target="_blank" href="https://docs.godotengine.org/en/stable/tutorials/scripting/scene_tree.html">SceneTree</a> (using <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-method-get-tree">Node.get_tree</a>()) to process a timer.</p>
<hr/>

<h3 id="create-new-scene-file-method">
  <span class="reference-type">static func </span><code>create_new_scene_file</code><span class="parameters">(scene_path: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, scene_type: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Create a new dialog box or portrait scene file. Needs the path where save the scene file and the type of the scene that can be `"dialog_box"` or `"portrait_scene"`.</p>
<hr/>

<h3 id="get-resources-of-type-method">
  <span class="reference-type">static func </span><code>get_resources_of_type</code><span class="parameters">(type: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = "dialogue", path: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = "res://")</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a></span>
</h3>
<p>Return all the resources of a given type in the project. The type can be <code>"dialogue"</code> or <code>"character"</code> resource.</p>
<hr/>

<h3 id="load-character-reference-method">
  <span class="reference-type">static func </span><code>load_character_reference</code><span class="parameters">(character_key: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, reference: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a>)</span><span class="return-type"> -> <a target="_blank" href="../resources/character-data">SproutyDialogsCharacterData</a></span>
</h3>
<p>
  Loads a character resource from a character reference of the dialogue data. Legacy references storing only the character UID are also accepted. The reference is tried, in this order: by its stored UID, by its stored file path, and by searching the project for a character whose current file name / key name matches `character_key`. Returns the loaded character resource, or null when it is not found.
</p>
<hr/>

<h3 id="find-character-resource-by-key-method">
  <span class="reference-type">static func </span><code>find_character_resource_by_key</code><span class="parameters">(character_key: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, path: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = "res://")</span><span class="return-type"> -> <a target="_blank" href="../resources/character-data">SproutyDialogsCharacterData</a></span>
</h3>
<p>
  Search for a character resource by its file name or its key name in the whole project. Used to recover character references when the character file was renamed or moved outside of the plugin editor, so its reference UID is no longer valid. Returns the character resource or null if it is not found.
</p>
<hr/>
