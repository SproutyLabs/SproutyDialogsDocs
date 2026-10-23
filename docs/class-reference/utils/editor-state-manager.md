---
sidebar_position: 9
---

# SproutyDialogsEditorStateManager

**Inherits**: [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

## Description

This class manages the temporary editor state for the Sprouty Dialogs plugin. It provides methods to get and set editor state values, such as the state of the editor window (the last opened dialogue files and the selected file).

:::info[Important]

**This class is for internal editor use**. The editor state is stored in a cache file inside the project's `.godot` folder, so the values will reset if the caches are cleared.

:::

## Methods

| Return Type                                                                  | Method                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html) | [get_value](#get-value-method)(section: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), key: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                      |
| void                                                                         | [set_value](#set-value-method)(section: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), key: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), value: [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html)) |

## Constants

<h3 id="editor-state-file-path-const">
  <span class="reference-type">const </span><code>EDITOR_STATE_FILE_PATH</code> <span class="const-value"> = "res://.godot/sprouty_dialogs_cache.cfg"</span>
</h3>
<p>Path in which the cache file that stores the editor state is saved.</p>
<hr/>

## Method Descriptions

<h3 id="get-value-method">
  <span class="reference-type">static func </span><code>get_value</code><span class="parameters">(section: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, key: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a></span>
</h3>
<p>Returns an editor state value from the cache file. If the value section or key are not found, it returns null and prints an error message.</p>
<hr/>

<h3 id="set-value-method">
  <span class="reference-type">static func </span><code>set_value</code><span class="parameters">(section: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, key: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, value: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Sets an editor state value in the cache file. If the value section or key are not found, it prints an error message.</p>
<hr/>
