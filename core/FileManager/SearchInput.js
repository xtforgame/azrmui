"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _recompose = require("recompose");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Cancel = _interopRequireDefault(require("@material-ui/icons/Cancel"));

var _FormTextField = _interopRequireDefault(require("../FormInputs/FormTextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const styles = theme => ({});

const SearchInput = props => {
  const {
    id,
    onClear
  } = props,
        rest = _objectWithoutProperties(props, ["id", "onClear"]);

  const endAdornment = _react.default.createElement(_InputAdornment.default, {
    position: "end"
  }, _react.default.createElement(_IconButton.default, {
    onClick: onClear,
    onMouseDown: event => {
      event.preventDefault();
    }
  }, _react.default.createElement(_Cancel.default, null)));

  return _react.default.createElement(_FormTextField.default, _extends({
    id: id,
    InputProps: {
      endAdornment
    }
  }, rest));
};

SearchInput.propTypes = {
  id: _propTypes.default.string.isRequired
};

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles))(SearchInput);

exports.default = _default;