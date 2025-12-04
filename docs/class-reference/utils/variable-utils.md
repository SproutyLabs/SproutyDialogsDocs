---
sidebar_position: 4
---

# SproutyDialogsVariableUtils

**Inherits**: [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

## Description

This class provides utility methods to handle variables, such as get the UI fields and components needed to edit variables in the editor and get the assignment and comparison operators available for each variable type.

## Methods

| Return Type                                                                            | Method                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)               | [get_variables_of_type](#get-variables-of-type-method)(type: [int](https://docs.godotengine.org/en/stable/classes/class_int.html) = -1, group: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) = \{\})                                                                                                                                                                                                                                                                                                                                                         |
| [OptionButton](https://docs.godotengine.org/en/stable/classes/class_optionbutton.html) | [get_types_dropdown](#get-types-dropdown-method)(label: [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html) = true, excluded: [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)[[String](https://docs.godotengine.org/en/stable/classes/class_string.html)] = [])                                                                                                                                                                                                                                                                                       |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html)     | [new_field_by_type](#new-field-by-type-method)(type: [int](https://docs.godotengine.org/en/stable/classes/class_int.html), init_value: [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html) = null, property_data: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) = \{\}, on_value_changed: [Callable](https://docs.godotengine.org/en/stable/classes/class_callable.html) = func(value, type, field): return, on_modified_callable: [Callable](https://docs.godotengine.org/en/stable/classes/class_callable.html) = func(): return) |
| void                                                                                   | [set_field_value](#set-field-value-method)(field: [Control](https://docs.godotengine.org/en/stable/classes/class_control.html), type: [int](https://docs.godotengine.org/en/stable/classes/class_int.html), value: [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html))                                                                                                                                                                                                                                                                                                  |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html)     | [get_assignment_operators](#get-assignment-operators-method)(type: [int](https://docs.godotengine.org/en/stable/classes/class_int.html))                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html)     | [get_comparison_operators](#get-comparison-operators-method)()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## Enumerations

<h3 id="assign-ops-enum">
  <span class="reference-type">enum </span><code>ASSIGN_OPS</code>
</h3>
<p>Assignment operators for variables</p>

- <h4><a target="_blank" href="#assign-ops-enum">ASSIGN_OPS </a><code>ASSIGN</code> <span class="default-value"> = 0</span></h4>
  <p>Direct assignment operator (=)</p>
- <h4><a target="_blank" href="#assign-ops-enum">ASSIGN_OPS </a><code>ADD_ASSIGN</code> <span class="default-value"> = 1</span></h4>
  <p>Addition assignment operator (+=)</p>
- <h4><a target="_blank" href="#assign-ops-enum">ASSIGN_OPS </a><code>SUB_ASSIGN</code> <span class="default-value"> = 2</span></h4>
  <p>Subtraction assignment operator (-=)</p>
- <h4><a target="_blank" href="#assign-ops-enum">ASSIGN_OPS </a><code>MUL_ASSIGN</code> <span class="default-value"> = 3</span></h4>
  <p>Multiplication assignment operator (*=)</p>
- <h4><a target="_blank" href="#assign-ops-enum">ASSIGN_OPS </a><code>DIV_ASSIGN</code> <span class="default-value"> = 4</span></h4>
  <p>Division assignment operator (/=)</p>
- <h4><a target="_blank" href="#assign-ops-enum">ASSIGN_OPS </a><code>EXP_ASSIGN</code> <span class="default-value"> = 5</span></h4>
  <p>Exponentiation assignment operator (**=)</p>
- <h4><a target="_blank" href="#assign-ops-enum">ASSIGN_OPS </a><code>MOD_ASSIGN</code> <span class="default-value"> = 6</span></h4>
  <p>Modulus assignment operator (%=)</p>

<hr/>

## Constants

<h3 id="var-icon-path-const">
  <span class="reference-type">const </span><code>VAR_ICON_PATH</code> <span class="const-value"> = "res://addons/sprouty_dialogs/editor/icons/variable.svg"</span>
</h3>
<p>Path to the variable icon.</p>
<hr/>

<h3 id="dictionary-field-path-const">
  <span class="reference-type">const </span><code>DICTIONARY_FIELD_PATH</code> <span class="const-value"> = "res://addons/sprouty_dialogs/editor/components/dictionary_field.tscn"</span>
</h3>
<p>Path to the dictionary field scene.</p>
<hr/>

<h3 id="array-field-path-const">
  <span class="reference-type">const </span><code>ARRAY_FIELD_PATH</code> <span class="const-value"> = "res://addons/sprouty_dialogs/editor/components/array_field.tscn"</span>
</h3>
<p>Path to the array field scene.</p>
<hr/>

<h3 id="file-field-path-const">
  <span class="reference-type">const </span><code>FILE_FIELD_PATH</code> <span class="const-value"> = "res://addons/sprouty_dialogs/editor/components/file_field.tscn"</span>
</h3>
<p>Path to the file field scene.</p>
<hr/>

## Method Descriptions

<h3 id="get-variables-of-type-method">
  <span class="reference-type">func </span><code>get_variables_of_type</code><span class="parameters">(type: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a> = -1, group: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{\})</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a></span>
</h3>
<p>Returns a list with the names of variables of the given type. If a type is specified, it returns only the variables of that type. If no type is specified, it returns all variables. If no variables are found, it returns an empty array.</p>
<hr/>

<h3 id="get-types-dropdown-method">
  <span class="reference-type">func </span><code>get_types_dropdown</code><span class="parameters">(label: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = true, excluded: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>[<a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>] = [])</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_optionbutton.html">OptionButton</a></span>
</h3>
<p>Returns an OptionButton component with all the variable types that can be selected. You can hide the label text by setting `label` to false. Also, you can exclude types by passing their names in the `excluded` array.</p>
<hr/>

<h3 id="new-field-by-type-method">
  <span class="reference-type">func </span><code>new_field_by_type</code><span class="parameters">(type: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>, init_value: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a> = null,
	property_data: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = {}, on_value_changed: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_callable.html">Callable</a> = func(value, type, field): return , on_modified_callable: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_callable.html">Callable</a> = func(): return)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>Create a new field based on the variable type. Returns a dictionary with the field created and its default value. You can pass an initial value and property data for hints. Also, you can pass callables for when the value changes or when the field is modified.</p>
<hr/>

<h3 id="set-field-value-method">
  <span class="reference-type">func </span><code>set_field_value</code><span class="parameters">(field: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_control.html">Control</a>, type: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>, value: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Sets a value in the given field based on its type.</p>
<hr/>

<h3 id="get-assignment-operators-method">
  <span class="reference-type">func </span><code>get_assignment_operators</code><span class="parameters">(type: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>Returns a list of assignment operators by type.</p>
<hr/>

<h3 id="get-comparison-operators-method">
  <span class="reference-type">func </span><code>get_comparison_operators</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>Returns all the comparison operators as a dictionary.</p>
<hr/>
