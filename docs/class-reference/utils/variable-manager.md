---
sidebar_position: 3
---

# SproutyDialogsVariableManager

**Inherits**: [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

## Description

This class manages the variables in the Sprouty Dialogs plugin. It provides methods to get, set, check, load and save variables.

Also provides methods to parse variables in strings, get the UI fields and components needed to edit them in the editor, and to get the assignment and comparison operators available for each variable type.

## Enumerations

<h3 id="assign-ops-enum">
  <span class="reference-type">enum </span><code>ASSIGN_OPS</code>
</h3>
<p>Assignment operators for variables</p>

- <h4><span class="reference-type">ASSIGN_OPS </span><code>ASSIGN</code> <span class="default_value"> = 0</span></h4>
  <p>Direct assignment operator (=)</p>
- <h4><span class="reference-type">ASSIGN_OPS </span><code>ADD_ASSIGN</code> <span class="default_value"> = 1</span></h4>
  <p>Addition assignment operator (+=)</p>
- <h4><span class="reference-type">ASSIGN_OPS </span><code>SUB_ASSIGN</code> <span class="default_value"> = 2</span></h4>
  <p>Subtraction assignment operator (-=)</p>
- <h4><span class="reference-type">ASSIGN_OPS </span><code>MUL_ASSIGN</code> <span class="default_value"> = 3</span></h4>
  <p>Multiplication assignment operator (*=)</p>
- <h4><span class="reference-type">ASSIGN_OPS </span><code>DIV_ASSIGN</code> <span class="default_value"> = 4</span></h4>
  <p>Division assignment operator (/=)</p>
- <h4><span class="reference-type">ASSIGN_OPS </span><code>EXP_ASSIGN</code> <span class="default_value"> = 5</span></h4>
  <p>Exponentiation assignment operator (**=)</p>
- <h4><span class="reference-type">ASSIGN_OPS </span><code>MOD_ASSIGN</code> <span class="default_value"> = 6</span></h4>
  <p>Modulus assignment operator (%=)</p>

<hr/>

## Methods

| Return Type                                                                        | Method                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| void                                                                               | [set_root_reference](#set-root-reference-method)(root: [Node](https://docs.godotengine.org/en/stable/classes/class_node.html))                                                                                                   |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [get_variables](#get-variables-method)()                                                                                                                                                                                         |
| [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)           | [get_variable_list](#get-variable-list-method)(type: [int](https://docs.godotengine.org/en/stable/classes/class_int.html) = -1, group: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) =\{\}) |
| [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html)       | [get_variable](#get-variable-method)(name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                                           |
| void                                                                               | [set_variable](#set-variable-method)(name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), value: [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html))                      |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)             | [has_variable](#has-variable-method)(name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), group: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) = \{\})         |
| void                                                                               | [load_variables](#load-variables-method)()                                                                                                                                                                                       |
| void                                                                               | [save_variables](#save-variables-method)(data: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html))                                                                                               |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)         | [parse_variables](#parse-variables-method)(text: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), ignore_error: [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html) = false)       |

## Method Descriptions

<h3 id="set-root-reference-method">
  <span class="reference-type">func </span><code>set_root_reference</code><span class="parameters">(root: <a href="https://docs.godotengine.org/en/stable/classes/class_node.html">Node</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Sets the root reference for the Variable Manager. This is used to access autoloads and other global nodes. <span class="alert-text">It should be called ONLY in the _ready() function of the SproutyDialogsManager.</span></p>
<hr/>

<h3 id="get-variables-method">
  <span class="reference-type">func </span><code>get_variables</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>Returns variables as a dictionary. If the variables are not loaded, it will load them from [project settings](https://docs.godotengine.org/en/stable/classes/class_projectsettings.html).</p>
<hr/>

<h3 id="get-variable-list-method">
  <span class="reference-type">func </span><code>get_variable_list</code><span class="parameters">(type: <a href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a> = -1, group: <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{\})</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a></span>
</h3>
<p>Returns a list of the variable names. If a type is specified, it returns only the variables of that type. If no type is specified, it returns all variables. If no variables are found, it returns an empty array.</p>
<hr/>

<h3 id="get-variable-method">
  <span class="reference-type">func </span><code>get_variable</code><span class="parameters">(name: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a></span>
</h3>
<p>Get a variable from the Variables Manager or from the autoloads. If the variable is found, it returns a dictionary with the variable name, type and value. If the variable does not exist, it returns null.</p>
<hr/>

<h3 id="set-variable-method">
  <span class="reference-type">func </span><code>set_variable</code><span class="parameters">(name: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, value: <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set or update a variable in the Variables Manager or in the autoloads. The variable must already exist in the Variables Manager or in the autoloads.</p>
<hr/>

<h3 id="has-variable-method">
  <span class="reference-type">func </span><code>has_variable</code><span class="parameters">(name: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, group: <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{\})</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a></span>
</h3>
<p>Check if a variable exists.</p>
<hr/>

<h3 id="load-variables-method">
  <span class="reference-type">func </span><code>load_variables</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Load variables from project settings.</p>
<hr/>

<h3 id="save-variables-method">
  <span class="reference-type">func </span><code>save_variables</code><span class="parameters">(data: <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Save variables to project settings.</p>
<hr/>

<h3 id="parse-variables-method">
  <span class="reference-type">func </span><code>parse_variables</code><span class="parameters">(text: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, ignore_error: <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = false)</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Replaces all variables (&#123;&#125;) in a text with their corresponding values.</p>
<hr/>
