---
sidebar_position: 1
---

# SproutyDialogsSpeedTagProcessor

**Inherits**: [SproutyDialogsTagProcessor](../tag-processor.md)

## Description

Defines how to process a typing speed tag in dialogues. This processor allows changing the typing speed at which dialogue text is displayed.

The tag supports two speed attribute formats:

- **Absolute speed**: `[speed=0.03]` — Sets the time (in seconds) taken to display each character. Larger values slow down the typing.
- **Relative speed**: `[speed=2x]` — A multiplier relative to the default typing speed configured in settings. Larger values make typing faster (shorter character intervals).

## Example

```
[speed=2x]This text appears twice as fast.[/speed]
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
<p>Returns <code>"speed"</code>, the tag name this processor handles.</p>
<hr/>

<h3 id="is-block-method">
  <span class="reference-type">func </span><code>is_block</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a></span>
</h3>
<p>Returns <code>true</code>. The speed tag is a block tag with opening and closing tags.</p>
<hr/>

<h3 id="generate-method">
  <span class="reference-type">func </span><code>generate</code><span class="parameters">(node: <a href="../tags-parser#astnode">ASTNode</a>, dict: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>, variable_manager: <a href="../../variable-manager">SproutyDialogsVariableManager</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Generates speed data for the dialogue. Parses the speed attribute and adds speed information to the <code>dict["speed"]</code> array, specifying the character range and the speed value for typewriter effect.</p>
<p>The speed value is calculated based on the attribute format:</p>
<ul>
<li>For relative speeds (e.g., "2x"), divides the default typing speed by the multiplier</li>
<li>For absolute speeds, uses the value directly as seconds per character</li>
</ul>
<hr/>
