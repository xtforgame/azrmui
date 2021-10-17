"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = props => {
  const {
    classes,
    locale,
    dispatch,
    changeLocale,
    regionCode
  } = props,
        rest = _objectWithoutProperties(props, ["classes", "locale", "dispatch", "changeLocale", "regionCode"]);

  const [open, setOpen] = (0, _react.useState)(false);
  const [anchorEl, setAnchorEl] = (0, _react.useState)(null);

  const handleMenuItemClick = (event, index, locale) => {};

  const getMenuItmes = () => ['TW', 'CN'].map((_locale, i) => _react.default.createElement(_MenuItem.default, {
    key: _locale,
    selected: true,
    onClick: event => handleMenuItemClick(event, i, _locale)
  }, _locale));

  const handleClick = event => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleRequestClose = () => {
    setOpen(false);
  };

  return _react.default.createElement("div", null, _react.default.createElement(_IconButton.default, _extends({
    color: "inherit",
    "aria-owns": open ? 'language-menu' : null,
    "aria-haspopup": "true"
  }, rest, {
    onClick: handleClick
  }), _react.default.createElement("img", {
    alt: regionCode,
    src: `https://lipis.github.io/flag-icon-css/flags/4x3/${regionCode.toLowerCase()}.svg`,
    width: "24"
  })), _react.default.createElement(_Menu.default, {
    id: "simple-menu",
    anchorEl: anchorEl,
    open: open,
    onClose: handleRequestClose
  }, getMenuItmes()));
};

exports.default = _default;