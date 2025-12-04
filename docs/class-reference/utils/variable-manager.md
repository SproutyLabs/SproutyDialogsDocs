---
sidebar_position: 3
---

# SproutyDialogsVariableManager

**Inherits**: [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

## Description

This class manages the variables in the Sprouty Dialogs plugin. It provides methods to get, set, check, parse variables in strings and get assigment and comparision operations results.

:::info[Important]

This manager is used at runtime as an internal singleton to handle variables. **You shouldn't instantiate this class directly. Instead, access the singleton through the [Sprouty Dialogs autoload](/docs/class-reference/core/sprouty-dialogs-manager.md).**

:::

## Methods

| Return Type                                                                        | Method                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| void                                                                               | [get_variables_data](#get-variables-data-method)()                                                                                                                                                                                                                                                                                                                                               |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [get_variable_data](#get-variable-data-method)(name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html"))                                                                                                                                                                                                                                                                |
| [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html)       | [get_variable](#get-variable-method)(name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                                                                                                                                                                                                           |
| void                                                                               | [set_variable](#set-variable-method)(name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), value: [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html))                                                                                                                                                                                      |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)             | [has_variable](#has-variable-method)(name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                                                                                                                                                                                                           |
| [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)           | [get_variables_in_group](#get-variables-in-group-method)(group_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                                                                                                                                                                                 |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)             | [is_variable_in_group](#is-variable-in-group-method)(variable_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), group_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                                                                                          |
| void                                                                               | [reset_variable](#reset-variable-method)(name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html) = "")                                                                                                                                                                                                                                                                  |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)         | [parse_variables](#parse-variables-method)(text: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), ignore_error: [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html) = false)                                                                                                                                                                       |
| [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html)       | [get_assignment_result](#get-assignment-result-method)(type: [int](https://docs.godotengine.org/en/stable/classes/class_int.html), operator: [int](https://docs.godotengine.org/en/stable/classes/class_int.html), value: [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html), new_value: [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html)) |
| [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html)       | [get_comparision_result](#get-assignment-result-method)(first_var: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html), second_var: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html), operator: [int](https://docs.godotengine.org/en/stable/classes/class_int.html))                                                           |

## Method Descriptions

<h3 id="get-variables-data-method">
  <span class="reference-type">func </span><code>get_variables_data</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>Returns all the variables data as a dictionary. If the variables are not loaded, it will load them from [project settings](https://docs.godotengine.org/en/stable/classes/class_projectsettings.html).</p>
<hr/>

<h3 id="get-variable-data-method">
  <span class="reference-type">func </span><code>get_variable_data</code><span class="parameters">(name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>Get the data of a variable defined in the variable editor or from the autoloads. If the variable is found, it returns a dictionary with its data. If the variable does not exist, it returns an empty dictionary.</p>
<hr/>

<h3 id="get-variable-method">
  <span class="reference-type">func </span><code>get_variable</code><span class="parameters">(name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a></span>
</h3>
<p>Get the value of a variable defined in the variable editor or from the autoloads. If the variable is found, it returns a dictionary with its data. If the variable does not exist, it returns null.</p>
<hr/>

<h3 id="set-variable-method">
  <span class="reference-type">func </span><code>set_variable</code><span class="parameters">(name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, value: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set or update the value of a variable defined in the variable editor or from the autoloads.</p>
<hr/>

<h3 id="has-variable-method">
  <span class="reference-type">func </span><code>has_variable</code><span class="parameters">(name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a></span>
</h3>
<p>Check if a variable exists in the variable editor or in the autoloads.</p>
<hr/>

<h3 id="get-variables-in-group-method">
  <span class="reference-type">func </span><code>get_variables_in_group</code><span class="parameters">(group_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a></span>
</h3>
<p>Retuns a list with the names of the variables in a group. If no group is especified, return the top-level variables.</p>
<hr/>

<h3 id="is-variable-in-group-method">
  <span class="reference-type">func </span><code>is_variable_in_group</code><span class="parameters">(variable_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, group_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a></span>
</h3>
<p>Check if a variable is in a given group.</p>
<hr/>

<h3 id="reset-variable-method">
  <span class="reference-type">func </span><code>reset_variable</code><span class="parameters">(name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = "")</span><span class="return-type"> -> void</span>
</h3>
<p>Reset a variable to its initial value. If no variable is specified, reset all variables. This method only resets variables defined in the variable editor, you **cannot reset variables from autoloads** here.</p>
<hr/>

<h3 id="parse-variables-method">
  <span class="reference-type">func </span><code>parse_variables</code><span class="parameters">(text: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, ignore_error: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = false)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Replaces all variables (&#123;&#125;) in a text with their corresponding values.</p>
<hr/>

<h3 id="get-assignment-result-method">
  <span class="reference-type">func </span><code>get_assignment_result</code><span class="parameters">(type: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>, operator: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>, value: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a>, new_value: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a></span>
</h3>
<p>Returns the value resulting from an assignment operation.</p>
<hr/>

<h3 id="get-comparision-result-method">
  <span class="reference-type">func </span><code>get_comparison_result</code><span class="parameters">(first_var: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>, second_var: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>, operator: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a></span>
</h3>
<p>Returns the result of comparing two values based on the specified operator.</p>
<hr/>
