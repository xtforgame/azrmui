"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const getDefaultOnChange = (props, blockEvent) => e => {
  if (e.stopPropagation && e.preventDefault && blockEvent) {
    e.stopPropagation();
    e.preventDefault();
  } else {
    const {
      onChange
    } = props;

    if (onChange) {
      onChange(e);
    }
  }
};

const getDefaultOnClick = (props, blockEvent) => e => {
  if (blockEvent) {
    e.stopPropagation();
    e.preventDefault();
  }

  const {
    onClick
  } = props;

  if (onClick) {
    onClick(e);
  }
};

var _default = (_ref) => {
  let {
    inputProps,
    dontBlockEvent,
    Content
  } = _ref,
      props = _objectWithoutProperties(_ref, ["inputProps", "dontBlockEvent", "Content"]);

  return _react.default.createElement(_TextField.default, _extends({
    variant: "outlined"
  }, props, {
    value: " ",
    InputLabelProps: {
      shrink: true
    },
    InputProps: {
      inputComponent: Content,
      inputProps
    },
    onChange: getDefaultOnChange(props, !dontBlockEvent),
    onClick: getDefaultOnClick(props, !dontBlockEvent)
  }));
};

exports.default = _default;