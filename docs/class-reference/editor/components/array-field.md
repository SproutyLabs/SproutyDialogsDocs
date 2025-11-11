---
sidebar_position: 1
---

# EditorSproutyDialogsArrayField

**Inherits**: [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

## Description

This component is used to create a field for an array of data. It allows the user to add, remove and modify items in the array.

## Methods

| Return Type                                                              | Method                                                                                                          |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| [Array](https://docs.godotengine.org/en/stable/classes/class_array.html) | [get_array](#get-array-method)()                                                                                |
| [Array](https://docs.godotengine.org/en/stable/classes/class_array.html) | [get_items_values](#get-items-values-method)()                                                                  |
| [Array](https://docs.godotengine.org/en/stable/classes/class_array.html) | [get_items_types](#get-items-types-method)()                                                                    |
| void                                                                     | [set_array](#set-array-method)(items: [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)) |
| void                                                                     | [clear_array](#clear-array-method)()                                                                            |

## Signals

<h3 id="modified-signal">
  <span class="reference-type">signal </span><code>modified</code>
</h3>
<p>Emitted when the array is modified.</p>
<hr/>

<h3 id="array-changed-signal">
  <span class="reference-type">signal </span><code>array_changed</code>
  <span class="parameters">(array: <a href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>)</span>
</h3>
<p>Emitted when the array is changed.</p>
<hr/>

<h3 id="item-changed-signal">
  <span class="reference-type">signal </span><code>item_changed</code>
  <span class="parameters">(item: <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span>
</h3>
<p>Emitted when an item in the array is changed.</p>
<hr/>

<h3 id="item-added-signal">
  <span class="reference-type">signal </span><code>item_added</code>
  <span class="parameters">(item: <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span>
</h3>
<p>Emitted when a new item is added to the array.</p>
<hr/>

<h3 id="item-removed-signal">
  <span class="reference-type">signal </span><code>item_removed</code>
  <span class="parameters">(item: <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span>
</h3>
<p>Emitted when an item is removed from the array.</p>
<hr/>

## Method Descriptions

<h3 id="get-array-method">
  <span class="reference-type">func </span><code>get_array</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a></span>
</h3>
<p>
  Return the current array of items data. Each item is a dictionary with the following structure:
</p>
<pre><code>
{`{
    "index": int,
    "type": int,
    "value": Variant,
    "metadata": Dictionary
}`}
</code></pre>
<hr/>

<h3 id="get-items-values-method">
  <span class="reference-type">func </span><code>get_items_values</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a></span>
</h3>
<p>Return the values of the array items.</p>
<hr/>

<h3 id="get-items-types-method">
  <span class="reference-type">func </span><code>get_items_types</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a></span>
</h3>
<p>Return the types of the array items.</p>
<hr/>

<h3 id="set-array-method">
  <span class="reference-type">func </span><code>set_array</code><span class="parameters">(items: <a href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set the array component with a given array of items data.</p>
<hr/>

<h3 id="clear-array-method">
  <span class="reference-type">func </span><code>clear_array</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Clear the array items.</p>
<hr/>
