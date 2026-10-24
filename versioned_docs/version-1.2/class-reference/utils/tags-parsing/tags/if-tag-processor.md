---
sidebar_position: 3
---

# SproutyDialogsIfTagProcessor

**Inherits**: [SproutyDialogsTagProcessor](../tag-processor.md)

## Description

Defines how to process an if condition tag in dialogues. This processor shows or hides its content based on a variable comparison.

The processor evaluates a condition by comparing a variable's value against a specified value using a comparison operator. If the condition is true, the tag's content is included in the dialogue; otherwise, it's removed entirely.

## Attributes

| Attribute | Description                                                  |
| --------- | ------------------------------------------------------------ |
| `var`     | The name of the variable to compare                          |
| `op`      | The comparison operator (`eq`, `ne`, `gt`, `lt`, `ge`, `le`) |
| `val`     | The value against which the variable will be compared        |

## Example

```
[if var="score" op="gt" val="10"]You win![/if]
```

## Methods

| Return Type                                                                                                 | Method                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)                                  | [get_tag_name](#get-tag-name-method)()                                                                                                                |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)                                      | [is_block](#is-block-method)()                                                                                                                        |
| [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)[[ASTNode](../tags-parser#astnode)] | [transform](#transform-method)(node: [ASTNode](../tags-parser#astnode), variable_manager: [SproutyDialogsVariableManager](../../variable-manager.md)) |

## Method Descriptions

<h3 id="get-tag-name-method">
  <span class="reference-type">func </span><code>get_tag_name</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Returns <code>"if"</code>, the tag name this processor handles.</p>
<hr/>

<h3 id="is-block-method">
  <span class="reference-type">func </span><code>is_block</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a></span>
</h3>
<p>Returns <code>true</code>. The if tag is a block tag with opening and closing tags.</p>
<hr/>

<h3 id="transform-method">
  <span class="reference-type">func </span><code>transform</code><span class="parameters">(node: <a href="../tags-parser#astnode">ASTNode</a>, variable_manager: <a href="../../variable-manager">SproutyDialogsVariableManager</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>[<a href="../tags-parser#astnode">ASTNode</a>]</span>
</h3>
<p>Transforms the if tag by evaluating the condition during AST construction. The processor:</p>
<ul>
<li>Retrieves the variable using its name from the attributes</li>
<li>Converts the comparison value to the variable's type (bool, int, float, or string)</li>
<li>Evaluates the condition using the specified operator</li>
<li>If the condition is <code>true</code>, returns the tag's children (content is included)</li>
<li>If the condition is <code>false</code>, frees the entire node and returns an empty array (content is removed)</li>
</ul>
<p><strong>Supported operators:</strong></p>
<ul>
<li><code>eq</code> — Equal to (==)</li>
<li><code>ne</code> — Not equal to (!=)</li>
<li><code>lt</code> — Less than (\<)</li>
<li><code>gt</code> — Greater than (>)</li>
<li><code>le</code> — Less than or equal to (\<=)</li>
<li><code>ge</code> — Greater than or equal to (>=)</li>
</ul>
<hr/>
