---
sidebar_position: 5
---

# SproutyDialogsAutoTagProcessor

**Inherits**: [SproutyDialogsTagProcessor](../tag-processor.md)

## Description

Defines how to process an auto tag in dialogues. This processor enables or disables the auto-advance feature, which automatically advances the dialogue after a specified time (in seconds), without requiring user input.

By default, the auto-advance delay is taken from the advance delay setting configured in the Sprouty Dialogs settings, but you can override it.

This is an inline tag, so it doesn't have opening and closing variations. **You can use it to enable/disable auto-advance across different dialogue node events.**

## Attributes

| Attribute | Description                                                                                                                         |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `value`   | `[auto=true]` or `[auto=false]`: enable or disable the auto-advance feature. If no value is provided, it will be enabled by default |
| `delay`   | `[auto delay=0.5]`: specify a custom time in seconds for the auto-advance delay                                                     |

## Example

```
Hello...[auto delay=0.5] how are you?
I'm fine, thanks! [auto=false] Let's continue the conversation.
```

With `[auto delay=0.5]`, the dialogue automatically advances after the specified delay. With `[auto=false]`, auto-advance is disabled.

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
<p>Returns <code>"auto"</code>, the tag name this processor handles.</p>
<hr/>

<h3 id="is-block-method">
  <span class="reference-type">func </span><code>is_block</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a></span>
</h3>
<p>Returns <code>false</code>. The auto tag is an inline tag without closing pairs.</p>
<hr/>

<h3 id="generate-method">
  <span class="reference-type">func </span><code>generate</code><span class="parameters">(node: <a href="../tags-parser#astnode">ASTNode</a>, dict: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>, variable_manager: <a href="../../variable-manager">SproutyDialogsVariableManager</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Generates the auto-advance configuration for the dialogue. Reads the <code>value</code> attribute and the optional <code>delay</code> attribute and stores them in the <code>dict["auto"]</code> dictionary:</p>
<ul>
<li><code>enabled</code> — whether auto-advance is enabled (<code>true</code> by default, or <code>false</code> when the tag is used as <code>[auto=false]</code>)</li>
<li><code>delay</code> — the auto-advance delay in seconds (<code>float</code>); only valid non-negative values are accepted, otherwise it is set to <code>null</code> and the default advance delay from settings is used</li>
</ul>
<hr/>
