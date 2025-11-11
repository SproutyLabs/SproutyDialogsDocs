---
sidebar_position: 4
---

# EditorSproutyDialogsDictionaryFieldItem

**Inherits**: [HBoxContainer](https://docs.godotengine.org/en/stable/classes/class_hboxcontainer.html)

## Description

This component is an item field from the dictionary field. It allows the user to modify the item key, value type and value.

## Methods

| Return Type                                                                        | Method                                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [get_item_data](#get-item-data-method)()                                                                                                                                                                                                                                                      |
| [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html)       | [get_value](#get-value-method)()                                                                                                                                                                                                                                                              |
| [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html)       | [get_type](#get-type-method)()                                                                                                                                                                                                                                                                |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [get_metadata](#get-metadata-method)()                                                                                                                                                                                                                                                        |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)         | [get_key](#get-key-method)()                                                                                                                                                                                                                                                                  |
| void                                                                               | [set_key](#set-key-method)(key: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                                                                                                                   |
| void                                                                               | [set_value](#set-value-method)(value: [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html), type: [int](https://docs.godotengine.org/en/stable/classes/class_int.html), metadata: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html)) |
| void                                                                               | [set_type](#set-type-method)(type: [int](https://docs.godotengine.org/en/stable/classes/class_int.html), metadata: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html))                                                                                        |

## Signals

<h3 id="modified-signal">
  <span class="reference-type">signal </span><code>modified</code>
</h3>
<p>Emitted when the item is modified.</p>
<hr/>

<h3 id="item-changed-signal">
  <span class="reference-type">signal </span><code>item_changed</code>
  <span class="parameters">(item: <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span>
</h3>
<p>Emitted when the item is changed.</p>
<hr/>

<h3 id="item-removed-signal">
  <span class="reference-type">signal </span><code>item_removed</code>
  <span class="parameters">(index: <a href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>)</span>
</h3>
<p>Emitted when the remove button is pressed.</p>
<hr/>

<h3 id="key-modified-signal">
  <span class="reference-type">signal </span><code>key_modified</code>
  <span class="parameters">(key: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when the item key is modified.</p>
<hr/>

## Method Descriptions

<h3 id="get-item-data-method">
  <span class="reference-type">func </span><code>get_item_data</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>
  Returns the item data as a dictionary with the following structure:
</p>
<pre><code>
{`{
    "key": String,
    "type": int,
    "value": Variant,
    "metadata": Dictionary
}`}
</code></pre>
<hr/>

<h3 id="get-value-method">
  <span class="reference-type">func </span><code>get_value</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a></span>
</h3>
<p>Returns the current value of the item.</p>
<hr/>

<h3 id="get-type-method">
  <span class="reference-type">func </span><code>get_type</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a></span>
</h3>
<p>Returns the current type of the item.</p>
<hr/>

<h3 id="get-metadata-method">
  <span class="reference-type">func </span><code>get_metadata</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>Returns the current metadata of the item type.</p>
<hr/>

<h3 id="get-key-method">
  <span class="reference-type">func </span><code>get_key</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Returns the current key of the item.</p>
<hr/>

<h3 id="set-key-method">
  <span class="reference-type">func </span><code>set_key</code><span class="parameters">(key: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set the current key of the item.</p>
<hr/>

<h3 id="set-value-method">
  <span class="reference-type">func </span><code>set_value</code><span class="parameters">(value: <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a>, type: <a href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>, metadata: <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set the current value of the item along with its type and metadata.</p>
<hr/>

<h3 id="set-type-method">
  <span class="reference-type">func </span><code>set_type</code><span class="parameters">(type: <a href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>, metadata: <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set the variable type and metadata for the item.</p>
<hr/>
