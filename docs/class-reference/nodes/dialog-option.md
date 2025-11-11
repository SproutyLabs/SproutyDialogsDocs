---
sidebar_position: 3
---

# DialogOption

**Inherits**: [Button](https://docs.godotengine.org/en/stable/classes/class_button.html)

## Description

Component that render a dialog option in a [DialogBox](/docs/class-reference/nodes/dialog-box) from Sprouty Dialogs plugin.

It extends the Button class to provide a clickable option in the dialog.

## Properties

| Type | Name | Default |
| ---- | ---- | ------- |
| [Label](https://docs.godotengine.org/en/stable/classes/class_label.html) | [text_display](#text-display-var) | null |
| [RichTextLabel](https://docs.godotengine.org/en/stable/classes/class_richtextlabel.html) | [rich_text_display](#rich-text-display-var) | null |
| [int](https://docs.godotengine.org/en/stable/classes/class_int.html) | [option_index](#option-index-var) | 0 |

## Methods

| Return Type | Method |
| ----------- | ------ |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html) | [get_text](#get-text-method)() |
| void | [set_text](#set-text-method)(text: [String](https://docs.godotengine.org/en/stable/classes/class_string.html)) |

## Signals

<h3 id="option-selected-signal">
  <span class="reference-type">signal </span><code>option_selected</code>
  <span class="parameters">(option_index: <a href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>)</span>
</h3>
<p>Emitted when the option is selected.</p>
<hr/>

## Property Descriptions

<h3 id="text-display-var">
  <span class="reference-type">var </span><code>text_display</code>
  <span class="default_value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_label.html">Label</a></span>
</h3>
<p>Label to display the option text (Optional). If you want to use a custom label, assign it to this variable. It should be a child of this node.</p>
<hr/>

<h3 id="rich-text-display-var">
  <span class="reference-type">var </span><code>rich_text_display</code>
  <span class="default_value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_richtextlabel.html">RichTextLabel</a></span>
</h3>
<p>RichTextLabel to display the option text (Optional). If you want to use a rich text label, assign it to this variable. It should be a child of this node.</p>
<hr/>

<h3 id="option-index-var">
  <span class="reference-type">var </span><code>option_index</code>
  <span class="default_value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a> = 0</span>
</h3>
<p>Index of the option in the dialog.</p>
<hr/>

## Method Descriptions

<h3 id="get-text-method">
  <span class="reference-type">func </span><code>get_text</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Return the text of the option.</p>
<hr/>

<h3 id="set-text-method">
  <span class="reference-type">func </span><code>set_text</code><span class="parameters">(text: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set the text of the option.</p>
<hr/>
