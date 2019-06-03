"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  return _react2.default.createElement(
    "div",
    { className: className, style: style },
    status === "sending" && _react2.default.createElement(
      "div",
      { style: { color: "blue" } },
      "sending..."
    ),
    status === "error" && _react2.default.createElement("div", {
      style: { color: "red" },
      dangerouslySetInnerHTML: { __html: message }
    }),
    status === "success" && _react2.default.createElement("div", {
      style: { color: "green" },
      dangerouslySetInnerHTML: { __html: message }
    }),
    _react2.default.createElement("input", {
      ref: function ref(node) {
        return input = node;
      },
      type: "email",
      placeholder: "Your email"
    }),
    _react2.default.createElement(
      "button",
      { onClick: submit },
      "Submit"
    )
  );
};

exports.default = SimpleForm;
module.exports = exports["default"];