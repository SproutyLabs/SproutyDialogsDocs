---
sidebar_position: 1
---

# EditorSproutyDialogsLocaleField

**Inherits**: [MarginContainer](https://docs.godotengine.org/en/stable/classes/class_margincontainer.html)

## Description

Component that allows the user to select a locale from the translation server, selecting the language and country using dropdowns or manual input. Suggestions matching the typed language or country code are offered while the code input is being filled, and the resulting locale code is validated before it is used.

## Methods

| Return Type                                                                | Method                                                                                                                      |
| ----------- | ------                                                                                                                                                                                     |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html) | [get_locale_code](#get-locale-code-method)()                                                                                |
| void                                                                       | [load_locale](#load-locale-method)(locale_code: [String](https://docs.godotengine.org/en/stable/classes/class_string.html)) |

## Signals

<h3 id="locale-removed-signal">
  <span class="reference-type">signal </span><code>locale_removed</code>
  <span class="parameters">(locale_code: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Triggered when the locale is removed with the remove button.</p>
<hr/>

<h3 id="locale-modified-signal">
  <span class="reference-type">signal </span><code>locale_modified</code>
</h3>
<p>Triggered when the locale is modified, i.e. the code input text differs from the currently loaded locale.</p>
<hr/>

## Method Descriptions

<h3 id="get-locale-code-method">
  <span class="reference-type">func </span><code>get_locale_code</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>
  Returns the locale code from the current input. The language and country codes are validated against the translation server, printing an error and returning an empty string when they are not valid.
</p>
<hr/>

<h3 id="load-locale-method">
  <span class="reference-type">func </span><code>load_locale</code><span class="parameters">(locale_code: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>
  Load a locale from a locale code, setting the code input text and selecting the matching language and country in the dropdowns.
</p>
<hr/>
