---
sidebar_position: 9
---

# Translations

You can translate your dialogues into multiple languages using the Sprouty Dialogs built-in translation system.

This system allows you to edit your dialogues and their translations **within its interface**, _**without the need for external tools!** ... and allowing you to use **all the text editor features for translations!**_

_Also, you can translate **character names** as well!_

:::info

Sprouty Dialogs support translations in `.tres` (by default) and CSV files. Godot also supports `gettext`, but it is not currently integrated into the plugin.

:::

## Using translations

---

### Setting up translations

To use translations, go to the `Settings` tab in the plugin interface and then to the `Translations` tab. Here you can enable the translations checking the `Enable translations` checkbox.

![Enable Translations](./../static/img/screenshots/translations/enable_translations.png)

You need to set what locales your going to translate your dialogues in the `Locales` list. You can add a locale pressing the `New +` button, and then you can select a **language** and optionally a **country** where you want to localizate your dialogues.

![Add Locales Image](./../static/img/screenshots/settings/locales_list.png)

Once you have added the desire locales, **don't forget to press the `Save Locales` button!**

Also, you can write the locale code directly in the text input and select the language and country from a filtered list. The locale codes have the format `language_COUNTRY`, for example:

- `en_US` is `English, United States of America`
- `es_CL` is `Spanish, Chile`

:::info

Locale codes can have more indications, such as a **script or variant code**, so the complete format is `language_script_COUNTRY_VARIANT`. You can add this additional codes in the locale codes manually using the text input. We wanted to mantain it simple for the most use cases, so the UI only contemplate languages and countries.

You can see [locale codes in godot docs](https://docs.godotengine.org/en/stable/tutorials/i18n/locales.html) for more information.

:::

### Writing translations

Once you enable translations and set the locales, now you can see that a **translations section** appears in the dialogue nodes, options nodes, character names and everything than can be translated!

![Dialogue Node With Translations](./../static/img/screenshots/event-nodes/dialogue_node_with_translations.png)

You can see that the text box of the **dialogue is now associated with a locale**, specifically the **default locale** (in this example, “en” or English), which means that the dialogs written in that text box will be the dialogs for this default locale. You can set the default locale in the [translation settings](/docs/settings#locales-settings).

The text boxes for edit the dialogues in other locales are in the **translation section**, where you can write and edit each of your translations using the text editor in the same way that the default dialogue.

### Translating characters

To use translations for the character names, you need to enable the `Translate character names` setting in the [translation settings](/docs/settings#translation-settings).

At the same way that before, when you edit a character and the translations are enabled, you will going to see that in the `display name` property the default text input now is associated with the **default locale**. Also, there is **translation** section where you can translate the name that will be displayed on the dialog box to each locale.

![Display Name Translation](./../static/img/screenshots/getting-started/display_name_translation.png)

### Testing translations

To test the translations, you can select the locale in which you want to test the dialogues in the `testing locale` dropdown from [translation settings](/docs/settings#locales-settings). If **no testing locale is selected**, the **automatically detected system locale** will be used. Then you can run the dialogue from a **play button** from a `Start Node` or directly run the project to test your dialogues.

:::info[Important]

This **only works on the editor**, may not work in exported projects. To change the locale when the game is exported see the [changing the language](#changing-the-language) section.

:::

### How translations are saved?

By default, translations will be saved in the same `.tres` file you are working on, in the **dialogue data file** or **character data file** where you are writing the translations.

For dialogues translations, **each dialogue text has a unique key associated with it**. Therefore, each dialogue in a `dialogue node` has an associated key, and each **option** in an `option node` also has a key.

> On the one hand, each **dialogue** from a **dialogue node** has a key with the format:
>
> ```gdscript
> <START_ID>_DIALOG_<NODE_INDEX>
> ```
>
> _For example, the key of the dialogue text from the `Dialogue Node #1` that belongs to the dialogue tree with start id `EXAMPLE` is `EXAMPLE_DIALOG_1`._

> For the other hand, each **option** dialogue from a **options node** has a key with the format:
>
> ```gdscript
> <START_ID>_OPT<NODE_INDEX>_<OPTION_INDEX>
> ```
>
> F*or example, the key of the dialogue text from the second option of the `Options Node #1` that belongs to the dialogue tree with start id `EXAMPLE` is `EXAMPLE_OPT1_2`.*

In that way, you also can edit the translations outside the plugin, editing the **dialogs dictionary** in the `.tres` file, recognizing each dialogue by its key.

However, if you want to edit the translation outside of the plugin, it's better to use CSV files.

## Using CSV files

---

To use CSV files for translations, you need to enable the `Use CSV files` setting in the [translation settings](/docs/settings#translation-settings).

![Enable CSV Files](./../static/img/screenshots/translations/enable_csv_files.png)

Once enabled, you can see new settings such as `CSV translation folder`, where you need to **select a directory where the CSV translations files will be saved**. This is required to **collect the translations into Godot**.

:::info[Important]

Godot needs to import all the CSV files as translations files to use them, how is described in [internationalizing games in godot docs](https://docs.godotengine.org/en/stable/tutorials/i18n/internationalizing_games.html). So the plugin **automatically collect all the CSV files** that find in the indicated folder **when a dialogue or character file is saved**.

In this way, you don't need to collect them manually, but in case that something went wrong, or you change the file outside the plugin, you can click on the `Collect Translations` button to do so.

:::

:::warning[Important]

_The csv translations folder can contain subfolders to organize them if you wish, but you must **ensure that all your csv translation files are inside** this folder or its subfolders._

:::

Now that the using of CSV files is enabled and the translations folder is setted, when you create a new dialogue file Sprouty Dialogs **automatically will create a new CSV file with the same name in the translations folder**, where your translations will be saved.

You can find the CSV file associated to your dialogue file in the new `CSV Translation File` field at the bottom of the side bar.

[CSV File in Dialogue Image]

Here **you can change the CSV file** where your translations will be saved if you want.

:::info

The **CSV files are updated on save**. Each dialogue or translation text changed is updated, but the rest of the content in the CSV is **not replaced or deleted**.

_So a single CSV file can contain the translations for **more than one dialogue file!**_

Just make sure that **each dialogue has a unique key**, which means that **each dialogue tree needs a unique ID**, to avoid overriding errors.

:::

(explain fallback to resource)

### Editing CSV files

The CSV format is simple and you can edit it outside the plugin, using any spreadsheet software, like Excel or Google Sheets.

(explain csv format)

### Character names using CSV

(explain csv for character names)

## Changing the language

---

To change the language or locale of your dialogues (and project in general), use the method [set_locale](https://docs.godotengine.org/en/stable/classes/class_translationserver.html#class-translationserver-method-set-locale)() from the [TranslationServer](https://docs.godotengine.org/en/stable/classes/class_translationserver.html#translationserver) class of the Godot API.

```gdscript
# Change language to Spanish (es)
TranslationServer.set_locale("es")
```

When using CSV files, dialogues will be handled by the Godot API, so you need to **ensure global unique keys** for dialogues and that the **translations are correctly collected**. Otherwise, translations will be loaded directly from your dialogues and characters `.tres` files.
