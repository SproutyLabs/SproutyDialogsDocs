---
sidebar_position: 7
---

# SproutyDialogsCSVFileManager

**Inherits**: [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

## Description

This class handles CSV files operations for saving and loading translations. It provides methods to handle dialogs and character names translations with CSV files.

## Methods

| Return Type                                                                        | Method                                                                                                                                                                                                                                                                                   |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| void                                                                               | [save_file](#save-file-method)(header: [Array](https://docs.godotengine.org/en/stable/classes/class_array.html), data: [Array](https://docs.godotengine.org/en/stable/classes/class_array.html), file_path: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))  |
| [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)           | [load_file](#load-file-method)(file_path: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                                                                                                    |
| void                                                                               | [update_row](#update-row-method)(file_path: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), header: [Array](https://docs.godotengine.org/en/stable/classes/class_array.html), row: [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)) |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)         | [new_csv_template_file](#new-csv-template-file-method)(name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                                                                                 |
| void                                                                               | [save_dialogs_on_csv](#save-dialogs-on-csv-method)(dialogs: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html), path: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                        |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [load_dialogs_from_csv](#load-dialogs-from-csv-method)(path: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                                                                                 |
| void                                                                               | [save_character_names_on_csv](#save-character-names-on-csv-method)(key_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), name_data: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html))                                  |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [load_character_names_from_csv](#load-character-names-from-csv-method)(key_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                                                             |

## Method Descriptions

<h3 id="save-file-method">
  <span class="reference-type">func </span><code>save_file</code><span class="parameters">(header: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>, data: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>, file_path: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>
  Save data to a CSV file. The data is provided as an array of arrays, where each inner array represents a row in the CSV file. The header is an array representing the first row of the CSV file.
</p>
<hr/>

<h3 id="load-file-method">
  <span class="reference-type">func </span><code>load_file</code><span class="parameters">(file_path: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a></span>
</h3>
<p>Load data from a CSV file. Returns an array with the CSV data.</p>
<hr/>

<h3 id="update-row-method">
  <span class="reference-type">func </span><code>update_row</code><span class="parameters">(file_path: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, header: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>, row: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Add or update a row in a CSV file. If the row with the same key exists, it will be updated. If not, it will be added to the end of the file.</p>
<hr/>

<h3 id="new-csv-template-file-method">
  <span class="reference-type">func </span><code>new_csv_template_file</code><span class="parameters">(name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Create a new CSV template file. Returns the path of the created file or an empty string if an error occurred.</p>
<hr/>

<h3 id="save-dialogs-on-csv-method">
  <span class="reference-type">func </span><code>save_dialogs_on_csv</code><span class="parameters">(dialogs: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>, path: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Save all dialogs from a dictionary to a CSV file. Update existing rows or add new ones if the dialog key does not exist and save the file with all the dialogs without removing any existing data.</p>
<hr/>

<h3 id="load-dialogs-from-csv-method">
  <span class="reference-type">func </span><code>load_dialogs_from_csv</code><span class="parameters">(path: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>
  Load all dialogs from a CSV file to a dictionary. Returns a dictionary with the dialogue data as:
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

<h3 id="save-character-names-on-csv-method">
  <span class="reference-type">func </span><code>save_character_names_on_csv</code><span class="parameters">(key_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, name_data: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Save character name translations on the CSV file.</p>
<hr/>

<h3 id="load-character-names-from-csv-method">
  <span class="reference-type">func </span><code>load_character_names_from_csv</code><span class="parameters">(key_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>
  Load character name translations from a CSV file to a dictionary. Returns a dictionary with the character names as:
</p>
```gdscript
{ 
  "locale_code_1": "Translated name in locale 1",
  "locale_code_2": "Translated name in locale 2",
  ...
}
```
<hr/>
