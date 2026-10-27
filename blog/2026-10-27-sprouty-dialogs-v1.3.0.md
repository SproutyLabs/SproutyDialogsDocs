---
slug: sprouty-dialogs-v1.3.0
title: Sprouty Dialogs v1.3.0
authors: kazy
tags:
  - release
  - minor
---

Hi everyone! 🌱

It's been a while, but we finally have a new major release! 🥳 🎊

It includes some **new features** and many bug fixes to **improve the plugin's stability and reliability.**

<!-- truncate -->

## New Features

---

- **Auto-Advance support**: Now you can automatically progress the dialogue without waiting for the user input. ([See more in docs](../docs/dialogues/auto-advance))
- New `[auto]` and `[noskip]` tags for enable/disable the **auto-advance and skipping text reveal.** ([See more in docs](../docs/dialogues/auto-advance#using-the-auto-tag))
- The **DialogPlayer API have changed** to follow Godot conventions ([See more in the class reference](../docs/class-reference/nodes/dialog-player)):
  - New method `play()` -> `start()` _(deprecated)_
  - New property `autoplay` -> `play_on_ready()` _(deprecated)_
  - New property `free_on_end` -> `destroy_on_end()` _(deprecated)_
- Now the DialogPlayer allows to assign **display overrides** and **dialog box overrides**, both general and character-specific. ([See more in docs](../docs/dialogues/dialog-player-overrides))
- Copy and paste nodes **between different dialogue files.**
- The editor state is now saved in a cache file.

## What's Changed

---

- Fix split dialog by max characters loop by **@Kazymila** in [#120](https://github.com/SproutyLabs/SproutyDialogs/pull/120), reported by **@sujkowski** in [#119](https://github.com/SproutyLabs/SproutyDialogs/issues/119)
- Improve DialogPlayer API to follow Godot conventions by **@Kazymila** in [#117](https://github.com/SproutyLabs/SproutyDialogs/pull/117), suggested by **@Scal** in [#103](https://github.com/SproutyLabs/SproutyDialogs/issues/103)
- Add middle-click file closing in the file manager by **@myuniquename** in [#121](https://github.com/SproutyLabs/SproutyDialogs/pull/121)
- Add file reload to the file manager by **@myuniquename** in [#122](https://github.com/SproutyLabs/SproutyDialogs/pull/122)
- Add auto-advance with new related tags by **@Kazymila** in [#123](https://github.com/SproutyLabs/SproutyDialogs/pull/123), suggested by **@Moumekie** in [#91](https://github.com/SproutyLabs/SproutyDialogs/issues/91)
- Fix errors after options node duplication by **@Scrawach** in [#128](https://github.com/SproutyLabs/SproutyDialogs/pull/128)
- Fix missing portrait display error handling by **@Kazymila** in [#129](https://github.com/SproutyLabs/SproutyDialogs/pull/129), reported by **@dogordon123** in [#126](https://github.com/SproutyLabs/SproutyDialogs/issues/126)
- Fix the disconnection of nodes with multiple inputs by **@Kazymila** in [#132](https://github.com/SproutyLabs/SproutyDialogs/pull/132), reported by **@Scrawach** in [#131](https://github.com/SproutyLabs/SproutyDialogs/issues/131)
- Refactor display parent overrides in DialogPlayer by **@Kazymila** in [#133](https://github.com/SproutyLabs/SproutyDialogs/pull/133), suggested by **@GersonFeDutra** in [#125](https://github.com/SproutyLabs/SproutyDialogs/issues/125)
- Save editor state as cache by **@Pituivan** in [#127](https://github.com/SproutyLabs/SproutyDialogs/pull/127), suggested in [#124](https://github.com/SproutyLabs/SproutyDialogs/issues/124)
- Fix portrait not updating before dialog on first line (#130) by **@yxliu120** in [#138](https://github.com/SproutyLabs/SproutyDialogs/pull/138), reported in [#130](https://github.com/SproutyLabs/SproutyDialogs/issues/130)
- Add dialog box overrides in DialogPlayer by **@Kazymila** in [#134](https://github.com/SproutyLabs/SproutyDialogs/pull/134)
- Recover editor state from project settings by **@Kazymila** in [#135](https://github.com/SproutyLabs/SproutyDialogs/pull/135)
- Fix the editor state cache file path by **@Kazymila** in [#139](https://github.com/SproutyLabs/SproutyDialogs/pull/139)
- Some dialog box override issues fixes by **@Kazymila** in [#140](https://github.com/SproutyLabs/SproutyDialogs/pull/140)
- Fix auto-advance delay handling by **@Kazymila** in [#142](ttps://github.com/SproutyLabs/SproutyDialogs/pull/142)
- Ensure that portraits always talks on typing by **@Kazymila** in [#143](https://github.com/SproutyLabs/SproutyDialogs/pull/143)
- Fix dialog player's inspector properties to avoid null values when a character is changed by **@Kazymila** in [#144](https://github.com/SproutyLabs/SproutyDialogs/pull/144)
- Fix autoload variables with false value treated as nonexistent by **@Kazymila** in [#149](https://github.com/SproutyLabs/SproutyDialogs/pull/149), reported by **@KonstantinV3** in [#141](https://github.com/SproutyLabs/SproutyDialogs/issues/141)
- Add graph grid, snapping and minimap states to the editor state persistence by **@Kazymila** in [#150](https://github.com/SproutyLabs/SproutyDialogs/pull/150), suggested by **@LexGear** in [#147](https://github.com/SproutyLabs/SproutyDialogs/issues/147)
- Copy and paste nodes between dialogue files by **@Kazymila** in [#151](https://github.com/SproutyLabs/SproutyDialogs/pull/151), suggested by **@LexGear** in [#148](https://github.com/SproutyLabs/SproutyDialogs/issues/148)
- Character `key_name` sync and rename support by **@Kazymila** in [#152](https://github.com/SproutyLabs/SproutyDialogs/pull/152), reported by **@LexGear** in [#145](https://github.com/SproutyLabs/SproutyDialogs/issues/145)
- Fix connected nodes misfiled as `unplugged_nodes` on save by **@Kazymila** in [#154](https://github.com/SproutyLabs/SproutyDialogs/pull/154) reported by **@LexGear** in [#146](https://github.com/SproutyLabs/SproutyDialogs/issues/146)
- UID-based resource references with path fallback by **@Kazymila** in [#155](https://github.com/SproutyLabs/SproutyDialogs/pull/155)

## New Contributors

---

- **@myuniquename** made their first contribution in [#121](https://github.com/SproutyLabs/SproutyDialogs/pull/121)
- **@Scrawach** made their first contribution in [#128](https://github.com/SproutyLabs/SproutyDialogs/pull/128)
- **@Pituivan** made their first contribution in [#127](https://github.com/SproutyLabs/SproutyDialogs/pull/127)
- **@yxliu120** made their first contribution in [#138](https://github.com/SproutyLabs/SproutyDialogs/pull/138)

See the all the release changes in the [Full Changelog](https://github.com/SproutyLabs/SproutyDialogs/pull/156)

You can find the release [v1.3.0 here](https://github.com/SproutyLabs/SproutyDialogs/releases/tag/v1.3.0).
