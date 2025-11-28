---
sidebar_position: 1
---

# SproutyDialogsCharacterData

**Inherits**: [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

## Description

This resource stores data for a character in the dialogue system.

It includes the character's key name or identifier, translations of the name, description, dialog box reference and portraits.

## Properties

| Type                                                                               | Name                                                  | Default |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------- | ------- |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)         | [key_name](#key-name-var)                             | ""      |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [display_name](#display-name-var)                     | \{\}    |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)         | [description](#description-var)                       | ""      |
| [int](https://docs.godotengine.org/en/stable/classes/class_int.html)               | [dialog_box_uid](#dialog-box-uid-var)                 | -1      |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)         | [dialog_box_path](#dialog-box-path-var)               | ""      |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)             | [portrait_on_dialog_box](#portrait-on-dialog-box-var) | false   |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [portraits](#portraits-var)                           | \{\}    |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [typing_sounds](#typing-sounds-var)                   | \{\}    |

## Methods

| Return Type                                                                  | Method                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html) | [get_portrait_from_path_name](#get-portrait-from-path-name-method)(path_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), group: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) = portraits) |

## Property Descriptions

<h3 id="key-name-var">
  <span class="reference-type">var </span><code>key_name</code>
  <span class="default-value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = ""</span>
</h3>
<p>Character identifier. Corresponds to the file name of the character's resource.</p>
<hr/>

<h3 id="display-name-var">
  <span class="reference-type">var </span><code>display_name</code>
  <span class="default-value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{\}</span>
</h3>
<p>
  Name of the character that will be displayed in the dialogue. The display name can be localized to different languages, so it is stored as a dictionary where each key is a [locale code](https://docs.godotengine.org/en/stable/tutorials/i18n/locales.html) (e.g., "en", "fr") and its value is the name translated in that locale.
  Example:
</p>
<pre><code>
{`{
	  "en": "Name in English",
	  "es": "Nombre en Español",
	  ...
}`}
</code></pre>
<hr/>

<h3 id="description-var">
  <span class="reference-type">var </span><code>description</code>
  <span class="default-value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = ""</span>
</h3>
<p>Character description. This does nothing, its only for your reference.</p>
<hr/>

<h3 id="dialog-box-uid-var">
  <span class="reference-type">var </span><code>dialog_box_uid</code>
  <span class="default-value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a> = -1</span>
</h3>
<p>Reference to the dialog box scene used by this character. This is the UID of a scene that contains a <a href="/docs/class-reference/nodes/dialog-box">DialogBox</a> node which will be used to display the character's dialogue.</p>
<hr/>

<h3 id="dialog-box-path-var">
  <span class="reference-type">var </span><code>dialog_box_path</code>
  <span class="default-value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = ""</span>
</h3>
<p>Path to the dialog box scene to display the character's dialogue. This is for reference only, use [dialog_box_uid](#dialog-box-uid-var) to set the dialog box.</p>
<hr/>

<h3 id="portrait-on-dialog-box-var">
  <span class="reference-type">var </span><code>portrait_on_dialog_box</code>
  <span class="default-value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = false</span>
</h3>
<p>Flag to indicate if the character's portrait should be displayed on the dialog box. If true, the character's portrait scene will be shown in the [portrait display](/docs/class-reference/nodes/dialog-box/#portrait-display-var) node of the <a href="/docs/class-reference/nodes/dialog-box">DialogBox</a>. For this you need to set the [portrait display](/docs/class-reference/nodes/dialog-box/#portrait-display-var) node that will hold the portrait as a parent of the portrait scene.</p>
<hr/>

<h3 id="portraits-var">
  <span class="reference-type">var </span><code>portraits</code>
  <span class="default-value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{\}</span>
</h3>
<p>
  Character's portraits. This is a dictionary where each key is a portrait name or a group of portraits and its value is a dictionary containing the [portrait data](/docs/class-reference/resources/portrait-data) or more portraits.
  The dictionary structure is as follows:
</p>
<pre><code>
{`{
	  "portrait_name_1": SproutyDialogsPortraitData (SubResource),
	  "portrait_group": {
		"portrait_name_2": SproutyDialogsPortraitData (SubResource),
		"portrait_name_3": SproutyDialogsPortraitData (SubResource),
		...
	  },
	  ...
}`}
</code></pre>
<hr/>

<h3 id="typing-sounds-var">
  <span class="reference-type">var </span><code>typing_sounds</code>
  <span class="default-value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{\}</span>
</h3>
<p>
  Typing sounds for the character. This is a dictionary where each key is the sound name (e.g., "typing_1") and its value is a dictionary containing the sound data.
  The dictionary structure is as follows:
</p>
<pre><code>
{`{
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
}`}
</code></pre>
<p>*(Not used yet, typing sounds implementation is pending)!*</p>
<hr/>

## Method Descriptions

<h3 id="get-portrait-from-path-name-method">
  <span class="reference-type">func </span><code>get_portrait_from_path_name</code><span class="parameters">(path_name: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, group: <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = portraits)</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a></span>
</h3>
<p>Returns the portrait data for a given portrait path name. The path name can be a portrait name or a path (e.g., "group/portrait"). If the portrait is a group, it will recursively search for the portrait data.</p>
<hr/>
