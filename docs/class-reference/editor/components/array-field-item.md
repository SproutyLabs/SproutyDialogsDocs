---
sidebar_position: 2
---

# EditorSproutyDialogsArrayFieldItem

**Inherits**: [HBoxContainer](https://docs.godotengine.org/en/stable/classes/class_hboxcontainer.html)

## Description

This component is an item field from the array field. It allows the user to modify the item value and type.

## Properties

| Type                                                                   | Name                                                | Default |
| ---------------------------------------------------------------------- | --------------------------------------------------- | ------- |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html) | [no_expandable_textbox](#no-expandable-textbox-var) | false   |

## Methods

| Return Type                                                                        | Method                                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [get_item_data](#get-item-data-method)()                                                                                                                                                                                                                                                      |
| [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html)       | [get_value](#get-value-method)()                                                                                                                                                                                                                                                              |
| [int](https://docs.godotengine.org/en/stable/classes/class_int.html)               | [get_type](#get-type-method)()                                                                                                                                                                                                                                                                |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [get_metadata](#get-metadata-method)()                                                                                                                                                                                                                                                        |
| [int](https://docs.godotengine.org/en/stable/classes/class_int.html)               | [get_item_index](#get-item-index-method)()                                                                                                                                                                                                                                                    |
| void                                                                               | [set_item_index](#set-item-index-method)(index: [int](https://docs.godotengine.org/en/stable/classes/class_int.html))                                                                                                                                                                         |
| void                                                                               | [set_value](#set-value-method)(value: [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html), type: [int](https://docs.godotengine.org/en/stable/classes/class_int.html), metadata: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html)) |
| void                                                                               | [set_type](#set-type-method)(type: [int](https://docs.godotengine.org/en/stable/classes/class_int.html), metadata: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html))                                                                                        |
| void                                                                               | [set_as_parameter_field](#set-as-parameter-field-method)(name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                                                                                    |

## Signals

<h3 id="modified-signal">
  <span class="reference-type">signal </span><code>modified</code>
</h3>
<p>Emitted when the item is modified.</p>
<hr/>

<h3 id="item-changed-signal">
  <span class="reference-type">signal </span><code>item_changed</code>
  <span class="parameters">(item: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span>
</h3>
<p>Emitted when the item is changed.</p>
<hr/>

<h3 id="item-removed-signal">
  <span class="reference-type">signal </span><code>item_removed</code>
  <span class="parameters">(index: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>)</span>
</h3>
<p>Emitted when the remove button is pressed.</p>
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

<h3 id="get-item-data-method">
  <span class="reference-type">func </span><code>get_item_data</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>
  Returns the item data as a dictionary with the following structure:
</p>
```gdscript
{
  "index": int,
  "type": int,
  "value": Variant,
  "metadata": Dictionary
}
```
<hr/>

<h3 id="get-value-method">
  <span class="reference-type">func </span><code>get_value</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a></span>
</h3>
<p>Returns the current value of the item.</p>
<hr/>

<h3 id="get-type-method">
  <span class="reference-type">func </span><code>get_type</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a></span>
</h3>
<p>Returns the current type of the item.</p>
<hr/>

<h3 id="get-metadata-method">
  <span class="reference-type">func </span><code>get_metadata</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>Returns the current metadata of the item type.</p>
<hr/>

<h3 id="get-item-index-method">
  <span class="reference-type">func </span><code>get_item_index</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a></span>
</h3>
<p>Returns the current index of the item in the array.</p>
<hr/>

<h3 id="set-item-index-method">
  <span class="reference-type">func </span><code>set_item_index</code><span class="parameters">(index: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set the current index of the item.</p>
<hr/>

<h3 id="set-value-method">
  <span class="reference-type">func </span><code>set_value</code><span class="parameters">(value: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a>, type: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>, metadata: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set the current value of the item along with its type and metadata.</p>
<hr/>

<h3 id="set-type-method">
  <span class="reference-type">func </span><code>set_type</code><span class="parameters">(type: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>, metadata: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set the variable type and metadata for the item.</p>
<hr/>

<h3 id="set-as-parameter-field-method">
  <span class="reference-type">func </span><code>set_as_parameter_field</code><span class="parameters">(name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set the item field as a parameter field.</p>
<hr/>
