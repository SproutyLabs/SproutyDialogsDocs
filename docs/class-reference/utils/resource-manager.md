---
sidebar_position: 2
---

# SproutyDialogsResourceManager

**Inherits**: [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

## Description

This class is responsible for managing the resources used in the Sprouty Dialogs plugin when running a dialog.

It loads the character data, dialog boxes and portraits. It also provides methods to instantiate the dialog boxes and portraits during the dialogs.

:::info[Important]

This manager is used at runtime as an internal singleton to handle dialog resources. **You should not access or use this class directly.** Instead, you should access it through the **Sprouty Dialogs autoload**.

:::

## Methods

| Return Type                                                                   | Method                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [SproutyDialogsCharacterData](/docs/class-reference/resources/character-data) | [get_character_data](#get-character-data-method)(key_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                                                                                                                                                                                                       |
| void                                                                          | [release_resources](#release-resources-method)(dialog_data: [SproutyDialogsDialogueData](/docs/class-reference/resources/dialogue-data), start_id: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                                                                                                               |
| void                                                                          | [load_resources](#load-resources-method)(dialog_data: [SproutyDialogsDialogueData](/docs/class-reference/resources/dialogue-data), start_id: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                                                                                                                     |
| [DialogBox](/docs/class-reference/nodes/dialog-box)                           | [instantiate_dialog_box](#instantiate-dialog-box-method)(character_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), dialog_box_parent: [Node](https://docs.godotengine.org/en/stable/classes/class_node.html))                                                                                                                                                              |
| [DialogPortrait](/docs/class-reference/nodes/dialog-portrait)                 | [instantiate_portrait](#instantiate-portrait-method)(character_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), portrait_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), portrait_parent: [Node](https://docs.godotengine.org/en/stable/classes/class_node.html), dialog_box: [DialogBox](/docs/class-reference/nodes/dialog-box) = null) |

## Method Descriptions

<h3 id="get-character-data-method">
  <span class="reference-type">func </span><code>get_character_data</code><span class="parameters">(key_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> <a target="_blank" href="/docs/class-reference/resources/character-data">SproutyDialogsCharacterData</a></span>
</h3>
<p>Returns [CharacterData](/docs/class-reference/resources/character-data) for a given character key name. If the character is not loaded, returns null.</p>
<hr/>

<h3 id="release-resources-method">
  <span class="reference-type">func </span><code>release_resources</code><span class="parameters">(dialog_data: <a target="_blank" href="/docs/class-reference/resources/dialogue-data">SproutyDialogsDialogueData</a>, start_id: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Releases the resources used by a [DialogPlayer](/docs/class-reference/nodes/dialog-player). This will remove the character data, dialog boxes, and portraits that are no longer needed by any [DialogPlayer](/docs/class-reference/nodes/dialog-player).</p>
<hr/>

<h3 id="load-resources-method">
  <span class="reference-type">func </span><code>load_resources</code><span class="parameters">(dialog_data: <a target="_blank" href="/docs/class-reference/resources/dialogue-data">SproutyDialogsDialogueData</a>, start_id: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Load the resources needed to run a dialog. This will load the character data, dialog boxes, and portraits for the dialog. <i>This only loads the resources to use them later, it does not instantiate them.</i></p>
<hr/>

<h3 id="instantiate-dialog-box-method">
  <span class="reference-type">func </span><code>instantiate_dialog_box</code><span class="parameters">(character_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, dialog_box_parent: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_node.html">Node</a>)</span><span class="return-type"> -> <a target="_blank" href="/docs/class-reference/nodes/dialog-box">DialogBox</a></span>
</h3>
<p>Instantiate a dialog box for a character in the scene. Instantiate from the loaded dialog boxes for the dialogs in the current scene. <i>Cannot instantiate a dialog box that was not previously loaded.</i></p>
<hr/>

<h3 id="instantiate-portrait-method">
  <span class="reference-type">func </span><code>instantiate_portrait</code><span class="parameters">(character_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, portrait_name: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, portrait_parent: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_node.html">Node</a>, dialog_box: <a target="_blank" href="/docs/class-reference/nodes/dialog-box">DialogBox</a> = null)</span><span class="return-type"> -> <a target="_blank" href="/docs/class-reference/nodes/dialog-portrait">DialogPortrait</a></span>
</h3>
<p>Instantiate a character portrait. Instantiate from the loaded portraits for the dialogs in the current scene. <i>Cannot instantiate a portrait that was not previously loaded.</i></p>
<hr/>
