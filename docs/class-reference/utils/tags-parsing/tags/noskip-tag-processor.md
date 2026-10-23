---
sidebar_position: 6
---

# SproutyDialogsNoSkipTagProcessor

**Inherits**: [SproutyDialogsTagProcessor](../tag-processor.md)

## Description

Defines how to process a noskip tag in dialogues. This processor disables the text reveal skip feature, which allows the player to skip the text reveal animation and instantly display the full text.

This is an inline tag, so it doesn't have opening and closing variations. You can use it to disable/enable text reveal skipping across different dialogue node events.

## Attributes

| Attribute | Description                                                                                                             |
| --------- | ----------------------------------------------------------------------------------------------------------------------- |
| `value`   | Whether to disable skipping (`true`) or allow it again (`false`). If no value is provided, it will be `true` by default |

## Example

```
Pay attention to each word! [noskip]
This is the secret of the universe (...)
[noskip=false] Now you can skip the text reveal animation.
```

## Methods

| Return Type                                                                | Method                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html) | [get_tag_name](#get-tag-name-method)()                                                                                                                                                                                                        |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)     | [is_block](#is-block-method)()                                                                                                                                                                                                                |
| void                                                                       | [generate](#generate-method)(node: [ASTNode](../tags-parser#astnode), dict: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html), variable_manager: [SproutyDialogsVariableManager](../../variable-manager.md)) |

## Method Descriptions

<h3 id="get-tag-name-method">
  <span class="reference-type">func </span><code>get_tag_name</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Returns <code>"noskip"</code>, the tag name this processor handles.</p>
<hr/>

<h3 id="is-block-method">
  <span class="reference-type">func </span><code>is_block</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a></span>
</h3>
<p>Returns <code>false</code>. The noskip tag is an inline tag without closing pairs.</p>
<hr/>

<h3 id="generate-method">
  <span class="reference-type">func </span><code>generate</code><span class="parameters">(node: <a href="../tags-parser#astnode">ASTNode</a>, dict: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>, variable_manager: <a href="../../variable-manager">SproutyDialogsVariableManager</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Generates the no-skip configuration for the dialogue. Reads the <code>value</code> attribute and stores the result in <code>dict["noskip"]</code>: <code>true</code> by default (skipping is disabled), or <code>false</code> when the tag is used as <code>[noskip=false]</code> (skipping is allowed again).</p>
<hr/>
