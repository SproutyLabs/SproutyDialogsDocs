---
slug: sprouty-dialogs-v1.2.0
title: Sprouty Dialogs v1.2.0
authors: kazy
tags:
  - release
  - minor
  - new_node
---

Hi everyone! 🌱

This release has many bug fixes, improvements, and a _new event node!_

But also, we’re excited to release a new feature from our roadmap: **Custom text effects tags support!** 🔥

:::important[About Docs]

_The documentation will be updated soon!_

:::

<!-- truncate -->

## New Features

---

- Custom text effect tags support and new special tags: `[speed]`, `[wait]` and `[if]`.
- New **Jump To Node** to jump to another dialog tree by specifying its Start ID.
- Options node now have conditions to disable or hide dialogue options!
- Wait node was updated too, you can now choose whether the dialog box will close while you wait or remain on the screen.

## What's Changed

---

- New extensible text effect tags framework and new special tags by @YudongLi11 in [#39](https://github.com/SproutyLabs/SproutyDialogs/pull/39)
- Fix portrait scale issue in [#42](https://github.com/SproutyLabs/SproutyDialogs/pull/42), reported by @Sajyd in [#41](https://github.com/SproutyLabs/SproutyDialogs/issues/41)
- Add conditionals to Options Node by @Snowpire in [#40](https://github.com/SproutyLabs/SproutyDialogs/pull/40)
- Now expandable text boxes are automatically resized, thanks to @Snowpire in [#40](https://github.com/SproutyLabs/SproutyDialogs/pull/40)
- Fix node action menu items by @Snowpire in [#47](https://github.com/SproutyLabs/SproutyDialogs/pull/47)
- Add Jump To Node by @Snowpire in [#48](https://github.com/SproutyLabs/SproutyDialogs/pull/48), suggested by @ChunckT in [#37](https://github.com/SproutyLabs/SproutyDialogs/issues/37)
- Fix Wait Node skipping issue in [#49](https://github.com/SproutyLabs/SproutyDialogs/pull/49), reported by @Sajyd in [#43](https://github.com/SproutyLabs/SproutyDialogs/issues/43)
- Add a checkbox to the Wait Node to choose if the dialog box will close while you wait in [#49](https://github.com/SproutyLabs/SproutyDialogs/pull/49)
- Fix resources validation, plugin initialization and dialogs replay issues in [#50](https://github.com/SproutyLabs/SproutyDialogs/pull/50)

See the all the release changes in the [Full Changelog](https://github.com/SproutyLabs/SproutyDialogs/pull/53)

You can find the release [v1.2.0 here](https://github.com/SproutyLabs/SproutyDialogs/releases/tag/v1.2.0).
