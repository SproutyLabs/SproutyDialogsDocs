---
sidebar_position: 4
---

# Event Nodes

The event nodes are the **building blocks of the dialogue system**. They are graph nodes that can trigger different events in the dialogue. Let's take a look at each of them.

## Start Node

---

This node define the **beggining of a dialogue tree**. You must **assign it an `ID` that will be the name or reference** for calling the dialogue tree later. Also, you can see that this node have a **play button**, you can click on it to [test your dialogue tree](../getting-started/create-a-dialogue#test-the-dialogue).

![Start Node](img/event-nodes/start-node.png)

You can have **more than one dialogue tree** in the same dialogue data file, so **each `Start Node` needs an unique `ID`**. This identifier not only defines the dialogue tree, they are also used to identify the dialogues itself.

:::warning[Important]

If you want to use **translations** with CSV files, you must ensure that **all your dialogue trees in the project have unique `ID`s**, not only the dialogue trees in the same file.

:::

## Dialogue Node

---

This node is where you set the dialogues to display. This node allows you to write your dialogues and **assign a character to the dialogue**, selecting a character data file, and then **select a portrait from it to display on screen** when the dialogue is played.

![Dialogue Node](img/event-nodes/dialogue-node.png)

To write your dialogues, you can expand the text box **clicking on the right button** that will open the **text editor** on the right side. Here you can easily add [BBCode](https://docs.godotengine.org/en/latest/tutorials/ui/bbcode_in_richtextlabel.html) tags to the text in a user-friendly interface, so you don't have to remember all the tags and its properties. For more details about the text editor, see the [text editor section](./text-editor.md).

:::info[Using Translations]

When you use **translations**, this node also allows you to edit the translations here in the same way. A text box is added for each **locale** or language that you have set in the [translation settings](../settings#locales-settings), and can be accessed through a new expandable section called "translations" at the bottom of the node.

![Dialogue Node with Translations](img/event-nodes/dialogue-node-translations.png)

The main dialogue text box is going to have the dialogue in the **default locale**, that you can set in the [translation settings](../settings#locales-settings). In this example, you can see that the default locale is English (en).

:::

## Options Node

---

This node allows you to add options or choices to the dialogue. You can add **multiple options and connect them to any node to define different actions or branches of the dialog tree** depending on the selected option.

![Options Node](img/event-nodes/options-node.png)

Each option will be displayed in a [DialogOption](../class-reference/nodes/dialog-option.md) node when the dialogue runs. You can customize how looks the options buttons in your dialog box. For more information see the [customize options section](#).

:::info[Using Translations]

When you use **translations**, this node also allows you to edit the translations here in the same way that in the dialogue nodes. For each option, a new expandable "translations" section is added at the bottom, with a text box for each locale or language that you have set in the [translation settings](../settings#locales-settings).

![Options Node](img/event-nodes/options-node-translations.png)

In the same way as before, the main option text box is going to have the dialogue in the **default locale**, that you can set in the [translation settings](../settings#locales-settings). In this example, the default locale is English (en).

:::

## Condition Node

---

This node allows you to condition the flow of the dialogue tree. You can **check a relation between different types of variables**, and then if the condition is true, the dialogue tree is going to continue with the event node connected to the `true` slot, otherwise, is going to continue with the event node connected to the `false` slot.

![Condition Node](img/event-nodes/condition-node.png)

You can compare variables, expressions, values, etc. For more information about it, see the [variables section](../variables.md).

## Set Variable Node

---

This node allows you to **change the value of a variable** during the dialogue tree. You can select the type of the variable, then write the name of the variable that you want to change, select an **assignment operator (such as: =, +=, \*=, etc)** and give it the new value. The value field updates depending on the variable type.

![Set Variable Node](img/event-nodes/set-variable-node.png)

You can set the **variables defined in the plugin or global variables**. Considering the following:

- If you variables is inside a group you need to specify the whole path to it: `group1/group2/variable`
- If you want to use global variables, you need to specify the autoload name followed by a dot and the variable name: `AutoloadName.variable`.

For more information about variables, see the [variables section](../variables.md).

## Call Method Node

---

This node allows you to call a method from an [Autoload](https://docs.godotengine.org/en/stable/tutorials/scripting/singletons_autoload.html). First, you need to select an Autoload, then **search the method name and select one from the popup list**. If the method have parameters, you will see that the **parameters array is going to update**. You can click the array field button to see and **edit each value**.

![Call Method Node](img/event-nodes/call-method-node.png)

## Signal Node

---

This node allows you to emit a signal during the dialogue. It has a identifier field, that is an [String](https://docs.godotengine.org/en/stable/classes/class_string.html) that you can use to **identify the signal** when its emitted, and allows to **add extra arguments** in an array.

![Signal Node](img/event-nodes/signal-node.png)

This will **emit a signal with two arguments**: the identifier string and the extra arguments array.

:::info[Using Signals]

To **catch the signal**, you need to connect the [signal_event](../class-reference/nodes/dialog-player#signal-event-signal) signal from the [DialogPlayer](../class-reference/nodes/dialog-player.md) node where you run the dialogue. As shown in the [using dialogues section](./using-dialogues#using-dialogplayer-signals).

:::

## Wait Node

---

This node allows you to **wait a few seconds** between events in a dialogue tree. You must define the wait time in seconds in the node field.

![Wait Node](img/event-nodes/wait-node.png)

## Comment Node

---

The node is useful to add comments in the graph. Do nothing, it is only for reference.

![Comment Node](img/event-nodes/comment-node.png)

---

In the future, _more event nodes will be added!_

Also, you can create your own custom event nodes. See the [custom event nodes](./custom-event-nodes.md) section for more information.
