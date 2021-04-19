"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _uuid = require("uuid");

var _OutlinedInput = _interopRequireDefault(require("@material-ui/core/OutlinedInput"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = props => {
  const {
    id: idFromProps,
    name,
    label,
    helperText,
    fullWidth,
    margin,
    formProps,
    inputProps,
    children,
    labelProps,
    helperTextProps,
    items,
    idKey = 'id',
    valueKey = 'value',
    labelKey = 'label'
  } = props,
        rest = _objectWithoutProperties(props, ["id", "name", "label", "helperText", "fullWidth", "margin", "formProps", "inputProps", "children", "labelProps", "helperTextProps", "items", "idKey", "valueKey", "labelKey"]);

  const [id] = (0, _react.useState)(idFromProps || (0, _uuid.v4)());
  const [labelWidth, setLabelWidth] = (0, _react.useState)(0);
  const inputLabelRef = (0, _react.useRef)(null);
  (0, _react.useLayoutEffect)(() => {
    if (inputLabelRef.current) {
      setLabelWidth(_reactDom.default.findDOMNode(inputLabelRef.current).offsetWidth);
    }
  }, [label]);
  return _react.default.createElement(_FormControl.default, _extends({
    variant: "outlined",
    margin: margin || 'normal',
    fullWidth: true
  }, formProps), !!label && _react.default.createElement(_InputLabel.default, _extends({
    ref: inputLabelRef,
    htmlFor: id
  }, labelProps), label), _react.default.createElement(_Select.default, _extends({
    input: _react.default.createElement(_OutlinedInput.default, _extends({}, inputProps, {
      labelWidth: labelWidth,
      name: name,
      id: id
    }))
  }, rest), items && items.map(i => _react.default.createElement(_MenuItem.default, {
    key: i[idKey] || i[valueKey],
    value: i[valueKey]
  }, i[labelKey])), children), !!helperText && _react.default.createElement(_FormHelperText.default, _extends({
    id: `${id}-helper-text`
  }, helperTextProps), helperText));
};

exports.default = _default;