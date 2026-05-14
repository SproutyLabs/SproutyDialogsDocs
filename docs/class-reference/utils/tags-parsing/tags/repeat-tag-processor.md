---
sidebar_position: 4
---

# SproutyDialogsRepeatTagProcessor

**Inherits**: [SproutyDialogsTagProcessor](../tag-processor.md)

## Description

Defines how to process a repeat tag in dialogues. This processor duplicates the content inside the block tag a specified number of times.

The processor allows you to repeat dialogue text or other content without manually copying it multiple times. There is a safety limit (`MAX_TIMES = 10000`) to prevent system freezing from excessively high repeat values.

## Attributes

| Attribute | Description                                         |
| --------- | --------------------------------------------------- |
| `value`   | The number of times to repeat the content (integer) |

## Example

```
[repeat=3]Ha[/repeat]
```

This would produce: `HaHaHa`

## Constants

| Type  | Name      | Value |
| ----- | --------- | ----- |
| `int` | MAX_TIMES | 10000 |

The maximum number of times content can be repeated. If a higher value is specified, it will be capped at this limit and a warning will be issued.

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
<p>Returns <code>"repeat"</code>, the tag name this processor handles.</p>
<hr/>

<h3 id="is-block-method">
  <span class="reference-type">func </span><code>is_block</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a></span>
</h3>
<p>Returns <code>true</code>. The repeat tag is a block tag with opening and closing tags.</p>
<hr/>

<h3 id="transform-method">
  <span class="reference-type">func </span><code>transform</code><span class="parameters">(node: <a href="../tags-parser#astnode">ASTNode</a>, variable_manager: <a href="../../variable-manager">SproutyDialogsVariableManager</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>[<a href="../tags-parser#astnode">ASTNode</a>]</span>
</h3>
<p>Transforms the repeat tag by duplicating its content the specified number of times. The processor:</p>
<ul>
<li>Retrieves the repeat count from the <code>"value"</code> attribute</li>
<li>Caps the count at <code>MAX_TIMES</code> (10000) if a higher value is provided, issuing a warning to prevent system freezing</li>
<li>Duplicates each child node for the specified number of iterations</li>
<li>Updates the parent reference for duplicated nodes to maintain the AST structure</li>
<li>Returns an array containing all duplicated nodes</li>
</ul>
<p>The original tag node is freed after transformation. If the repeat count is 0 or invalid, an empty array is returned.</p>
<hr/>
