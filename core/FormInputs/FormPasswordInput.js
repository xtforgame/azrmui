"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Visibility = _interopRequireDefault(require("@material-ui/icons/Visibility"));

var _VisibilityOff = _interopRequireDefault(require("@material-ui/icons/VisibilityOff"));

var _FormTextField = _interopRequireDefault(require("./FormTextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = props => {
  const {
    id,
    type = 'password',
    onShowPassswordClick
  } = props,
        rest = _objectWithoutProperties(props, ["id", "type", "onShowPassswordClick"]);

  const endAdornment = _react.default.createElement(_InputAdornment.default, {
    position: "end"
  }, _react.default.createElement(_IconButton.default, {
    onClick: onShowPassswordClick,
    onMouseDown: event => {
      event.preventDefault();
    }
  }, type !== 'password' ? _react.default.createElement(_VisibilityOff.default, null) : _react.default.createElement(_Visibility.default, null)));

  return _react.default.createElement(_FormTextField.default, _extends({
    id: id,
    type: type,
    InputProps: {
      endAdornment
    }
  }, rest));
};

exports.default = _default;