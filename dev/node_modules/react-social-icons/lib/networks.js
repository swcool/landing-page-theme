'use strict';

exports.__esModule = true;
exports.KEYS = undefined;
exports.iconFor = iconFor;
exports.maskFor = maskFor;
exports.colorFor = colorFor;
exports.keyFor = keyFor;
exports.keysFor = keysFor;

var _networksDb = require('./_networks-db');

var _networksDb2 = _interopRequireDefault(_networksDb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_KEY = 'sharethis';
var KEYS = exports.KEYS = Object.keys(_networksDb2.default);
var KEYS_REGEX = new RegExp('(?:https?:\\/\\/(?:[a-z0-9]*.)?)?(' + KEYS.join('|') + ').*');

function iconFor(key) {
  return _networksDb2.default[key] ? _networksDb2.default[key].icon : null;
}

function maskFor(key) {
  return _networksDb2.default[key] ? _networksDb2.default[key].mask : null;
}

function colorFor(key) {
  return _networksDb2.default[key] ? _networksDb2.default[key].color : null;
}

function keyFor(url) {
  if (!url) {
    return DEFAULT_KEY;
  }

  var key = url.replace(KEYS_REGEX, '$1');
  return key === url ? DEFAULT_KEY : key;
}

function keysFor(urls) {
  if (!urls || !Array.isArray(urls) || urls.length === 0) {
    return [];
  }

  return urls.map(keyFor);
}