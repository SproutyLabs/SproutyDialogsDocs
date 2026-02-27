---
slug: sprouty-dialogs-v1.1.0
title: Sprouty Dialogs v1.1.0
authors: kazy
tags:
  - release
  - minor
  - new_node
---

Hi everyone! 🌱

This release adds some new QoL features to the Graph Editor, and also a new cool event node! 😎

<!-- truncate -->

## New features

---

- A toolbar in the Graph Editor to improve the accessibility.
- A quick search to load resources in a more convenient way, suggested by [@Mimique-jpg](https://github.com/Mimique-jpg) in [#4](https://github.com/SproutyLabs/SproutyDialogs/issues/4).
- New Call Method Node to call methods from autoload with parameters during the dialogue tree.

## What's Changed

---

- Update Graph Editor with a toolbar that includes node operations and a shortcut to run the selected dialog preview.
- The start node icon was changed to avoid confusion with its play button.
- Quick search to load any resource faster! (you can still load resources from the file system)
- Now the add node list is sorted by node type instead of alphabetically.
- New Call Method Node that allows to call methods from autoload and pass parameters to it.
- Fix and improve the Array and Dictionary fields to use them in event nodes (Call Method Node and Signal Node).
- Upgrade Signal Node with extra arguments. Now you can assign an identifier and extra arguments to the signals.

---

See the all the release changes in the [Full Changelog](https://github.com/SproutyLabs/SproutyDialogs/pull/17)

You can find the release [v1.1.0 here](https://github.com/SproutyLabs/SproutyDialogs/releases/tag/v1.1.0).
