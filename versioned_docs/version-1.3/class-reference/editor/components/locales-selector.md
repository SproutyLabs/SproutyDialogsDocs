---
sidebar_position: 2
---

# EditorSproutyDialogsLocalesSelector

**Inherits**: [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

## Description

Component that contains a list of [EditorSproutyDialogsLocaleField](./locale-field.md) locale fields to select the locales to be used in the translations of the dialog system. Changes are saved with the save button, which shows a confirmation dialog to save or discard the changes when a saved locale has been removed.

## Methods

| Return Type | Method                                       |
| ----------- | ------                                       |
| void        | [set_locale_list](#set-locale-list-method)() |

## Signals

<h3 id="locales-changed-signal">
  <span class="reference-type">signal </span><code>locales_changed</code>
</h3>
<p>Triggered when the locales are changed, i.e. after the selected locales are saved to the settings.</p>
<hr/>

## Method Descriptions

<h3 id="set-locale-list-method">
  <span class="reference-type">func </span><code>set_locale_list</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>
  Set the locale list loading the saved locales, removing the current locale fields and creating one per saved locale. Shows an empty-state label when there are no saved locales.
</p>
<hr/>
