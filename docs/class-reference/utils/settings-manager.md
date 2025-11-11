---
sidebar_position: 2
---

# SproutyDialogsSettingsManager

**Inherits**: [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

## Description

This class manages the settings for the Sprouty Dialogs plugin. It provides methods to get, set, and check settings values.

## Constants

<h3 id="default-dialog-box-path-const">
  <span class="reference-type">const </span><code>DEFAULT_DIALOG_BOX_PATH</code> <span class="default_value"> = "res://addons/sprouty_dialogs/objects/defaults/default_dialog_box.tscn"</span>
</h3>
<p>Default dialog box path to load if no dialog box is specified.</p>
<hr/>

<h3 id="default-portrait-path-const">
  <span class="reference-type">const </span><code>DEFAULT_PORTRAIT_PATH</code> <span class="default_value"> = "res://addons/sprouty_dialogs/objects/defaults/default_portrait.tscn"</span>
</h3>
<p>Default portrait scene path to load when creating a new portrait.</p>
<hr/>

## Methods

| Return Type | Method |
| ----------- | ------ |
| [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html) | [get_setting](#get-setting-method)(setting_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html)) |
| void | [set_setting](#set-setting-method)(setting_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), value: [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html)) |
| [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html) | [has_setting](#has-setting-method)(setting_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html)) |
| void | [initialize_default_settings](#initialize-default-settings-method)() |

## Method Descriptions

<h3 id="get-setting-method">
  <span class="reference-type">func </span><code>get_setting</code><span class="parameters">(setting_name: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a></span>
</h3>
<p>Returns a setting value from the plugin settings. If the setting is not found, it returns null and prints an error message.</p>
<hr/>

<h3 id="set-setting-method">
  <span class="reference-type">func </span><code>set_setting</code><span class="parameters">(setting_name: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, value: <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Sets a setting value in the plugin settings. If the setting is not found, it prints an error message.</p>
<hr/>

<h3 id="has-setting-method">
  <span class="reference-type">func </span><code>has_setting</code><span class="parameters">(setting_name: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a></span>
</h3>
<p>Checks if a setting exists in the plugin settings.</p>
<hr/>

<h3 id="initialize-default-settings-method">
  <span class="reference-type">func </span><code>initialize_default_settings</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Initializes the default settings for the plugin. This method should be called when the plugin is first loaded or when the settings are reset.</p>
<hr/>
