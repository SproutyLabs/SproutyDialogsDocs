---
sidebar_position: 8
---

# SproutyDialogsReferenceUtils

**Inherits**: [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

## Description

This module is responsible for the resource references used in the plugin. A resource reference is a dictionary that stores the resource UID and its file path, so the resource can still be loaded by its path when the UID is no longer valid. It provides methods to create, check, resolve and load resource references.

## Methods

| Return Type                                                                        | Method                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [create_reference_dict](#create-reference-dict-method)(uid: [int](https://docs.godotengine.org/en/stable/classes/class_int.html) = -1, path: [String](https://docs.godotengine.org/en/stable/classes/class_string.html) = "")                 |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [create_reference_from_path](#create-reference-from-path-method)(path: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                            |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [create_reference_from_uid](#create-reference-from-uid-method)(uid: [int](https://docs.godotengine.org/en/stable/classes/class_int.html))                                                                                                     |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [normalize_reference_dict](#normalize-reference-dict-method)(reference: [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html))                                                                                         |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)             | [is_reference_dict_empty](#is-reference-dict-empty-method)(reference: [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html))                                                                                           |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)         | [get_reference_path_from_uid](#get-reference-path-from-uid-method)(uid: [int](https://docs.godotengine.org/en/stable/classes/class_int.html), path_fallback: [String](https://docs.godotengine.org/en/stable/classes/class_string.html) = "") |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)         | [get_reference_path](#get-reference-path-method)(reference: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html))                                                                                               |
| [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)     | [load_resource](#load-resource-method)(uid: [int](https://docs.godotengine.org/en/stable/classes/class_int.html), path_fallback: [String](https://docs.godotengine.org/en/stable/classes/class_string.html) = "")                             |
| [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)     | [load_resource_from_reference](#load-resource-from-reference-method)(reference: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html))                                                                           |

## Method Descriptions

<h3 id="create-reference-dict-method">
  <span class="reference-type">static func </span><code>create_reference_dict</code><span class="parameters">(uid: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a> = -1, path: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = "")</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>Returns a resource reference dictionary with the given resource UID and file path. This is the format used to store the resource references in the plugin data (e.g. the character references of the dialogue data).</p>
<hr/>

<h3 id="create-reference-from-path-method">
  <span class="reference-type">static func </span><code>create_reference_from_path</code><span class="parameters">(path: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>Returns a resource reference dictionary for the resource by the given path, storing both its UID and the path itself to load it as a fallback. If the path is not valid, the path is still kept (with no UID) to not lose the reference data, so it can be recovered or resolved later.</p>
<hr/>

<h3 id="create-reference-from-uid-method">
  <span class="reference-type">static func </span><code>create_reference_from_uid</code><span class="parameters">(uid: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>Returns a resource reference dictionary for the resource by the given UID, storing the UID and the path resolved from it. If the UID is not valid, the UID is still kept (with no path) to not lose the reference data, so it can be recovered or resolved later.</p>
<hr/>

<h3 id="normalize-reference-dict-method">
  <span class="reference-type">static func </span><code>normalize_reference_dict</code><span class="parameters">(reference: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>Normalizes a resource reference to a reference dictionary with <code>"uid"</code> and <code>"path"</code> keys. Accepts legacy references storing only the resource UID as an int, returning a reference dictionary with the UID and an empty path. Also, accepts a String to create the reference dictionary from a path. Any other value is normalized to an empty reference dictionary.</p>
<hr/>

<h3 id="is-reference-dict-empty-method">
  <span class="reference-type">static func </span><code>is_reference_dict_empty</code><span class="parameters">(reference: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a></span>
</h3>
<p>Check if a resource reference is empty, meaning that it stores no usable resource UID nor file path.</p>
<hr/>

<h3 id="get-reference-path-from-uid-method">
  <span class="reference-type">static func </span><code>get_reference_path_from_uid</code><span class="parameters">(uid: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>, path_fallback: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = "")</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Returns the file path of a resource UID, using the given path as fallback when the UID is no longer valid (e.g. the resource was renamed or moved outside of the editor). Returns an empty string when none of them is valid.</p>
<hr/>

<h3 id="get-reference-path-method">
  <span class="reference-type">static func </span><code>get_reference_path</code><span class="parameters">(reference: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Returns the resolved file path of a resource reference. The stored UID is resolved first, using the stored path as fallback when the UID is no longer valid. Returns an empty string when the path cannot be resolved.</p>
<hr/>

<h3 id="load-resource-method">
  <span class="reference-type">static func </span><code>load_resource</code><span class="parameters">(uid: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>, path_fallback: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = "")</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_resource.html">Resource</a></span>
</h3>
<p>Load a resource by its UID, using the given path as fallback. The resource is loaded from its UID path first; when the UID is no longer valid, the resource is loaded from the fallback path instead, if the file exists there. Returns null when the resource cannot be loaded.</p>
<hr/>

<h3 id="load-resource-from-reference-method">
  <span class="reference-type">static func </span><code>load_resource_from_reference</code><span class="parameters">(reference: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_resource.html">Resource</a></span>
</h3>
<p>Load a resource from a resource reference. The resource is loaded from its stored UID first, using the stored path as fallback when the UID is no longer valid. Returns null when the reference is invalid or the resource cannot be loaded.</p>
<hr/>
