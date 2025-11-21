Prism.languages.gdscript = {
  comment: /#.*/,
  string: {
    pattern:
      /@?(?:("|')(?:(?!\1)[^\n\\]|\\[\s\S])*\1(?!"|')|"""(?:[^\\]|\\[\s\S])*?""")/,
    greedy: true,
  },
  annotation: /@\w+/,
  type: /\b(?<!\$)[A-Z][a-z0-9]*(?:[A-Z][a-z0-9]*)*(?:[A-Z]?)\b/,
  minus_type: /\b(?:void|bool|int|float)\b/,
  "node-reference": /\$\w+/,
  "global-function":
    /\b(?:load|preload|abs|absf|absi|acos|acosh|angle_difference|asin|asinh|atan|atan2|atanh|bytes_to_var_with_objects|ceil|ceilf|ceili|clamp|clampf|clampi|cos|cosh|cubic_interpolate|hash|instance_from_id|inverse_lerp|is_equal_approx|is_finite|is_inf|is_instance_id_valid|is_instance_valid|is_nan|is_same|lerp_angle|lerpf|linear_to_db|log|min|minf|mini|move_toward|nearest_po2|pow|print|print_rich|printerr|printraw|prints|printt|push_error|push_warning|rad_to_deg|rand_from_seed|randi|randi_range|randomize|remap|rid_allocate_id|rid_from_base|rotate_toward|smoothstep|snappedf|snappedi|sqrt|step_decimals|str|str_to_var|tan|tanh|type_string|typeof|var_to_bytes|var_to_bytes_with_objects|var_to_str|weakref|wrap|wrapf|wrapi)\b/,
  keyword:
    /\b(?:and|as|assert|break|breakpoint|class|class_name|const|continue|elif|else|enum|extends|for|func|if|in|is|master|mastersync|match|not|null|or|pass|puppet|puppetsync|remote|remotesync|return|self|setget|signal|static|tool|var|while|yield)\b/,
  "function-definition": {
    pattern: /(?<=func )\b[a-z_]\w*(?=[ \t]*\()/i,
    greedy: true,
  },
  function: {
    pattern: /(?<!func )\b[a-z_]\w*(?=[ \t]*\()/i,
    greedy: true,
  },
  number: [
    /\b0b[01_]+\b|\b0x[\da-fA-F_]+\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.[\d_]+)(?:e[+-]?[\d_]+)?\b/,
    /\b(?:INF|NAN|PI|TAU)\b/,
  ],
  constant: /\b[A-Z][A-Z_\d]*\b/,
  boolean: /\b(?:false|true)\b/,
  operator: /->|:=|&&|\|\||<<|>>|[-+*/%&|!<>=]=?|[~^]/,
  punctuation: /[.:,;()[\]{}]/,
};
