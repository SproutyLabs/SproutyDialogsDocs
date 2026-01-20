---
sidebar_position: 1
---

# Using Characters

We already see how to create a character in the [create a character](/docs/getting-started//create-a-character.md) section, but some details are missing. This section will cover how to use characters in more detail.

## Main settings

In the character data file, you can see several properties that you can configure for your character. Let's see them one by one.

- `Key name`: The **unique identifier** for the character, shown above the display name. This name will be used to **refer to the character in the dialogues**.

  > Corresponds to the **file name with which the character was created**.

  :::warning[Important]

  It **cannot be changed** after creating the character, even if you **rename** the file. _So choose it wisely!_

  :::

- `Display Name`: The name that will be displayed in the dialog box when the character speaks. This can be translated if you have **translations enabled**.

  > ![Display Name Translations](../../static/img/screenshots/getting-started/display_name_translation.png)
  >
  > Also, you can use **variables, expressions and rich text formatting** in the display name. See more information in the [variables in character names](/docs/variables#variables-in-character-names) section.

- `Description`: A description for your own reference. Does nothing.

## Dialog box settings

You can also assign a specific dialog box for the character. For that you have some settings to configure.

- `Dialog Box`: The dialog box scene that will be used when this character speaks.

  > To assign a dialog box, you need to load a dialog box scene or create a new one. For more information about dialog boxes, see the [dialog boxes](/docs/dialogues/dialog-boxes.md) section.

- `Portrait on Dialog Box`: If you want to display the character portrait inside the dialog box, you can enable this property.

  > This will show the portrait in the dialog box if the dialog box have assigned a `Portrait Display` component. See more information in the [using portraits in dialog boxes](/docs/dialogues/dialog-boxes#using-portraits-in-dialog-boxes) section.

## Portrait settings
