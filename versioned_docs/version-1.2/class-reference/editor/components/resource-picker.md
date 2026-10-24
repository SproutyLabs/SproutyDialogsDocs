---
sidebar_position: 11
---

# EditorSproutyDialogsResourcePicker

**Inherits**: [EditorResourcePicker](https://docs.godotengine.org/en/stable/classes/class_editorresourcepicker.html)

## Description

Component that allows to pick a dialogue, character or scene resource. Provides resource type filtering and recent file path tracking for convenient resource selection.

## Properties

| Type                                                                   | Name                                      | Default                    |
| ---------------------------------------------------------------------- | ----------------------------------------- | -------------------------- |
| [ResourceType](#resource-type-enum)                                    | [resource_type](#resource-type-var)       | `ResourceType.DIALOG_CHAR` |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html) | [only_icon](#only-icon-var)               | false                      |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html) | [add_clear_button](#add-clear-button-var) | false                      |

## Methods

| Return Type | Method                                                                                                                     |
| ----------- | -------------------------------------------------------------------------------------------------------------------------- |
| void        | [set_resource_type](#set-resource-type-method)(type: [int](https://docs.godotengine.org/en/stable/classes/class_int.html)) |

## Signals

<h3 id="resource-picked-signal">
  <span class="reference-type">signal </span><code>resource_picked</code>
  <span class="parameters">(res: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_resource.html">Resource</a>)</span>
</h3>
<p>Emitted when a resource is picked (changed). Use it instead of `resource_changed`.</p>
<hr/>

<h3 id="clear-pressed-signal">
  <span class="reference-type">signal </span><code>clear_pressed</code>
</h3>
<p>Emitted when the clear button is pressed.</p>
<hr/>

## Enumerations

<h3 id="resource-type-enum">
  <span class="reference-type">enum </span><code>ResourceType</code>
</h3>
<p>Resource types available for picking</p>

- <h4><a target="_blank" href="#resource-type-enum">ResourceType </a><code>DIALOG_CHAR</code> <span class="default-value"> = 0</span></h4>
  <p>Dialog or character resource</p>
- <h4><a target="_blank" href="#resource-type-enum">ResourceType </a><code>DIALOGUE</code> <span class="default-value"> = 1</span></h4>
  <p>Dialogue resource only</p>
- <h4><a target="_blank" href="#resource-type-enum">ResourceType </a><code>CHARACTER</code> <span class="default-value"> = 2</span></h4>
  <p>Character resource only</p>
- <h4><a target="_blank" href="#resource-type-enum">ResourceType </a><code>DIALOG_BOX</code> <span class="default-value"> = 3</span></h4>
  <p>Dialog box scene resource</p>
- <h4><a target="_blank" href="#resource-type-enum">ResourceType </a><code>PORTRAIT_SCENE</code> <span class="default-value"> = 4</span></h4>
  <p>Portrait scene resource</p>

<hr/>

## Property Descriptions

<h3 id="resource-type-var">
  <span class="reference-type">var </span><code>resource_type</code>
  <span class="default-value"> : <a target="_blank" href="#resource-type-enum">ResourceType</a> = ResourceType.DIALOG_CHAR</span>
</h3>
<p>Resource type to load. Determines which resource types are available for selection.</p>
<hr/>

<h3 id="only-icon-var">
  <span class="reference-type">var </span><code>only_icon</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = false</span>
</h3>
<p>If true, show the icon button without the arrow button.</p>
<hr/>

<h3 id="add-clear-button-var">
  <span class="reference-type">var </span><code>add_clear_button</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = false</span>
</h3>
<p>If true, a clear button will be added to the popup menu.</p>
<hr/>

## Method Descriptions

<h3 id="set-resource-type-method">
  <span class="reference-type">func </span><code>set_resource_type</code><span class="parameters">(type: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set the resource type to load. Updates the base type filter and dialog settings based on the selected resource type.</p>
<hr/>
