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
| [int](https://docs.godotengine.org/en/stable/classes/class_int.html)               | [csv_file_uid](#csv-file-uid-var) | -1      |

## Methods

| Return Type                                                                                                                                            | Method                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)\[[String](https://docs.godotengine.org/en/stable/classes/class_string.html)\] | [get_start_ids](#get-start-ids-method)()                                                                                                         |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html)                                                                     | [get_portraits_on_dialog](#get-portraits-on-dialog-method)(start_id: [String](https://docs.godotengine.org/en/stable/classes/class_string.html)) |

## Property Descriptions

<h3 id="graph-data-var">
  <span class="reference-type">var </span><code>graph_data</code>
  <span class="default_value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{\}</span>
</h3>
<p>
  The dialogue data from the graph editor. This is a dictionary where each key is the ID (start id) of a dialogue branch and its value is a nested dictionary containing the nodes of that branch.
  
  This dictionary is structured as follows:
</p>
<pre><code>
{`{
	  "dialogue_id_1": {
		"node_1": { ... },
		"node_2": { ... },
	  },
	  "dialogue_id_2": {
		"node_1": { ... },
		"node_2": { ... },
	  },
	  ...
}`}
</code></pre>
<hr/>

<h3 id="dialogs-var">
  <span class="reference-type">var </span><code>dialogs</code>
  <span class="default_value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{\}</span>
</h3>
<p>
  A dictionary containing the dialogues for each dialogue ID. 
  
  This dictionary is structured as follows:
</p>
<pre><code>
{`{
	  "dialogue_id_1": {
		"locale_code_1": "Translated text in locale 1",
		"locale_code_2": "Translated text in locale 2",
		...
	  },
	  ...
}`}
</code></pre>
<hr/>

<h3 id="characters-var">
  <span class="reference-type">var </span><code>characters</code>
  <span class="default_value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{\}</span>
</h3>
<p>
  A dictionary containing the characters for each dialogue ID. This is a dictionary where each key is the dialogue ID and its value is the characters associated with its UID.
  
  This dictionary is structured as follows:
</p>
<pre><code>
{`{
	  "dialogue_id_1": {
		"character_name_1": UID of the character resource,
		"character_name_2": UID of the character resource,
		...
	  },
	  ...
}`}
</code></pre>
<hr/>

<h3 id="csv-file-uid-var">
  <span class="reference-type">var </span><code>csv_file_uid</code>
  <span class="default_value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a> = -1</span>
</h3>
<p>Reference to CSV file with the translations for the dialogues. This is the UID of the CSV file resource.</p>
<hr/>

## Method Descriptions

<h3 id="get-start-ids-method">
  <span class="reference-type">func </span><code>get_start_ids</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>[<a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>]</span>
</h3>
<p>Returns a list of the start IDs from the graph data.</p>
<hr/>

<h3 id="get-portraits-on-dialog-method">
  <span class="reference-type">func </span><code>get_portraits_on_dialog</code><span class="parameters">(start_id: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>
  Returns a dictionary of the characters and their portraits for a given start ID. The start ID is the ID of the dialogue branch to get the characters from.
  
  The dictionary is structured as follows:
</p>
<pre><code>
{`{
	  "character_name_1": [portrait_name_1, portrait_name_2, ...],
	  "character_name_2": [portrait_name_1, portrait_name_2, ...],
	  ...
}`}
</code></pre>
<hr/>
