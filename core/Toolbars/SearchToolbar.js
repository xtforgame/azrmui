"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _FormInputs = require("../FormInputs");

var _common = _interopRequireDefault(require("../../styles/common"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = theme => _objectSpread({}, (0, _common.default)(theme, ['flex', 'appBar']), {
  grow: {
    flexGrow: 1
  }
});

class SearchToolbar extends _react.default.PureComponent {
  render() {
    const {
      classes,
      value,
      onChange,
      onCancel,
      toolbarProps
    } = this.props;
    return _react.default.createElement(_Toolbar.default, toolbarProps, _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
      className: classes.grow
    }), _react.default.createElement(_FormInputs.HeaderSearchInput, {
      value: value,
      onChange: onChange
    }), _react.default.createElement(_IconButton.default, {
      color: "inherit",
      onClick: onCancel,
      "aria-label": "Search"
    }, _react.default.createElement(_Close.default, null))));
  }

}

var _default = (0, _styles.withStyles)(styles)(SearchToolbar);

exports.default = _default;