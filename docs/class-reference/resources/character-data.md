---
sidebar_position: 1
---

# SproutyDialogsCharacterData

**Inherits**: [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

## Description

This resource stores data for a character in the dialogue system.

It includes the character's key name or identifier, translations of the name, description, dialog box reference and portraits.

## Properties

| Type                                                                               | Name                                                    | Default         |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------- | --------------- |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [display_name](#display-name-var)                       | \{\}            |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)         | [description](#description-var)                         | ""              |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)         | [dialog_box_path](#dialog-box-path-var)                 | ""              |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)             | [portrait_on_dialog_box](#portrait-on-dialog-box-var)   | false           |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)         | [default_portrait](#default-portrait-var)               | ""              |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [main_transform_settings](#main-transform-settings-var) | See description |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [portraits](#portraits-var)                             | \{\}            |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [typing_sounds](#typing-sounds-var)                     | \{\}            |

## Methods

| Return Type                                                                  | Method                                                                                                                                                                                                                                                                       |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html) | [get_portrait_from_path_name](#get-portrait-from-path-name-method)(path_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), group: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) = \{"data": portraits\}) |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)   | [get_csv_name_key](#get-csv-name-key-method)()                                                                                                                                                                                                                               |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)       | [sync_key_name](#sync-key-name-method)()                                                                                                                                                                                                                                     |

## Property Descriptions

<h3 id="display-name-var">
  <span class="reference-type">var </span><code>display_name</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{\}</span>
</h3>
<p>
  Name of the character that will be displayed in the dialogue. The display name can be localized to different languages, so it is stored as a dictionary where each key is a [locale code](https://docs.godotengine.org/en/stable/tutorials/i18n/locales.html) (e.g., "en", "fr") and its value is the name translated in that locale.
  Example:
</p>
```gdscript
{
  "en": "Name in English",
  "es": "Nombre en Español",
  ...
}
```
<hr/>

<h3 id="description-var">
  <span class="reference-type">var </span><code>description</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = ""</span>
</h3>
<p>Character description. This does nothing, its only for your reference.</p>
<hr/>

<h3 id="dialog-box-path-var">
  <span class="reference-type">var </span><code>dialog_box_path</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = ""</span>
</h3>
<p>Path to the dialog box scene to display the character's dialogue. This is stored as a fallback to load the dialog box when its stored UID is no longer valid. This is for reference only, the dialog box is set from the character editor.</p>
<hr/>

<h3 id="portrait-on-dialog-box-var">
  <span class="reference-type">var </span><code>portrait_on_dialog_box</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = false</span>
</h3>
<p>Flag to indicate if the character's portrait should be displayed on the dialog box. If true, the character's portrait scene will be shown in the [portrait display](../nodes/dialog-box/#portrait-display-var) node of the <a target="_blank" href="../nodes/dialog-box">DialogBox</a>. For this you need to set the [portrait display](../nodes/dialog-box/#portrait-display-var) node that will hold the portrait as a parent of the portrait scene.</p>
<hr/>

<h3 id="default-portrait-var">
  <span class="reference-type">var </span><code>default_portrait</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = ""</span>
</h3>
<p>Name of the default portrait to use for this character. If set, this portrait will be used when no specific portrait is specified in the dialogue.</p>
<hr/>

<h3 id="main-transform-settings-var">
  <span class="reference-type">var </span><code>main_transform_settings</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>
  Transform settings for all the character portraits. This is a dictionary with the following keys:
</p>
<ul>
  <li><strong>scale</strong>: the scale of the portrait.</li>
  <li><strong>scale_lock_ratio</strong>: whether to lock the aspect ratio of the scale.</li>
  <li><strong>offset</strong>: the offset of the portrait.</li>
  <li><strong>rotation</strong>: the rotation of the portrait in degrees.</li>
  <li><strong>mirror</strong>: whether to mirror the portrait.</li>
</ul>
<p>Default values:</p>
```gdscript
{
  "scale": Vector2.ONE,
  "scale_lock_ratio": true,
  "offset": Vector2.ZERO,
  "rotation": 0.0,
  "mirror": false
}
```
<hr/>

<h3 id="portraits-var">
  <span class="reference-type">var </span><code>portraits</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{\}</span>
</h3>
<p>
  Character's portraits. This is a dictionary where each key is a portrait name or a group of portraits and its value is a dictionary containing the [portrait data](./portrait-data) or more portraits.

The dictionary structure is as follows:

</p>
```gdscript
{
  "portrait_name_1": {
    "index" : 0,
    "data": SproutyDialogsPortraitData (SubResource)
  },
  "portrait_group": {
    "index" : 1,
    "data": {
      "portrait_name_2": {
        "index" : 0,
        "data": SproutyDialogsPortraitData (SubResource)
      },
      ...
    },
    ...
  },
  ...
}
```
<hr/>

<h3 id="typing-sounds-var">
  <span class="reference-type">var </span><code>typing_sounds</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{\}</span>
</h3>
<p>
  Typing sounds for the character. This is a dictionary where each key is the sound name (e.g., "typing_1") and its value is a dictionary containing the sound data.
  
  The dictionary structure is as follows:
</p>
```gdscript
{
  "sound_1": {
    "path": "res://path/to/typing_1.wav",
    "volume": 0.5,
    "pitch": 1.0
  },
  "sound_2": {
    "path": "res://path/to/typing_2.wav",
    "volume": 0.5,
    "pitch": 1.0
  },
  ...
}
```
<p>*(Not used yet, typing sounds implementation is pending)!*</p>
<hr/>

## Method Descriptions

<h3 id="get-portrait-from-path-name-method">
  <span class="reference-type">func </span><code>get_portrait_from_path_name</code><span class="parameters">(path_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, group: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{"data": portraits\})</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a></span>
</h3>
<p>Returns the portrait data for a given portrait path name. The path name can be a portrait name or a path (e.g., "group/portrait"). If the portrait is a group, it will recursively search for the portrait data.</p>
<hr/>

<h3 id="get-csv-name-key-method">
  <span class="reference-type">func </span><code>get_csv_name_key</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Returns the translation key used on the CSV file for this character's display name. Characters created before the CSV name key existed may have it empty, in that case it falls back to the key derived from the key name.</p>
<hr/>

<h3 id="sync-key-name-method">
  <span class="reference-type">func </span><code>sync_key_name</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a></span>
</h3>
<p>
  Updates the key name to match the current file name of this character resource. It should be called every time the character file is loaded so the key name is always the current file name.
  Returns true if any property was updated (the key name or the CSV name key), so the caller can save the changes to the file.
</p>
<hr/>
