"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Fab = _interopRequireDefault(require("@material-ui/core/Fab"));

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _FormFileInput = _interopRequireDefault(require("../FormFileInput"));

var _Buttons = _interopRequireDefault(require("../../../styles/Buttons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = theme => _objectSpread({
  fab: {
    boxShadow: 'none'
  }
}, (0, _Buttons.default)(theme, 'success'));

const AddImageButton = props => {
  const {
    classes,
    color = 'primary',
    Icon = _Add.default,
    buttonProps,
    iconProps
  } = props,
        inputProps = _objectWithoutProperties(props, ["classes", "color", "Icon", "buttonProps", "iconProps"]);

  return _react.default.createElement("div", {
    style: {
      position: 'relative',
      width: 48,
      height: 48,
      padding: 4,
      marginRight: 8
    }
  }, _react.default.createElement(_FormFileInput.default, _extends({
    accept: "image/*"
  }, inputProps, {
    readFileOption: {
      hash: true
    },
    inputProps: {
      multiple: 'multiple',
      value: ''
    }
  }), _react.default.createElement(_Fab.default, _extends({
    component: "span",
    size: "small",
    color: color,
    "aria-label": "add",
    classes: {
      primary: classes.containedPrimary
    },
    className: classes.fab
  }, buttonProps), _react.default.createElement(Icon, iconProps))));
};

var _default = (0, _styles.withStyles)(styles)(AddImageButton);

exports.default = _default;