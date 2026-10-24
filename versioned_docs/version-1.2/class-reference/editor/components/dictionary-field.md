---
sidebar_position: 3
---

# EditorSproutyDialogsDictionaryField

**Inherits**: [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

## Description

This component is used to create a field for display a dictionary. It allows the user to add, remove and modify items in the dictionary.

## Properties

| Type                                                                   | Name                                                | Default |
| ---------------------------------------------------------------------- | --------------------------------------------------- | ------- |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html) | [no_expandable_textbox](#no-expandable-textbox-var) | false   |

## Methods

| Return Type                                                                        | Method                                                                                                                              |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [get_dictionary](#get-dictionary-method)()                                                                                          |
| [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)           | [get_keys](#get-keys-method)()                                                                                                      |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [get_items_values](#get-items-values-method)()                                                                                      |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [get_items_types](#get-items-types-method)()                                                                                        |
| void                                                                               | [set_dictionary](#set-dictionary-method)(items: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html)) |
| void                                                                               | [clear_dictionary](#clear-dictionary-method)()                                                                                      |

## Signals

<h3 id="modified-signal">
  <span class="reference-type">signal </span><code>modified</code>
</h3>
<p>Emitted when the dictionary is modified.</p>
<hr/>

<h3 id="dictionary-changed-signal">
  <span class="reference-type">signal </span><code>dictionary_changed</code>
  <span class="parameters">(dictionary: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span>
</h3>
<p>Emitted when the dictionary is changed.</p>
<hr/>

<h3 id="item-changed-signal">
  <span class="reference-type">signal </span><code>item_changed</code>
  <span class="parameters">(item: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span>
</h3>
<p>Emitted when an item in the dictionary is changed.</p>
<hr/>

<h3 id="item-added-signal">
  <span class="reference-type">signal </span><code>item_added</code>
  <span class="parameters">(item: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span>
</h3>
<p>Emitted when a new item is added to the dictionary.</p>
<hr/>

<h3 id="item-removed-signal">
  <span class="reference-type">signal </span><code>item_removed</code>
  <span class="parameters">(item: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span>
</h3>
<p>Emitted when an item is removed from the dictionary.</p>
<hr/>

<h3 id="open-text-editor-signal">
  <span class="reference-type">signal </span><code>open_text_editor</code>
  <span class="parameters">(text_box: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_textedit.html">TextEdit</a>)</span>
</h3>
<p>Emitted when press the expand button in a text box field.</p>
<hr/>

<h3 id="update-text-editor-signal">
  <span class="reference-type">signal </span><code>update_text_editor</code>
  <span class="parameters">(text_box: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_textedit.html">TextEdit</a>)</span>
</h3>
<p>Emitted when a text box field gains focus and should update the text editor.</p>
<hr/>

## Property Descriptions

<h3 id="no-expandable-textbox-var">
  <span class="reference-type">var </span><code>no_expandable_textbox</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = false</span>
</h3>
<p>Flag to remove the expandable text box from string fields.</p>
<hr/>

## Method Descriptions

<h3 id="get-dictionary-method">
  <span class="reference-type">func </span><code>get_dictionary</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>
  Return the current dictionary of items data. Each item is a dictionary with the following structure:
</p>
```gdscript
{
  "key": String,
  "type": int,
  "value": Variant,
  "metadata": Dictionary
}
```
<hr/>

<h3 id="get-keys-method">
  <span class="reference-type">func </span><code>get_keys</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a></span>
</h3>
<p>Return the keys of the dictionary items.</p>
<hr/>

<h3 id="get-items-values-method">
  <span class="reference-type">func </span><code>get_items_values</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>Return the values of the dictionary items.</p>
<hr/>

<h3 id="get-items-types-method">
  <span class="reference-type">func </span><code>get_items_types</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>Return the types of the dictionary items.</p>
<hr/>

<h3 id="set-dictionary-method">
  <span class="reference-type">func </span><code>set_dictionary</code><span class="parameters">(items: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set the array component with a given dictionary.</p>
<hr/>

<h3 id="clear-dictionary-method">
  <span class="reference-type">func </span><code>clear_dictionary</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Clear the dictionary items.</p>
<hr/>
