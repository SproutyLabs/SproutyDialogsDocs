---
sidebar_position: 2
---

# DialogBox

**Inherits**: [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

## Description

Node that displays dialogue text on screen. Provides basic functionality for displaying text with writing effects, character names, portraits, and options.

You can customize your own dialog boxes nodes and extend their functionality by inheriting from this class.

:::info[Important]

**You should not use this node directly to play a dialogue.** You should use a [DialogPlayer](/docs/class-reference/nodes/dialog-player) node to play dialogues, which will process it and use a [DialogBox]() to display it.

:::

## Properties

| Type                                                                                     | Name                                          | Default                              |
| ---------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------ |
| [float](https://docs.godotengine.org/en/stable/classes/class_float.html)                 | [typing_speed](#typing-speed-var)             | `default_typing_speed` from settings |
| [int](https://docs.godotengine.org/en/stable/classes/class_int.html)                     | [max_characters](#max-characters-var)         | `max_characters` from settings       |
| [RichTextLabel](https://docs.godotengine.org/en/stable/classes/class_richtextlabel.html) | [dialog_display](#dialog-display-var)         | null                                 |
| [RichTextLabel](https://docs.godotengine.org/en/stable/classes/class_richtextlabel.html) | [name_display](#name-display-var)             | null                                 |
| [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)             | [continue_indicator](#continue-indicator-var) | null                                 |
| [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)                   | [portrait_display](#portrait-display-var)     | null                                 |
| [Container](https://docs.godotengine.org/en/stable/classes/class_container.html)         | [options_container](#options-container-var)   | null                                 |
| [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)             | [option_template](#option-template-var)       | null                                 |

## Methods

| Return Type                                                            | Method                                                                                                                                                                                                                                                                                                       |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| void                                                                   | [\_on_dialog_box_start](#on-dialog-box-start-method)() <span class="virtual-method-label"> (virtual)</span>                                                                                                                                                                                                  |
| void                                                                   | [\_on_dialog_box_close](#on-dialog-box-close-method)() <span class="virtual-method-label"> (virtual)</span>                                                                                                                                                                                                  |
| void                                                                   | [\_on_options_displayed](#on-options-displayed-method)() <span class="virtual-method-label"> (virtual)</span>                                                                                                                                                                                                |
| void                                                                   | [\_on_options_hidden](#on-options-hidden-method)() <span class="virtual-method-label"> (virtual)</span>                                                                                                                                                                                                      |
| void                                                                   | [play_dialog](#play-dialog-method)(character_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), display_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), dialog: [String](https://docs.godotengine.org/en/stable/classes/class_string.html)) |
| void                                                                   | [pause_dialog](#pause-dialog-method)()                                                                                                                                                                                                                                                                       |
| void                                                                   | [resume_dialog](#resume-dialog-method)()                                                                                                                                                                                                                                                                     |
| void                                                                   | [stop_dialog](#stop-dialog-method)(close_dialog: [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html) = false)                                                                                                                                                                             |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html) | [is_displaying_portrait](#is-displaying-portrait-method)()                                                                                                                                                                                                                                                   |
| void                                                                   | [display_portrait](#display-portrait-method)(character_parent: [Node](https://docs.godotengine.org/en/stable/classes/class_node.html), portrait_node: [Node](https://docs.godotengine.org/en/stable/classes/class_node.html))                                                                                |
| void                                                                   | [display_options](#display-options-method)(options: [Array](https://docs.godotengine.org/en/stable/classes/class_array.html))                                                                                                                                                                                |
| void                                                                   | [hide_options](#hide-options-method)()                                                                                                                                                                                                                                                                       |

## Signals

<h3 id="dialog-starts-signal">
  <span class="reference-type">signal </span><code>dialog_starts</code>
  <span class="parameters">(character_name: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when the dialog is started.</p>
<hr/>

<h3 id="dialog-typing-ends-signal">
  <span class="reference-type">signal </span><code>dialog_typing_ends</code>
  <span class="parameters">(character_name: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when the dialog ends typing.</p>
<hr/>

<h3 id="dialog-ends-signal">
  <span class="reference-type">signal </span><code>dialog_ends</code>
  <span class="parameters">(character_name: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when the dialog is ended.</p>
<hr/>

<h3 id="continue-dialog-signal">
  <span class="reference-type">signal </span><code>continue_dialog</code>
</h3>
<p>Emitted when the player press the continue button to continue the dialog tree.</p>
<hr/>

<h3 id="meta-clicked-signal">
  <span class="reference-type">signal </span><code>meta_clicked</code>
  <span class="parameters">(meta: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when a meta tag is clicked in the dialog.</p>
<hr/>

<h3 id="option-selected-signal">
  <span class="reference-type">signal </span><code>option_selected</code>
  <span class="parameters">(option_index: <a href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>)</span>
</h3>
<p>Emitted when the player selects an option.</p>
<hr/>

## Property Descriptions

<h3 id="typing-speed-var">
  <span class="reference-type">var </span><code>typing_speed</code>
  <span class="default_value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_float.html">float</a></span>
</h3>
<p>Typing speed of the dialog text in seconds.</p>
<hr/>

<h3 id="max-characters-var">
  <span class="reference-type">var </span><code>max_characters</code>
  <span class="default_value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a></span>
</h3>
<p>Maximum number of characters to be displayed in the dialog box. The dialogue will be split according to this limit and displayed in parts if the `split_dialog_by_max_characters` setting is active.</p>
<hr/>

<h3 id="dialog-display-var">
  <span class="reference-type">var </span><code>dialog_display</code>
  <span class="default_value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_richtextlabel.html">RichTextLabel</a></span> <span class="alert-text"> *</span>
</h3>
<p>[RichTextLabel](https://docs.godotengine.org/en/stable/classes/class_richtextlabel.html) where dialogue will be displayed. <b class="alert-text">This component is required to display the dialogue text in it.</b></p>
<hr/>

<h3 id="name-display-var">
  <span class="reference-type">var </span><code>name_display</code>
  <span class="default_value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_richtextlabel.html">RichTextLabel</a></span>
</h3>
<p>[RichTextLabel](https://docs.godotengine.org/en/stable/classes/class_richtextlabel.html) where character name will be displayed. <b>If you want to display the character name in the dialog box, you need to set this property.</b></p>

<hr/>

<h3 id="continue-indicator-var">
  <span class="reference-type">var </span><code>continue_indicator</code>
  <span class="default_value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_control.html">Control</a></span>
</h3>
<p>Visual indicator to indicate press for continue the dialogue (e.g. an arrow). <b>If you want to display a continue indicator in the dialog box, you need to set this property.</b></p>

<hr/>

<h3 id="portrait-display-var">
  <span class="reference-type">var </span><code>portrait_display</code>
  <span class="default_value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_node.html">Node</a></span>
</h3>
<p>Node where the character portrait will be displayed (parent node). <b>If you want to display the portrait in the dialog box, you need to set this property.</b></p>

<hr/>

<h3 id="options-container-var">
  <span class="reference-type">var </span><code>options_container</code>
  <span class="default_value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_container.html">Container</a></span> <span class="alert-text"> *</span>
</h3>
<p>Container where the options will be displayed in the dialog box. It is recommended to use a [VBoxContainer](https://docs.godotengine.org/es/4.x/classes/class_vboxcontainer.html) or [GridContainer](https://docs.godotengine.org/es/4.x/classes/class_gridcontainer.html) to display the options. <b class="alert-text">This component is required to display the dialog options in it.</b></p>

<hr/>

<h3 id="option-template-var">
  <span class="reference-type">var </span><code>option_template</code>
  <span class="default_value"> : <a href="https://docs.godotengine.org/en/stable/classes/class_control.html">Control</a></span> <span class="alert-text"> *</span>
</h3>
<p>Node that will be used as a template for the options in the dialog box. It should be a <a href="/docs/class-reference/nodes/dialog-option">DialogOption</a> node or another node that extends it. <b class="alert-text">This component is required to display the dialog options.</b></p>

<hr/>

## Method Descriptions

<h3 id="on-dialog-box-start-method">
  <span class="reference-type">func </span><code>_on_dialog_box_start</code><span class="parameters">()</span><span class="return-type"> -> void</span> <span class="virtual-method-label"> (virtual)</span>
</h3>
<p>Called when the dialog box starts at the beginning of the dialog. <b>Override this method to customize the behavior of the dialog box when starts.</b></p>
<hr/>

<h3 id="on-dialog-box-close-method">
  <span class="reference-type">func </span><code>_on_dialog_box_close</code><span class="parameters">()</span><span class="return-type"> -> void</span> <span class="virtual-method-label"> (virtual)</span>
</h3>
<p> Called when the dialog box when is closed at the end of the dialog. <b>Override this method to customize the behavior of the dialog box when is closed.</b></p>
<hr/>

<h3 id="on-options-displayed-method">
  <span class="reference-type">func </span><code>_on_options_displayed</code><span class="parameters">()</span><span class="return-type"> -> void</span> <span class="virtual-method-label"> (virtual)</span>
</h3>
<p>Called when the dialog options are displayed. <b>Override this method to customize the behavior of the dialog box when options are displayed.</b></p>
<hr/>

<h3 id="on-options-hidden-method">
  <span class="reference-type">func </span><code>_on_options_hidden</code><span class="parameters">()</span><span class="return-type"> -> void</span> <span class="virtual-method-label"> (virtual)</span>
</h3>
<p> Called when the dialog options are hidden. <b>Override this method to customize the behavior of the dialog box when options are hidden.</b></p>
<hr/>

<h3 id="play-dialog-method">
  <span class="reference-type">func </span><code>play_dialog</code><span class="parameters">(character_name: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, display_name: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, dialog: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Play a dialog on dialog box. Displays the character name and dialog text with typing animation.</p>
<hr/>

<h3 id="pause-dialog-method">
  <span class="reference-type">func </span><code>pause_dialog</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Pause the dialog.</p>
<hr/>

<h3 id="resume-dialog-method">
  <span class="reference-type">func </span><code>resume_dialog</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Resume the dialog.</p>
<hr/>

<h3 id="stop-dialog-method">
  <span class="reference-type">func </span><code>stop_dialog</code><span class="parameters">(close_dialog: <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = false)</span><span class="return-type"> -> void</span>
</h3>
<p>Stop the dialog. If `close_dialog` is true, the dialog box will be closed.</p>
<hr/>

<h3 id="is-displaying-portrait-method">
  <span class="reference-type">func </span><code>is_displaying_portrait</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a></span>
</h3>
<p>Return if the dialog box is displaying a portrait.</p>
<hr/>

<h3 id="display-portrait-method">
  <span class="reference-type">func </span><code>display_portrait</code><span class="parameters">(character_parent: <a href="https://docs.godotengine.org/en/stable/classes/class_node.html">Node</a>, portrait_node: <a href="https://docs.godotengine.org/en/stable/classes/class_node.html">Node</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set a portrait to be displayed in the dialog box.</p>
<hr/>

<h3 id="display-options-method">
  <span class="reference-type">func </span><code>display_options</code><span class="parameters">(options: <a href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Display the dialog options.</p>
<hr/>

<h3 id="hide-options-method">
  <span class="reference-type">func </span><code>hide_options</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Hide the dialog options.</p>
<hr/>
