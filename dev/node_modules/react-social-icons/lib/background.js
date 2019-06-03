'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-unused-vars, react/prop-types
function Background(_ref) {
  var networkKey = _ref.networkKey;
  var props = (0, _objectWithoutProperties3.default)(_ref, ['networkKey']);

  return _react2.default.createElement(
    'g',
    (0, _extends3.default)({}, props, { className: 'social-svg-background', style: _styles.socialSvgContent }),
    _react2.default.createElement('circle', { cx: '32', cy: '32', r: '31' })
  );
}

exports.default = Background;