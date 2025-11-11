---
sidebar_position: 4
---

# DialogPortrait

<span class="abstract-class-label">Abstract Class</span>

**Inherits**: [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

## Description

Abstract class for dialog portraits from Sprouty Dialogs plugin.

It provides the basic methods to handle the portrait behavior during a dialog.

You should inherit from this class to create your own dialog portraits.

## Methods

| Return Type | Method                                                         |
| ----------- | -------------------------------------------------------------- |
| void        | [set_portrait](#set-portrait-method)()                         |
| void        | [on_portrait_entry](#on-portrait-entry-method)()               |
| void        | [on_portrait_exit](#on-portrait-exit-method)()                 |
| void        | [on_portrait_talk](#on-portrait-talk-method)()                 |
| void        | [on_portrait_stop_talking](#on-portrait-stop-talking-method)() |
| void        | [highlight_portrait](#highlight-portrait-method)()             |
| void        | [unhighlight_portrait](#unhighlight-portrait-method)()         |

## Method Descriptions

<h3 id="set-portrait-method">
  <span class="reference-type">func </span><code>set_portrait</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Override this method to set up the portrait initially. This is called when the portrait is instantiated or changed.</p>
<hr/>

<h3 id="on-portrait-entry-method">
  <span class="reference-type">func </span><code>on_portrait_entry</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Override this method to update the portrait when character enters the scene. This is called when the character is added to the scene.</p>
<hr/>

<h3 id="on-portrait-exit-method">
  <span class="reference-type">func </span><code>on_portrait_exit</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Override this method to update the portrait when character exits the scene. This is called when the character is removed from the scene.</p>
<hr/>

<h3 id="on-portrait-talk-method">
  <span class="reference-type">func </span><code>on_portrait_talk</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Override this method to update the portrait when the character starts talking. This is called when the typing of the dialog starts.</p>
<hr/>

<h3 id="on-portrait-stop-talking-method">
  <span class="reference-type">func </span><code>on_portrait_stop_talking</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Override this method to update the portrait when the character stops talking. This is called when the typing of the dialog is finished.</p>
<hr/>

<h3 id="highlight-portrait-method">
  <span class="reference-type">func </span><code>highlight_portrait</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Override this method to update the portrait when the character is active in the dialog, but is not currently talking (e.g. waiting for user input, joins without dialog). This is called when the character is active but not currently talking.</p>
<hr/>

<h3 id="unhighlight-portrait-method">
  <span class="reference-type">func </span><code>unhighlight_portrait</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Override this method to update the portrait when the character becomes inactive in the dialog (e.g. when the speaker is changed to another character). This is called when the character becomes inactive in the dialog.</p>
<hr/>
