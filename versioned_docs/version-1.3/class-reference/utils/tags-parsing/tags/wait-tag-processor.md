---
sidebar_position: 2
---

# SproutyDialogsWaitTagProcessor

**Inherits**: [SproutyDialogsTagProcessor](../tag-processor.md)

## Description

Defines how to process a wait tag in dialogues. This processor inserts a fixed pause (in seconds) between characters during typewriter display. The typewriter waits before continuing with subsequent content.

This is an inline tag, so it doesn't have opening and closing variations.

## Example

```
Hello...[wait=1.5] how are you?
```

## Methods

| Return Type                                                                                                 | Method                                                                                                                                                                                                                                        |
| ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)                                  | [get_tag_name](#get-tag-name-method)()                                                                                                                                                                                                        |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)                                      | [is_block](#is-block-method)()                                                                                                                                                                                                                |
| [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)[[ASTNode](../tags-parser#astnode)] | [transform](#transform-method)(node: [ASTNode](../tags-parser#astnode), variable_manager: [SproutyDialogsVariableManager](../../variable-manager.md))                                                                                         |
| void                                                                                                        | [generate](#generate-method)(node: [ASTNode](../tags-parser#astnode), dict: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html), variable_manager: [SproutyDialogsVariableManager](../../variable-manager.md)) |

## Method Descriptions

<h3 id="get-tag-name-method">
  <span class="reference-type">func </span><code>get_tag_name</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Returns <code>"wait"</code>, the tag name this processor handles.</p>
<hr/>

<h3 id="is-block-method">
  <span class="reference-type">func </span><code>is_block</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a></span>
</h3>
<p>Returns <code>false</code>. The wait tag is an inline tag without closing pairs.</p>
<hr/>

<h3 id="transform-method">
  <span class="reference-type">func </span><code>transform</code><span class="parameters">(node: <a href="../tags-parser#astnode">ASTNode</a>, variable_manager: <a href="../../variable-manager">SproutyDialogsVariableManager</a>)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>[<a href="../tags-parser#astnode">ASTNode</a>]</span>
</h3>
<p>Transforms the wait tag by adding a zero-width space character as a child text node. This marks the position of the wait pause in the final text content without adding visible characters.</p>
<hr/>

<h3 id="generate-method">
  <span class="reference-type">func </span><code>generate</code><span class="parameters">(node: <a href="../tags-parser#astnode">ASTNode</a>, dict: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>, variable_manager: <a href="../../variable-manager">SproutyDialogsVariableManager</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Generates wait data for the dialogue. Parses the time attribute (in seconds) and adds it to the <code>dict["speed"]</code> array with the same start and end position, creating a pause in the typewriter effect.</p>
<p>Only positive float values are accepted. Invalid values are treated as zero.</p>
<hr/>
