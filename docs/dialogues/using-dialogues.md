---
sidebar_position: 1
---

# Using Dialogues

Once you have created a dialogue, you can use it in different ways, as we have already seen in the [create a dialogue](/docs/getting-started/create-a-dialogue) section, but there are more details you should keep in mind.

## How to use a dialogue

---

To use the dialogues from Sprouty Dialogs in your game, as we have already seen in the [create a dialogue](/docs/getting-started/create-a-dialogue#using-dialogues-in-your-game) section, we have the two following options.

### Using dialog players (Recommended)

The recommended way to run your dialogues is using dialog players. To use a [DialogPlayer](/docs/class-reference/nodes/dialog-player.md) node, first you need to **add it to the scene** where you want to run the dialogue.

![Add Dialog Player](../../static/img/screenshots/getting-started/add_dialog_player.png)

Then, you must assign the `Dialog Data` or dialogue data file where your dialogue is.

![Select Dialogue Data](../../static/img/screenshots/getting-started/select_dialogue_data.png)

When you select a file, the inspector automatically going to update and now you will see some settings for the [DialogPlayer](/docs/class-reference/nodes/dialog-player.md).

You must choose the **dialogue tree ID of the dialogue you want to play** from the `Start ID` dropdown; otherwise, the player will not know which dialogue tree to run.

![Select Start ID](../../static/img/screenshots/getting-started/select_start_id.png)

Now that you have your dialog player configured, you can call the dialogue from code, using the [start](/docs/class-reference/nodes/dialog-player#start-method)() method from the [DialogPlayer](/docs/class-reference/nodes/dialog-player.md) node.

For example, we can add a script to the `main` node and add a reference to the [DialogPlayer](/docs/class-reference/nodes/dialog-player.md) that we create before to then call the [start](/docs/class-reference/nodes/dialog-player#start-method)() method where we want in the script.

```gdscript title="main.gd" showLineNumbers
extends Node2D

@onready var dialog_player : DialogPlayer = $DialogPlayer

func _ready() -> void:
	dialog_player.start()

```

In this case, we run the dialog in the [\_ready](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-ready)() method of the `main` node or when the scene begins again, so when you run the scene you will see the dialogue.

![Play from Code](../../static/img/screenshots/getting-started/play_from_code.png)

And that's it! So easy right? 🥳

You can also, create a dialog player node from code and use it in the same way, but you must **first add it to the tree** and **configure the dialogue data file and start ID** before running it.

```gdscript title="main.gd" showLineNumbers
extends Node2D

var dialog_data := load("res://dialogues/my_dialogue.tres")

func _ready() -> void:
	var dialog_player = DialogPlayer.new()
	add_child(dialog_player)

	dialog_player.set_dialog(dialog_data, "FIRST")
	dialog_player.start()

```

:::info[Important]

All the resources needed for the dialog will be loaded at once when the [set_dialog](/docs/class-reference/nodes/dialog-player#set-dialog-method)() method is called, which can cause **slowdowns if large resources need to be loaded**.

For more details see the next section [about dialogue resources](#about-dialogue-resources).

:::

### Using SproutyDialogs autoload

Otherwise, instead of create a DialogPlayer node in the scene, you can play a dialogue using the Sprouty Dialogs Autoload. You can call the [start_dialog](/docs/class-reference/core/sprouty-dialogs-manager#start-dialog-method)() method from the [SproutyDialogs](/docs/class-reference/core/sprouty-dialogs-manager.md) autoload passing the dialogue data resource and the ID of the dialogue tree you want to run.

```gdscript title="main.gd" showLineNumbers
extends Node2D

var dialog_data := load("res://dialogues/my_dialogue.tres")

func _ready() -> void:
	SproutyDialogs.start_dialog(dialog_data, "FIRST")

```

And in this way you can also see the dialogue when you run the scene.

![Play from Autoload](../../static/img/screenshots/getting-started/play_from_autoload.png)

:::info[Important]

This method also loads all the resources needed for the dialogue at once when the method is called, so may cause a **slowdown if you have large resources to load**.

For more details see the next section [about dialogue resources](#about-dialogue-resources).

:::

## About dialogue resources

---

When you use a [DialogPlayer](/docs/class-reference/nodes/dialog-player.md) node in a scene to run a dialogue, this node is will all load the resources needed (dialog boxes, characters, portraits, etc) on ready, using the [Resource Manager](/docs/class-reference/utils/resource-manager.md) singleton.

The [Resource Manager](/docs/class-reference/utils/resource-manager.md) is going to keep track of the resources required for all the dialogues that will run in the current scene, which means, the resources needed by **all the dialog players in the scene**.

```mermaid
---
config:
  theme: 'forest'
  themeVariables:
    lineColor: '#949494ff'
---
graph TD;
    DialogPlayer1-->|Call to load resources| ResourceManager;
    DialogPlayer2-->|Call to load resources| ResourceManager;
    DialogPlayer3-->|Call to load resources| ResourceManager;
    DialogPlayer4-->|Call to load resources| ResourceManager;
```

This way, resources are **loaded only once at the start of the scene** and then **instantiated when needed in a dialog**. Furthermore, they are **destroyed when they are no longer needed**.

For this reason, is recommended use dialog players in the scene instead of use the SproutyDialogs autoload to play the dialogues. Because the [start_dialog](/docs/class-reference/core/sprouty-dialogs-manager#start-dialog-method)() method **loads all the resources needed for the dialogue at once when the method is called**, so may cause a **slowdown if you have large resources to load**, such as complex portrait scenes, for example.

## Override display parents

---

You can override the parents of your dialog boxes and portraits for each character in a dialogue ...

## Dialog player signals

---
