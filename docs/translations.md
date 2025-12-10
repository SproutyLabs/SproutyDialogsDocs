---
sidebar_position: 9
---

# Translations

You can translate your dialogues into multiple languages using the Sprouty Dialogs built-in translation system.

This system allows you to edit your dialogues and their translations **within its interface**, _**without the need for external tools!** ... and allowing you to use **all the text editor features!**_

:::info

For now, Sprouty Dialogs support translations in `.tres` files and CSV files. `gettext` translations are not supported.

:::

## Using translations

---

To use translations, you must go to the `Settings` tab in the plugin interface and then to the `Translations` tab. Here you can enable the translations with the `Enable translations` checkbox.

[Enable Translations Image]

To use translations you need to set what locales your going to translate your game in the `Locales` list. You can add a locale pressing the `New +` button, and then you can select a **language** and optionally a **country** where you want to localizate your dialogues.

![Add Locales Image](./../static/img/screenshots/settings/locales_list.png)

Also, you can write the locale code directly and select the language and country from a filtered list. The locale codes have the format `language_COUNTRY`, for example:

- `en_US` is `English, United States of America`
- `es_CL` is `Spanish, Chile`

:::info

Locale codes can have more indications, such as a script or variant code. You can also add this codes in the locale codes, but we wanted to mantain it simple for the most use cases, so the UI only contemplate languages and countries.

You can see [locale codes godot docs](https://docs.godotengine.org/en/stable/tutorials/i18n/locales.html) for more information.

:::

## Using CSV files

---

## Translate character names
