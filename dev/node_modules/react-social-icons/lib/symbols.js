'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _networks = require('./networks');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderBackgroundSymbol() {
  return _react2.default.createElement(
    'symbol',
    { id: 'background', viewBox: '0 0 64 64' },
    _react2.default.createElement(
      'g',
      { className: 'social-background' },
      _react2.default.createElement('circle', { cx: '32', cy: '32', r: '31' })
    )
  );
}

function renderSymbols(props) {
  return props.networks.map(function (key) {
    return [_react2.default.createElement(
      'symbol',
      { id: key + '-icon', viewBox: '0 0 64 64' },
      _react2.default.createElement(
        'g',
        { className: 'social-icon' },
        _react2.default.createElement('path', { d: (0, _networks.iconFor)(key) })
      )
    ), _react2.default.createElement(
      'symbol',
      { id: key + '-mask', viewBox: '0 0 64 64' },
      _react2.default.createElement(
        'g',
        { className: 'social-mask' },
        _react2.default.createElement('path', { d: (0, _networks.maskFor)(key) })
      )
    )];
  });
}

function Symbols(props) {
  return _react2.default.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', id: 'social-symbols', version: '1.1' },
    renderBackgroundSymbol(),
    renderSymbols(props)
  );
}

exports.default = Symbols;