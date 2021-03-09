"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WithSearch;

var _react = _interopRequireWildcard(require("react"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _SearchInput = _interopRequireDefault(require("./SearchInput"));

var _IconWithTextToolbar = _interopRequireDefault(require("../Toolbars/IconWithTextToolbar"));

var _FileManager = _interopRequireDefault(require("./FileManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function WithSearch(props) {
  const {
    title,
    customProps = {},
    onClose,
    fileFilter: ff = () => true
  } = props,
        rest = _objectWithoutProperties(props, ["title", "customProps", "onClose", "fileFilter"]);

  const [isSearching, setIsSearching] = (0, _react.useState)(false);
  const [searchText, setSearchText] = (0, _react.useState)('');

  const rawFileFilter = (info, {
    isSearching,
    searchText
  }, options) => {
    if (!isSearching) {
      return ff(info, options);
    }

    const result = !!info.relPath && info.relPath.includes(searchText);

    if (result) {
      return ff(info, options);
    }

    return false;
  };

  const searchInfo = {
    isSearching,
    searchText
  };

  const fileFilter = (info, options) => rawFileFilter(info, searchInfo, options);

  const finishSearch = () => {
    setSearchText('');
    setIsSearching(false);
  };

  const toolbar = _react.default.createElement(_IconWithTextToolbar.default, {
    disableHeaderLeftButton: isSearching,
    headerLeftIcon: _react.default.createElement(_Search.default, null),
    onLeftButtonClick: () => setIsSearching(true),
    title: isSearching ? _react.default.createElement(_SearchInput.default, {
      id: "search-file",
      margin: "dense",
      value: searchText,
      onChange: e => setSearchText(e.target.value),
      onClear: finishSearch
    }) : title,
    headerContent: onClose && _react.default.createElement(_IconButton.default, {
      color: "inherit",
      onClick: () => onClose(),
      "aria-label": "close"
    }, _react.default.createElement(_Close.default, null))
  });

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
    customProps: customProps,
    fileFilter: fileFilter
  }, rest)))));
}