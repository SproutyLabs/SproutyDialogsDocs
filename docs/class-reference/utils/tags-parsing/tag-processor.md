---
sidebar_position: 2
---

# SproutyDialogsTagProcessor

<span class="abstract-class-label">Abstract Class</span>

**Inherits**: [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

## Description

Abstract base class that defines how to process special tags in dialogues. All custom tag processors must extend this class and implement its abstract methods. Tag processors are automatically discovered and registered by [SproutyDialogsTagsParser](tags-parser.md) from a designated tags folder.

A tag processor has two primary responsibilities:

1. **Transform phase**: Transform an AST node into zero or more AST nodes for subsequent processing
2. **Generate phase**: Generate runtime output or side-effects from the node

## Methods

| Return Type                                                                                              | Method                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)                               | [get_tag_name](#get-tag-name-method)() <span class="abstract-method-label">(abstract)</span>                                                                                                                  |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)                                   | [is_block](#is-block-method)() <span class="abstract-method-label">(abstract)</span>                                                                                                                          |
| [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)[[ASTNode](tags-parser#astnode)] | [transform](#transform-method)(node: [ASTNode](tags-parser#astnode), variable_manager: SproutyDialogsVariableManager)                                                                                         |
| void                                                                                                     | [generate](#generate-method)(node: [ASTNode](tags-parser#astnode), dict: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html), variable_manager: SproutyDialogsVariableManager) |

## Method Descriptions

<h3 id="get-tag-name-method">
  <span class="reference-type">func </span><code>get_tag_name</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span> <span class="abstract-method-label"> (abstract)</span>
</h3>
<p>Returns the tag name that this processor handles. This name is used to register the processor in the tag system and match it against tags found in dialogue text. For example, if this returns <code>"speed"</code>, this processor will handle <code>[speed]</code> and <code>[/speed]</code> tags.</p>
<hr/>

<h3 id="is-block-method">
  <span class="reference-type">func </span><code>is_block</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a></span> <span class="abstract-method-label"> (abstract)</span>
</h3>
<p>Determines whether this tag is a block tag (with opening and closing tags) or an inline tag. Return <code>true</code> if the tag is a block tag (e.g., <code>[speed]text[/speed]</code>), or <code>false</code> if it's an inline tag (e.g., <code>[wait=1.0]</code>).</p>
<hr/>

<h3 id="transform-method">
  <span class="reference-type">func </span><code>transform</code><span class="parameters">(node: <a href="tags-parser#astnode">ASTNode</a>, variable_manager: SproutyDialogsVariableManager)</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>[<a href="tags-parser#astnode">ASTNode</a>]</span>
</h3>
<p>Transforms an AST node into zero or more AST nodes for subsequent processing. This method is called during the AST transformation phase and allows processors to modify the structure of the syntax tree.</p>
<p>The default implementation returns the node unchanged. Concrete processors can override this method to:</p>
<ul>
<li>Return the same node (default behavior)</li>
<li>Return multiple nodes to expand a single node</li>
<li>Return an empty array to remove the node</li>
<li>Return modified versions of the node</li>
</ul>
<p><strong>Parameters:</strong></p>
<ul>
<li><code>node</code> — The AST node to transform</li>
<li><code>variable_manager</code> — Provides access to variable resolution and state</li>
</ul>
<p><strong>Returns:</strong> An array of AST nodes that will replace or augment the original node in the processing pipeline.</p>
<hr/>

<h3 id="generate-method">
  <span class="reference-type">func </span><code>generate</code><span class="parameters">(node: <a href="tags-parser#astnode">ASTNode</a>, dict: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a>, variable_manager: SproutyDialogsVariableManager)</span><span class="return-type"> -> void</span>
</h3>
<p>Generates runtime output or side-effects from the given AST node. This method is called during the final generation phase and is intended to produce runtime effects and may modify the provided <code>dict</code> in-place.</p>
<p>The <code>dict</code> parameter serves as both an input and output container for sharing generated values, state flags, and other metadata. The default implementation does nothing. Concrete processors should override this method to implement behavior that modifies the dialogue output.</p>
<p><strong>Parameters:</strong></p>
<ul>
<li><code>node</code> — The AST node to generate from</li>
<li><code>dict</code> — A mutable dictionary that the processor may read from and modify as an output/context container (e.g., to add generated text or state changes)</li>
<li><code>variable_manager</code> — Used to read/update variables required during generation</li>
</ul>
<p><strong>Returns:</strong> void (this method performs side-effects)</p>
<hr/>
