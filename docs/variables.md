---
sidebar_position: 7
---

# Variables

In this section we'll going to explore all about variables in the Sprouty Dialogs plugin.

> Variables are useful for many things, you can use it to **display values** that will going to change during the dialogues, **use conditions** to branch your dialogue flow, standarize colors or styles for some text, such as names or keywords, _and much more!_

Let's take a look at what we can do with variables and how to use them.

## Using the variable editor

---

The Sprouty Dialogs plugin **has a built-in interface to handle variables in a user-friendly way**.

The variable editor allows you to **create and handle variables of different types** to use in your dialogues. You can add, remove, rename, set an inital value and filter the variables. They can be **organized into groups** and support drag-and-drop reordering.

![Variable Editor](../static/img/screenshots/variables/variable_editor.png)

As you can see, **groups can be nested** and **assigned a color** to distinguish them more easily. To change the group color, **click on the squared colored button at the left of the group name** and select a color.

:::info[Important]

You must have **unique variables and group names in the same level** or group, but you can have variables or groups with the **same name in different groups**.

:::

When grouping variables, you must consider the **full path to reference a variable**, not just the variable. So, when you gonna call a variable, you need to use their full path as the variable name.

To view the full path for each variable or group, you can **hover your cursor over it for a moment**.

![Variable Path Tooltip](../static/img/screenshots/variables/variable_path_tooltip.png)

:::info[Important]

When you edit or add variables **don't forget to save** to apply the changes!

Otherwise, you cannot be able too see and use the variables correctly updated in the dialogues.

:::

With the variables configured here, you can do many things! Let's take a look.

## Using variables in your dialogues

---

### Variables in text

- You can insert variables in your dialogues by writing the name as `{variable_name}`. If your variable is **inside a group** you need to refer them using their full path as: `{group1/group2/variable_name}`.

- Also, you can use **global variables from Autoloads**. To use global variables, you need to write the variable as `{AutoloadName.variable_name}` to use them.

You can also use expressions inside the brackets. See the [using expressions section](#using-expressions).

### Variables in character names

You can use variables in the `display_name` of the characters in the same way as in text. You can use a variable as a name or add variables in a name to do other things, such as stylish the name display.

> For example, a `display_name` can be the player name as `{player}` or maybe just a stylish name like `[color={player_color}] Sprouty`, or _why not both as `[color={player_color}]{player}`_.

_Also, you can use variables in the name **translations**._

### Variables in conditions

Conditions allows to change the flow of the dialogue, so they are one of the main uses for variables. You can add conditions in the dialogue tree using the [condition node](/docs/dialogues/event-nodes#condition-node).

![Variable in Condition](../static/img/screenshots/variables/variable_in_condition.png)

You can check relations between two variables, variable and value, expressions, etc.

:::warning[Important]

You must check that the **comparation is valid**. You cannot compare an [String](https://docs.godotengine.org/en/stable/classes/class_string.html) and a [Vector2](https://docs.godotengine.org/en/stable/classes/class_vector2.html), for example, as this will throw an error when the dialogue runs.

:::

### Set variable events

You can update or change the variables values in the dialogue tree using the [set variable node](/docs/dialogues/event-nodes#set-variable-node). You can update global variables as well as Sprouty Dialogs variables.

## Using expressions

---

## Using variables in code

---
