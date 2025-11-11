---
sidebar_position: 3
---

# EditorSproutyDialogsDictionaryField

**Inherits**: [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

## Description

This component is used to create a field for display a dictionary. It allows the user to add, remove and modify items in the dictionary.

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
  <span class="parameters">(dictionary: <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span>
</h3>
<p>Emitted when the dictionary is changed.</p>
<hr/>

<h3 id="item-changed-signal">
  <span class="reference-type">signal </span><code>item_changed</code>
  <span class="parameters">(item: <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span>
</h3>
<p>Emitted when an item in the dictionary is changed.</p>
<hr/>

<h3 id="item-added-signal">
  <span class="reference-type">signal </span><code>item_added</code>
  <span class="parameters">(item: <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span>
</h3>
<p>Emitted when a new item is added to the dictionary.</p>
<hr/>

<h3 id="item-removed-signal">
  <span class="reference-type">signal </span><code>item_removed</code>
  <span class="parameters">(item: <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span>
</h3>
<p>Emitted when an item is removed from the dictionary.</p>
<hr/>

## Method Descriptions

<h3 id="get-dictionary-method">
  <span class="reference-type">func </span><code>get_dictionary</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>
  Return the current dictionary of items data. Each item is a dictionary with the following structure:
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

<h3 id="get-keys-method">
  <span class="reference-type">func </span><code>get_keys</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a></span>
</h3>
<p>Return the keys of the dictionary items.</p>
<hr/>

<h3 id="get-items-values-method">
  <span class="reference-type">func </span><code>get_items_values</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>Return the values of the dictionary items.</p>
<hr/>

<h3 id="get-items-types-method">
  <span class="reference-type">func </span><code>get_items_types</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>Return the types of the dictionary items.</p>
<hr/>

<h3 id="set-dictionary-method">
  <span class="reference-type">func </span><code>set_dictionary</code><span class="parameters">(items: <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set the array component with a given dictionary.</p>
<hr/>

<h3 id="clear-dictionary-method">
  <span class="reference-type">func </span><code>clear_dictionary</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Clear the dictionary items.</p>
<hr/>
