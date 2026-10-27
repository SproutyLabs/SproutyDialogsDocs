---
sidebar_position: 2
---

# SproutyDialogsDialogueData

**Inherits**: [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

## Description

This resource stores the dialogue data from the graph editor. It includes the graph data, character references, dialogues and a reference to a CSV file for translations.

## Properties

| Type                                                                               | Name                              | Default |
| ---------------------------------------------------------------------------------- | --------------------------------- | ------- |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [graph_data](#graph-data-var)     | \{\}    |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [dialogs](#dialogs-var)           | \{\}    |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [characters](#characters-var)     | \{\}    |

## Methods

| Return Type                                                                                                                                            | Method                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)\[[String](https://docs.godotengine.org/en/stable/classes/class_string.html)\] | [get_start_ids](#get-start-ids-method)()                                                                                                         |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html)                                                                     | [get_portraits_on_dialog](#get-portraits-on-dialog-method)(start_id: [String](https://docs.godotengine.org/en/stable/classes/class_string.html)) |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html)                                                                     | [get_all_character_references](#get-all-character-references-method)()                                                                           |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)                                                                                 | [sync_character_references](#sync-character-references-method)()                                                                                 |

## Property Descriptions

<h3 id="graph-data-var">
  <span class="reference-type">var </span><code>graph_data</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{\}</span>
</h3>
<p>
  The dialogue data from the graph editor. This is a dictionary where each key is the ID (start id) of a dialogue branch and its value is a nested dictionary containing the nodes of that branch.
  
  This dictionary is structured as follows:
</p>
```gdscript
{
  "dialogue_id_1": {
    "node_1": { ... },
    "node_2": { ... },
  },
  "dialogue_id_2": {
    "node_1": { ... },
    "node_2": { ... },
  },
  ...
}
```
<hr/>

<h3 id="dialogs-var">
  <span class="reference-type">var </span><code>dialogs</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{\}</span>
</h3>
<p>
  A dictionary containing the dialogues for each dialogue ID. 
  
  This dictionary is structured as follows:
</p>
```gdscript
{
  "dialogue_id_1": {
    "locale_code_1": "Translated text in locale 1",
    "locale_code_2": "Translated text in locale 2",
    ...
  },
  ...
}
```
<hr/>

<h3 id="characters-var">
  <span class="reference-type">var </span><code>characters</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{\}</span>
</h3>
<p>
  A dictionary containing the characters for each dialogue ID. This is a dictionary where each key is the dialogue ID and its value is a dictionary with each character key name and its reference, stored as a subdictionary with the UID and the file path of the character resource, so the character can still be loaded by its path when the UID is no longer valid.
  
  This dictionary is structured as follows:
</p>
```gdscript
{
  "dialogue_id_1": {
    "character_key_name_1": {
      "uid": UID of the character resource,
      "path": "res://path_to_the/character_file.tres",
    },
    "character_key_name_2": { ... },
    ...
  },
  ...
}
```
<hr/>

## Method Descriptions

<h3 id="get-start-ids-method">
  <span class="reference-type">func </span><code>get_start_ids</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>[<a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>]</span>
</h3>
<p>Returns a list of the start IDs from the graph data.</p>
<hr/>

<h3 id="get-portraits-on-dialog-method">
  <span class="reference-type">func </span><code>get_portraits_on_dialog</code><span class="parameters">(start_id: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>
  Returns a dictionary of the characters and their portraits for a given start ID. The start ID is the ID of the dialogue branch to get the characters from.
  
  The dictionary is structured as follows:
</p>
```gdscript
{
  "character_name_1": [portrait_name_1, portrait_name_2, ...],
  "character_name_2": [portrait_name_1, portrait_name_2, ...],
  ...
}
```
<hr/>

<h3 id="get-all-character-references-method">
  <span class="reference-type">func </span><code>get_all_character_references</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>Return all the character references count from the dialogue file.</p>
<hr/>

<h3 id="sync-character-references-method">
  <span class="reference-type">func </span><code>sync_character_references</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a></span>
</h3>
<p>
  Synchronizes the character references with the current key name of each character file. This updates:
</p>
<ul>
  <li>The legacy references that stored the character UID only, migrating them to the current reference format (a subdictionary with "uid" and "path").</li>
  <li>The stored UID and file path of every reference with its current values (e.g. when the stored file path is no longer the current location).</li>
  <li>The characters dictionary keys and the 'character' reference on the dialogue nodes data with the current file name of every character file referenced by UID or by path (key name to file name renaming).</li>
</ul>
<p>
  Call it every time the dialogue file is loaded, and save the dialogue file again if this returns true, so the file is saved with the updated values.
  Returns true if any character reference was renamed or updated.
</p>
<hr/>
