---
sidebar_position: 12
---

# EditorSproutyDialogsSceneField

**Inherits**: [HBoxContainer](https://docs.godotengine.org/en/stable/classes/class_hboxcontainer.html)

## Description

Component that allows to select a scene and show its path in the field. It has buttons to create a new scene of a given type and go to edit the scene.

## Properties

| Type                          | Name                          | Default |
| ----------------------------- | ----------------------------- | ------- |
| [SceneType](#scene-type-enum) | [scene_type](#scene-type-var) | -       |

## Methods

| Return Type                                                                | Method                                                                                                                     |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| void                                                                       | [set_scene_type](#set-scene-type-method)(type: [SceneType](#scene-type-enum))                                              |
| [int](https://docs.godotengine.org/en/stable/classes/class_int.html)       | [get_scene_uid](#get-scene-uid-method)()                                                                                   |
| [String](https://docs.godotengine.org/en/stable/classes/class_string.html) | [get_scene_path](#get-scene-path-method)()                                                                                 |
| void                                                                       | [set_scene_path](#set-scene-path-method)(path: [String](https://docs.godotengine.org/en/stable/classes/class_string.html)) |
| void                                                                       | [clear_path](#clear-path-method)()                                                                                         |

## Signals

<h3 id="scene-path-changed-signal">
  <span class="reference-type">signal </span><code>scene_path_changed</code>
  <span class="parameters">(path: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span>
</h3>
<p>Emitted when the scene is changed.</p>
<hr/>

## Enumerations

<h3 id="scene-type-enum">
  <span class="reference-type">enum </span><code>SceneType</code>
</h3>
<p>Scene types available for selection</p>

- <h4><a target="_blank" href="#scene-type-enum">SceneType </a><code>DIALOG_BOX</code> <span class="default-value"> = 0</span></h4>
  <p>Dialog box scene. The root of the scene must be a [DialogBox](/docs/class-reference/nodes/dialog-box.md) node.</p>
- <h4><a target="_blank" href="#scene-type-enum">SceneType </a><code>PORTRAIT</code> <span class="default-value"> = 1</span></h4>
  <p>Portrait scene. The root of the scene must be a [DialogPortrait](/docs/class-reference/nodes/dialog-portrait.md) node.</p>

<hr/>

## Property Descriptions

<h3 id="scene-type-var">
  <span class="reference-type">var </span><code>scene_type</code>
  <span class="default-value"> : <a target="_blank" href="#scene-type-enum">SceneType</a></span>
</h3>
<p>Scene type to load. Determines which scene types are available for selection and validation.</p>
<hr/>

## Method Descriptions

<h3 id="set-scene-type-method">
  <span class="reference-type">func </span><code>set_scene_type</code><span class="parameters">(type: <a target="_blank" href="#scene-type-enum">SceneType</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set the scene type to load. Updates the resource picker settings and dialog configuration based on the selected scene type.</p>
<hr/>

<h3 id="get-scene-uid-method">
  <span class="reference-type">func </span><code>get_scene_uid</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a></span>
</h3>
<p>Returns the UID of the selected scene. Returns -1 if no valid scene is selected.</p>
<hr/>

<h3 id="get-scene-path-method">
  <span class="reference-type">func </span><code>get_scene_path</code><span class="parameters">()</span><span class="return-type"> -> <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a></span>
</h3>
<p>Returns the current scene path in the field. Returns an empty string if the path is not valid.</p>
<hr/>

<h3 id="set-scene-path-method">
  <span class="reference-type">func </span><code>set_scene_path</code><span class="parameters">(path: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Set the scene path in the field. Validates the scene before setting it.</p>
<hr/>

<h3 id="clear-path-method">
  <span class="reference-type">func </span><code>clear_path</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Clear the current value of the field.</p>
<hr/>
