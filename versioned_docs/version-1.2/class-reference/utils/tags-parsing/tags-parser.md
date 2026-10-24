---
sidebar_position: 1
---

# SproutyDialogsTagsParser

**Inherits**: [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

## Description

Class that processes special tags from dialogues (such as speed, wait, if, etc).

This parser automatically registers [tag processors](tag-processor.md) from the `/tags` folder and creates an **Abstract Syntax Tree (AST)** representation of the dialogue text, which is then used to generate the final bbcode text and dialogue data.

## Properties

| Type                                                                               | Name        | Default |
| ---------------------------------------------------------------------------------- | ----------- | ------- |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)         | raw_text    | `""`    |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)         | bbcode_text | `""`    |
| [ASTNode](#astnode)                                                                | ast_root    | `null`  |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | dialog_data | `{}`    |

## Constructors

| Constructor                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [SproutyDialogsTagsParser](#tags-parser-constructor)(text: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), variable_manager: [SproutyDialogsVariableManager](../variable-manager.md)) |

## Constructor Descriptions

<h3 id="tags-parser-constructor">
  <code>SproutyDialogsTagsParser</code><span class="parameters">(text: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, variable_manager: <a href="../variable-manager">SproutyDialogsVariableManager</a>)</span>
</h3>
<p>Initializes a new instance of the tags parser with the given text and variable manager. This constructor scans the tags folder to register all available tag processors, parses variables in the text, constructs the AST, transforms it, and generates the final dialogue data.</p>
<hr/>

## Methods

| Return Type | Method                                                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| void        | [print_ast](#print-ast-method)(node: [ASTNode](#astnode), indent: [int](https://docs.godotengine.org/en/stable/classes/class_int.html) = 0) |

## Method Descriptions

<h3 id="print-ast-method">
  <span class="reference-type">func </span><code>print_ast</code><span class="parameters">(node: <a href="#astnode">ASTNode</a>, indent: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a> = 0)</span><span class="return-type"> -> void</span>
</h3>
<p>Prints the AST structure to the debug console for debugging purposes. Displays the tree hierarchy with proper indentation and shows node names, attributes, and text content.</p>
<hr/>

## Inner Classes

### ASTNode

Represents a node in the Abstract Syntax Tree. Each node can be either a text node containing plain text, or a tag node containing attributes and child nodes.

**Properties:**

- `name`: [String](https://docs.godotengine.org/en/stable/classes/class_string.html) - The name of the node (tag name or "text")
- `content`: [String](https://docs.godotengine.org/en/stable/classes/class_string.html) - The text content (only used for text nodes)
- `attributes`: [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) - Tag attributes as key-value pairs
- `children`: [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)[[ASTNode](#astnode)] - Child nodes
- `parent`: [ASTNode](#astnode) - Parent node reference

**Methods:**

- `_init(init_name: String)` - Creates a new AST node with the given name
- `add_child(child: ASTNode, pos: int = -1)` - Adds a child node at the specified position (or at the end if pos is -1)
- `get_all_children() -> Array[ASTNode]` - Recursively returns all descendant nodes in a flat array
- `free_self()` - Clears children and removes parent reference
- `free_tree()` - Recursively frees this node and all descendants

### ASTStack

A simple stack data structure used internally for managing the AST construction process. Allows pushing and popping AST nodes during parsing.

**Properties:**

- `items`: [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)[[ASTNode](#astnode)] - The stack items

**Methods:**

- `_init(init_items: Array[ASTNode] = [])` - Creates a new stack with optional initial items
- `push(item: ASTNode)` - Pushes a node onto the stack
- `pop() -> ASTNode` - Pops and returns the top node from the stack, or null if empty
- `back() -> ASTNode` - Returns the top node without removing it, or null if empty
- `size() -> int` - Returns the current number of items in the stack
