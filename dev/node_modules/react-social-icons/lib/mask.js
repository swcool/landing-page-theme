'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _networks = require('./networks');

var _styles = require('./styles.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyle(_ref) {
  var color = _ref.color;
  var networkKey = _ref.networkKey;

  return (0, _extends3.default)({}, _styles.socialSvgMask, {
    fill: color || (0, _networks.colorFor)(networkKey)
  });
}

function Mask(_ref2) {
  var color = _ref2.color;
  var networkKey = _ref2.networkKey;
  var rest = (0, _objectWithoutProperties3.default)(_ref2, ['color', 'networkKey']);

  return _react2.default.createElement(
    'g',
    (0, _extends3.default)({}, rest, { className: 'social-svg-mask', style: getStyle({ color: color, networkKey: networkKey }) }),
    _react2.default.createElement('path', { d: (0, _networks.maskFor)(networkKey) })
  );
}

exports.default = Mask;