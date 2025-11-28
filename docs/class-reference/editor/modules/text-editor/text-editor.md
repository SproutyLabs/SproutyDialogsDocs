---
sidebar_position: 1
---

# EditorSproutyDialogsTextEditor

**Inherits**: [Panel](https://docs.godotengine.org/en/stable/classes/class_panel.html)

## Description

The text editor component is a panel that allows the user to add text effects, font styles, colors and others using [BBCode tags](https://docs.godotengine.org/en/latest/tutorials/ui/bbcode_in_richtextlabel.html) in a user friendly way.

The text editor is shown when the user clicks on a expand button from a [ExpandableTextBox](/docs/class-reference/editor/components/expandable-text-box).

## Methods

| Return Type                                                                                                                                                | Method                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [CodeEdit](https://docs.godotengine.org/en/stable/classes/class_codeedit.html)                                                                             | [get_text_input](#get-text-input-method)()                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| void                                                                                                                                                       | [show_text_editor](#show-text-editor-method)(text_box: [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html))                                                                                                                                                                                                                                                                                                                                                                |
| void                                                                                                                                                       | [update_text_editor](#update-text-editor-method)(text_box: [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html))                                                                                                                                                                                                                                                                                                                                                            |
| void                                                                                                                                                       | [hide_text_editor](#hide-text-editor-method)()                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| void                                                                                                                                                       | [change_option_bar](#change-option-bar-method)(bar_index: [int](https://docs.godotengine.org/en/stable/classes/class_int.html))                                                                                                                                                                                                                                                                                                                                                                     |
| [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)\[[Vector2i](https://docs.godotengine.org/en/stable/classes/class_vector2i.html)\] | [get_selected_text_position](#get-selected-text-position-method)()                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)\[[Vector2i](https://docs.godotengine.org/en/stable/classes/class_vector2i.html)\] | [find_tags_around_cursor](#find-tags-around-cursor-method)(open_tag: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), close_tag: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                                                                                                                                                                                             |
| void                                                                                                                                                       | [insert_tags_on_selected_text](#insert-tags-on-selected-text-method)(open_tag: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), close_tag: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), add_on_empty: [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html), placeholder: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                    |
| void                                                                                                                                                       | [insert_tags_at_cursor_pos](#insert-tags-at-cursor-pos-method)(open_tag: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), close_tag: [String](https://docs.godotengine.org/en/stable/classes/class_string.html))                                                                                                                                                                                                                                                         |
| void                                                                                                                                                       | [update_code_tags](#update-code-tags-method)(open_tag: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), close_tag: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), ignore_attr: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), add_on_empty: [bool](https://docs.godotengine.org/en/stable/classes/class_bool.html), add_another_tag: [Array](https://docs.godotengine.org/en/stable/classes/class_array.html)) |
| void                                                                                                                                                       | [add_attribute_to_tag](#add-attribute-to-tag-method)(tag_name: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), attr: [String](https://docs.godotengine.org/en/stable/classes/class_string.html), value: [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html), default-value: [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html))                                                                                      |

## Method Descriptions

<h3 id="get-text-input-method">
  <span class="reference-type">func </span><code>get_text_input</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_codeedit.html">CodeEdit</a></span>
</h3>
<p>
  Return the text input from the text editor.
</p>
<hr/>

<h3 id="show-text-editor-method">
  <span class="reference-type">func </span><code>show_text_editor</code><span class="parameters">(text_box: <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>
  Show the text editor. Needs a [LineEdit](https://docs.godotengine.org/en/stable/classes/class_lineedit.html) or [TextEdit](https://docs.godotengine.org/en/stable/classes/class_textedit.html) from where to get and update the text.
</p>
<hr/>

<h3 id="update-text-editor-method">
  <span class="reference-type">func </span><code>update_text_editor</code><span class="parameters">(text_box: <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>
  Update the text editor with the text box content. If the text editor is visible and a different text box is provided, switches to editing that text box's content.
</p>
<hr/>

<h3 id="hide-text-editor-method">
  <span class="reference-type">func </span><code>hide_text_editor</code><span class="parameters">()</span><span class="return-type"> -> void</span>
</h3>
<p>Hide the text editor and clear its content.</p>
<hr/>

<h3 id="change-option-bar-method">
  <span class="reference-type">func </span><code>change_option_bar</code><span class="parameters">(bar_index: <a href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>
  Change the current option bar shown in the text editor. Different option bars provide different formatting tools (text styles, colors, outline, variables, URLs, etc.).
</p>
<hr/>

<h3 id="get-selected-text-position-method">
  <span class="reference-type">func </span><code>get_selected_text_position</code><span class="parameters">()</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>[<a href="https://docs.godotengine.org/en/stable/classes/class_vector2i.html">Vector2i</a>]</span>
</h3>
<p>
  Get the position of the selected text in the text input. Returns an array of two [Vector2i](https://docs.godotengine.org/en/stable/classes/class_vector2i.html) elements: the first is the start position (column, line) and the second is the end position (column, line).
</p>
<hr/>

<h3 id="find-tags-around-cursor-method">
  <span class="reference-type">func </span><code>find_tags_around_cursor</code><span class="parameters">(open_tag: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, close_tag: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> <a href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a>[<a href="https://docs.godotengine.org/en/stable/classes/class_vector2i.html">Vector2i</a>]</span>
</h3>
<p>
  Find the given tags around the cursor position. Returns an array with the positions of the opening and closing tags, or an empty array if tags are not found around the cursor.
</p>
<hr/>

<h3 id="insert-tags-on-selected-text-method">
  <span class="reference-type">func </span><code>insert_tags_on_selected_text</code><span class="parameters">(open_tag: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, close_tag: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, add_on_empty: <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = false, placeholder: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = "")</span><span class="return-type"> -> void</span>
</h3>
<p>
  Insert tags in the selected text. If there is no text selected, do nothing or add tags with a placeholder. If <code>add_on_empty</code> is true, the placeholder will be added between the tags.
</p>
<hr/>

<h3 id="insert-tags-at-cursor-pos-method">
  <span class="reference-type">func </span><code>insert_tags_at_cursor_pos</code><span class="parameters">(open_tag: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, close_tag: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>Insert tags at the cursor position without requiring selected text.</p>
<hr/>

<h3 id="update-code-tags-method">
  <span class="reference-type">func </span><code>update_code_tags</code><span class="parameters">(open_tag: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, close_tag: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, ignore_attr: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a> = "", add_on_empty: <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html">bool</a> = false, add_another_tag: <a href="https://docs.godotengine.org/en/stable/classes/class_array.html">Array</a> = [])</span><span class="return-type"> -> void</span>
</h3>
<p>
  Update the code tags in the selected text. With <code>ignore_attr</code> you can specify an attribute that will not be updated. If there is no text selected, do nothing or add tags with a placeholder if <code>add_on_empty</code> is true. For some cases, an additional tag can be added using <code>add_another_tag</code> array with the open and close tag strings.
</p>
<hr/>

<h3 id="add-attribute-to-tag-method">
  <span class="reference-type">func </span><code>add_attribute_to_tag</code><span class="parameters">(tag_name: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, attr: <a href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</a>, value: <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a>, default-value: <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html">Variant</a>)</span><span class="return-type"> -> void</span>
</h3>
<p>
  Add a tag attribute to the selected text. If the value is the default value, the attribute will be removed from the tag.
</p>
<hr/>
