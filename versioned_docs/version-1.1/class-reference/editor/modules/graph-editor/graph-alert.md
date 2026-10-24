---
sidebar_position: 2
---

# EditorSproutyDialogsAlert

**Inherits**: [MarginContainer](https://docs.godotengine.org/en/stable/classes/class_margincontainer.html)

## Description

Alert component to display errors and warnings in graph editor. It provides methods to show, hide, and focus the alert with animated transitions.

## Properties

| Type                          | Name                          | Default                             |
| ----------------------------- | ----------------------------- | ----------------------------------- |
| [AlertType](#alert-type-enum) | [alert_type](#alert-type-var) | [AlertType](#alert-type-enum).ERROR |

## Methods

| Return Type | Method                                                                                                                |
| ----------- | --------------------------------------------------------------------------------------------------------------------- |
| void        | [show_alert](#show-alert-method)(message: [String](https://docs.godotengine.org/en/stable/classes/class_string.html)) |
| void        | [hide_alert](#hide-alert-method)()                                                                                    |

## Enumerations

<h3 id="alert-type-enum">
  <span class="reference-type">enum </span><code>AlertType</code>
</h3>
<p>Alert type to display.</p>
<ul>
  <li>
    <h4><a target="_blank" href="#alert-type-enum">AlertType </a><code>ERROR</code> <span class="default-value"> = 0</span></h4>
    <p>Error alert type.</p>
  </li>
  <li>
    <h4><a target="_blank" href="#alert-type-enum">AlertType </a><code>WARNING</code> <span class="default-value"> = 1</span></h4>
    <p>Warning alert type.</p>
  </li>
</ul>
<hr/>

## Property Descriptions

<h3 id="alert-type-var">
  <span class="reference-type">var </span><code>alert_type</code>
  <span class="default-value"> : <a target="_blank" href="#alert-type-enum">AlertType</a> = AlertType.ERROR</span>
</h3>
<p>Alert type to display. Determines the icon and styling of the alert.</p>
<hr/>

## Method Descriptions

<h3 id="show-alert-method">
  <span class="reference-type">func </span><code>show_alert</code><span class="parameters">(message: <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>
  Show an alert with the given message. Displays the alert with a slide-in animation from the right.
</p>
<hr/>

<h3 id="hide-alert-method">
  <span class="reference-type">func </span><code>hide_alert</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>
  Hide error alert and clean text error. Plays a slide-out animation and removes the alert from the scene.
</p>
<hr/>
