"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _IconWithTextToolbar = _interopRequireDefault(require("../Toolbars/IconWithTextToolbar"));

var _SearchToolbar = _interopRequireDefault(require("../Toolbars/SearchToolbar"));

var _FileManager = _interopRequireDefault(require("./FileManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = props => {
  const {
    customProps = {}
  } = props,
        rest = _objectWithoutProperties(props, ["customProps"]);

  const [isSearching, setIsSearching] = (0, _react.useState)(false);
  const [searchText, setSearchText] = (0, _react.useState)('');

  const rawFileFilter = customProps.fileFilter || ((info, {
    isSearching,
    searchText
  }, options) => {
    if (!isSearching) {
      return true;
    }

    return info.relPath && info.relPath.includes(searchText);
  });

  const searchInfo = {
    isSearching,
    searchText
  };

  const fileFilter = (info, options) => rawFileFilter(info, searchInfo, options);

  const finishSearch = () => {
    setSearchText('');
    setIsSearching(false);
  };

  let toolbar = _react.default.createElement(_IconWithTextToolbar.default, {
    disableHeaderLeftButton: true,
    title: "Select File",
    headerContent: _react.default.createElement(_IconButton.default, {
      color: "inherit",
      onClick: () => setIsSearching(true),
      "aria-label": "Search"
    }, _react.default.createElement(_Search.default, null))
  });

  if (isSearching) {
    toolbar = _react.default.createElement(_SearchToolbar.default, {
      value: searchText,
      onChange: e => setSearchText(e.target.value),
      onCancel: finishSearch
    });
  }

  return _react.default.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minHeight: 1
    }
  }, toolbar, _react.default.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minHeight: 1
    }
  }, _react.default.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'hidden'
    }
  }, _react.default.createElement(_FileManager.default, _extends({
    customProps: _objectSpread({
      fileFilter
    }, customProps)
  }, rest)))));
};

exports.default = _default;