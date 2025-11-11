---
sidebar_position: 4
---

# SproutyDialogsTranslationManager

**Inherits**: [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

## Description

This class manages the translations for the Sprouty Dialogs plugin. It provides methods to load and manage translations from CSV files.

## Methods

| Return Type                                                                | Method                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html) | [get_translated_dialog](#get-translated-dialog-method)(key: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), dialog_data: [SproutyDialogsDialogueData](/docs/class-reference/resources/dialogue-data))                           |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html) | [get_translated_character_name](#get-translated-character-name-method)(key_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), character_data: [SproutyDialogsCharacterData](/docs/class-reference/resources/character-data)) |
| void                                                                       | [collect_translations](#collect-translations-method)()                                                                                                                                                                                                      |

## Method Descriptions

<h3 id="get-translated-dialog-method">
  <span class="reference-type">func </span><code>get_translated_dialog</code><span class="parameters">(key: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, dialog_data: <a href="/docs/class-reference/resources/dialogue-data">SproutyDialogsDialogueData</a>)</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Returns the translated dialog text for a given key in a [DialogueData](/docs/class-reference/resources/dialogue-data).</p>
<hr/>

<h3 id="get-translated-character-name-method">
  <span class="reference-type">func </span><code>get_translated_character_name</code><span class="parameters">(key_name: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, character_data: <a href="/docs/class-reference/resources/character-data">SproutyDialogsCharacterData</a>)</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Returns the translated character name for a given key in a [CharacterData](/docs/class-reference/resources/character-data).</p>
<hr/>

<h3 id="collect-translations-method">
  <span class="reference-type">func </span><code>collect_translations</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Collect translation files from the CSV folder and add them to **Project > Project Settings > Localization > Translations** to import the translations. This allow to use the translations from CSV files in the project. More information on [Godot Internationalizing games](https://docs.godotengine.org/en/stable/tutorials/i18n/internationalizing_games.html).</p>
<hr/>
