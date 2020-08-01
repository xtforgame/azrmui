"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _FdiDialog = _interopRequireDefault(require("./FdiDialog"));

var _FdiButton = _interopRequireDefault(require("./FdiButton"));

var _useFormDialogInput = _interopRequireDefault(require("./useFormDialogInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = props => {
  const {
    Button = _FdiButton.default,
    Dialog = _FdiDialog.default,
    label,
    title,
    value
  } = props;
  const {
    renderButton: rb = propsForButton => _react.default.createElement(Button, _extends({
      label: label,
      value: propsForButton.valueForDisplay,
      onClick: propsForButton.handleOpen,
      onKeyDown: propsForButton.handleOpen
    }, propsForButton.buttonProps)),
    renderDialog: rd = propsForDialog => _react.default.createElement(Dialog, _extends({
      title: title != null ? title : label,
      value: value
    }, propsForDialog.dialogProps))
  } = props;
  const {
    renderButton,
    renderDialog
  } = (0, _useFormDialogInput.default)(_objectSpread({}, props, {
    renderButton: rb,
    renderDialog: rd
  }), {
    overwriteProps: {
      label,
      title
    }
  });
  return _react.default.createElement(_react.default.Fragment, null, renderButton(), renderDialog());
};

exports.default = _default;