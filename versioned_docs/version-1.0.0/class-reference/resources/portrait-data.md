---
sidebar_position: 3
---

# SproutyDialogsPortraitData

**Inherits**: [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

## Description

This resource stores data for character portraits. Each portrait includes the reference for the portrait scene, transform settings and overrides properties.

## Properties

| Type                                                                               | Name                                            | Default         |
| ---------------------------------------------------------------------------------- | ----------------------------------------------- | --------------- |
| [int](https://docs.godotengine.org/en/stable/classes/class_int.html)               | [portrait_scene_uid](#portrait-scene-uid-var)   | -1              |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html)         | [portrait_scene_path](#portrait-scene-path-var) | ""              |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [export_overrides](#export-overrides-var)       | \{\}            |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [transform_settings](#transform-settings-var)   | See description |
| [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) | [typing_sound](#typing-sound-var)               | See description |

## Property Descriptions

<h3 id="portrait-scene-uid-var">
  <span class="reference-type">var </span><code>portrait_scene_uid</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a> = -1</span>
</h3>
<p>Reference to the portrait scene used for this portrait. This is the UID of the scene that will be used as the character's portrait. The scene should contain a root node that extends <a target="_blank" href="/docs/class-reference/nodes/dialog-portrait">DialogPortrait</a> to can integrate with the dialog system.</p>
<hr/>

<h3 id="portrait-scene-path-var">
  <span class="reference-type">var </span><code>portrait_scene_path</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = ""</span>
</h3>
<p>Path to the portrait scene used for this portrait. This is for reference only, use [portrait_scene_uid](#portrait-scene-uid-var) to set the portrait scene.</p>
<hr/>

<h3 id="export-overrides-var">
  <span class="reference-type">var </span><code>export_overrides</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a> = \{\}</span>
</h3>
<p>
  Portrait exported overrides properties. This is a dictionary where each key is the property name to override and its value is a dictionary containing the value and type of the property.
  
  The dictionary structure is as follows:
</p>
```gdscript
{
  "property_name_1": {
    "value": value_of_property_1,
    "type": 0  # 0 for NIL from Variant.Type enum
  },
  "property_name_2": {
    "value": value_of_property_2,
    "type": 1  # 1 for BOOL from Variant.Type enum
  },
  ...
}
```
<hr/>

<h3 id="transform-settings-var">
  <span class="reference-type">var </span><code>transform_settings</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>
  Transform settings for the portrait. This is a dictionary containing the following keys:
</p>
<ul>
  <li><strong>ignore_main_transform</strong>: whether to ignore the main transform settings from the character.</li>
  <li><strong>scale</strong>: the scale of the portrait.</li>
  <li><strong>scale_lock_ratio</strong>: whether to lock the aspect ratio of the scale.</li>
  <li><strong>offset</strong>: the offset of the portrait.</li>
  <li><strong>rotation</strong>: the rotation of the portrait in degrees.</li>
  <li><strong>mirror</strong>: whether to mirror the portrait.</li>
</ul>
<p>Default values:</p>
```gdscript
{
  "ignore_main_transform": false,
  "scale": Vector2.ONE,
  "scale_lock_ratio": true,
  "offset": Vector2.ZERO,
  "rotation": 0.0,
  "mirror": false
}
```
<hr/>

<h3 id="typing-sound-var">
  <span class="reference-type">var </span><code>typing_sound</code>
  <span class="default-value"> : <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">Dictionary</a></span>
</h3>
<p>
  Typing sound for the character portrait. This is a dictionary containing the sound data for typing sounds.
  
  Default values:
</p>
```gdscript
{
  "path": "",
  "volume": 1.0,
  "pitch": 1.0
}
```
<p>*(Not used yet, typing sounds implementation is pending)!*</p>
<hr/>
