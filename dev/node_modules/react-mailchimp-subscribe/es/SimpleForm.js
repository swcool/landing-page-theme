import React from "react";

// a basic form
var SimpleForm = function SimpleForm(_ref) {
  var status = _ref.status,
      message = _ref.message,
      className = _ref.className,
      style = _ref.style,
      onSubmitted = _ref.onSubmitted;

  var input = void 0;
  var submit = function submit() {
    return input && input.value.indexOf("@") > -1 && onSubmitted({
      EMAIL: input.value
    });
  };

  return React.createElement(
    "div",
    { className: className, style: style },
    status === "sending" && React.createElement(
      "div",
      { style: { color: "blue" } },
      "sending..."
    ),
    status === "error" && React.createElement("div", {
      style: { color: "red" },
      dangerouslySetInnerHTML: { __html: message }
    }),
    status === "success" && React.createElement("div", {
      style: { color: "green" },
      dangerouslySetInnerHTML: { __html: message }
    }),
    React.createElement("input", {
      ref: function ref(node) {
        return input = node;
      },
      type: "email",
      placeholder: "Your email"
    }),
    React.createElement(
      "button",
      { onClick: submit },
      "Submit"
    )
  );
};

export default SimpleForm;