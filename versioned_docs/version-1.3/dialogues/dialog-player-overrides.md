---
sidebar_position: 2
---

# Dialog Player Overrides

When you need more control over how the [DialogPlayer](../class-reference/nodes/dialog-player.md) displays the dialogue components, the [DialogPlayer](../class-reference/nodes/dialog-player.md) node provides two kinds of overrides that you can set from the inspector or from code:

- **Display Overrides**: Set the parent nodes where the **dialog boxes and portraits are displayed**.
- **Dialog Box Overrides**: Set the custom **dialog box node** used to display the dialogues.

## Display Overrides

---

You can override the display parents of your dialog boxes and portraits for each character in a dialogue to **change the position of the dialog box or portrait on screen** for a given dialogue, for example, or whatever you want.

This allows more flexibility to display the dialogue components, for example, to use **dialogue bubbles as dialog boxes that follow the position of the NPCs**.

When you assign a dialogue data file that use characters in a [DialogPlayer](../class-reference/nodes/dialog-player.md) node, the inspector will add a new group of properties called `Display Overrides`.

![Display Overrides Inspector](img/display_overrides.png)

Here you will find **two general properties and a section for each character in the dialogues** of the selected dialog data:

- **Portraits Display Override** and **Dialog Box Display Override**: Set the display parent node **for all the characters** in the dialogue.
- In each character section, you can set the **Portraits Display** and **Dialog Box Display** node fields to set the display parent node **individually for that character**.

> _The per-character overrides take precedence over the general ones. If neither is set, the portraits and dialog boxes are displayed using the **default canvas layers**._

Also, you can set the overrides from code using the [set_portraits_display_override](../class-reference/nodes/dialog-player#set-portraits-display-override-method)() and [set_dialog_box_display_override](../class-reference/nodes/dialog-player#set-dialog-box-display-override-method)() methods of the [DialogPlayer](../class-reference/nodes/dialog-player.md) node. Both methods receive the **parent node** to apply and an optional `character_name` (the character's key name, i.e., its file name). If the character name is provided, the node is set as the display parent **for that character**, and if it is omitted, the node is set as the **general display parent for all the characters**.

```gdscript title="main.gd" showLineNumbers
extends Node2D

func _ready() -> void:
	var dialog_player : DialogPlayer = $DialogPlayer

	# Set the display parents for all the characters
	dialog_player.set_portraits_display_override(get_node("PortraitsParent"))
	dialog_player.set_dialog_box_display_override(get_node("DialogBoxParent"))

	# Set the display parents only for the "sprouty" character,
	# e.g., to display a dialogue bubble that follows the character
	dialog_player.set_portraits_display_override(get_node("BubbleWindow"), "sprouty")
	dialog_player.set_dialog_box_display_override(get_node("BubbleWindow"), "sprouty")

	dialog_player.play()
```

You can also read the current overrides from code using the [get_portraits_display_override](../class-reference/nodes/dialog-player#get-portraits-display-override-method)() and [get_dialog_box_display_override](../class-reference/nodes/dialog-player#get-dialog-box-display-override-method)() methods, which return the display parent node **for the given character**, or the **general display parent node** if no character name is provided (`null` if it is not set).

```gdscript title="main.gd" showLineNumbers=17
func _read_overrides() -> void:
	var portrait_parent : Node = dialog_player.get_portraits_display_override("sprouty")
	var general_dialog_box_parent : Node = dialog_player.get_dialog_box_display_override()
```

:::info[Note]

The `portrait_parents` and `dialog_box_parents` **dictionaries** parameters of the [set_dialog](../class-reference/nodes/dialog-player#set-dialog-method)() method, and of the [play](../class-reference/core/sprouty-dialogs-manager#play-method)() and [start_dialog](../class-reference/core/sprouty-dialogs-manager#start-dialog-method)() methods of the Sprouty Dialogs autoload, are still available for backwards compatibility, and they apply the given nodes as **per-character overrides**.

:::

## Dialog Box Overrides

---

You can also override the dialog box used to display the dialogues, to use a **custom dialog box node** instead of the [default dialog box](../settings#defaults) assigned in the plugin settings, or the dialog boxes assigned in the characters data resources. For example, to use a dialog box with a **custom style** for a specific character.

When you assign a dialogue data file that use characters in a [DialogPlayer](../class-reference/nodes/dialog-player.md) node, the inspector will add a new group of properties called `Dialog Box Overrides`.

![Dialog Box Overrides](img/dialog_box_overrides.png)

Here you will find **two general properties and a section for each character in the dialogues** of the selected dialog data:

- **Dialog Box Override**: Set a custom [DialogBox](../class-reference/nodes/dialog-box.md) node to use for the dialogues **of all the characters**.
- **Ignore Dialog Box Display Override**: If enabled, the custom dialog box node is used **as is**, keeping its current parent node in your scene. _It only applies to the **Dialog Box Override** node, not to the per-character overrides._
- In each character section, you can set the **Dialog Box Override** and **Ignore Display Override** fields to override the dialog box **individually for that character**.

> _Setting a dialog box override for a character **overrides the dialog box assigned in its character data resource**. The general **Dialog Box Override** replaces the **default dialog box** from the settings, which is used when a character has no dialog box assigned or the dialogue has no character._

Also, you can set the overrides from code using the [set_dialog_box_override](../class-reference/nodes/dialog-player#set-dialog-box-override-method)() method of the [DialogPlayer](../class-reference/nodes/dialog-player.md) node, which receives the custom [DialogBox](../class-reference/nodes/dialog-box.md) node, an optional `ignore_display_override` flag, and an optional `character_name` (the character's key name, i.e., its file name). If the character name is provided, the dialog box is set **for that character**, and if it is omitted, it is set as the **general override for all the characters**.

```gdscript title="main.gd" showLineNumbers
extends Node2D

func _ready() -> void:
	var dialog_player : DialogPlayer = $DialogPlayer

	# Set a custom dialog box for all the characters,
	# keeping its current parent in the scene
	dialog_player.set_dialog_box_override(get_node("MyCustomDialogBox"))

	# Set another custom dialog box only for the "sprouty" character
	dialog_player.set_dialog_box_override(get_node("SproutyDialogBox"), false, "sprouty")

	dialog_player.play()
```

You can also read the current overrides from code using the [get_dialog_box_override](../class-reference/nodes/dialog-player#get-dialog-box-override-method)() method, which returns the dialog box node **for the given character**, or the **general dialog box override** if no character name is provided (`null` if it is not set).

```gdscript title="main.gd" showLineNumbers=15
func _read_overrides() -> void:
	var character_dialog_box : Node = dialog_player.get_dialog_box_override("sprouty")
	var general_dialog_box : Node = dialog_player.get_dialog_box_override()
```
