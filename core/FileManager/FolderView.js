"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _ProgressWithMask = _interopRequireDefault(require("../Progress/ProgressWithMask"));

var _ListItem = _interopRequireDefault(require("./ListItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const defaultRenderListItem = (info, options) => _react.default.createElement(_ListItem.default, _extends({
  key: info.name,
  info: info,
  viewOptions: options
}, options));

var _default = props => {
  const {
    index,
    fullPaths,
    paths,
    setPaths,
    getFileList,
    handleCreate,
    updateViewCallbacks,
    fileFilter: ff
  } = props,
        o = _objectWithoutProperties(props, ["index", "fullPaths", "paths", "setPaths", "getFileList", "handleCreate", "updateViewCallbacks", "fileFilter"]);

  const {
    pathKey,
    currentPathKey
  } = props;

  const fileFilter = ff || (() => true);

  const [allList, setAllList] = (0, _react.useState)(null);
  const [refreshKey, setRefreshKey] = (0, _react.useState)(0);
  const al = (0, _react.useRef)();
  const renderListItem = props.renderListItem || defaultRenderListItem;

  const clearList = () => setAllList(null);

  const refresh = () => setRefreshKey(refreshKey + 1);

  const rawCbs = (0, _react.useRef)({
    clearList,
    refresh,
    getViewOptions: () => _objectSpread({
      appendPath: p => setPaths([...paths, p]),
      fullPaths,
      paths
    }, o, {
      clearList,
      refresh,
      handleCreate,
      fileFilter
    })
  });
  rawCbs.current = {
    clearList,
    refresh,
    getViewOptions: () => _objectSpread({
      appendPath: p => setPaths([...paths, p]),
      fullPaths,
      paths
    }, o, {
      clearList,
      refresh,
      handleCreate,
      fileFilter
    })
  };
  const callbacks = (0, _react.useRef)({
    clearList: () => rawCbs.current.clearList(),
    refresh: () => rawCbs.current.refresh(),
    getViewOptions: () => rawCbs.current.getViewOptions({
      clearList,
      refresh,
      getViewOptions: rawCbs.current.getViewOptions
    })
  });
  const options = rawCbs.current.getViewOptions({
    clearList,
    refresh,
    getViewOptions: rawCbs.current.getViewOptions
  });
  (0, _react.useEffect)(() => {
    if (index < 0 || index > paths.length) {
      return;
    }

    if (pathKey === currentPathKey) {
      updateViewCallbacks(callbacks.current);
    }
  }, [index < 0 || index > paths.length, pathKey === currentPathKey]);
  (0, _react.useEffect)(() => {
    setAllList(null);

    if (index < 0 || index > paths.length) {
      return;
    }

    const allList = getFileList(paths);
    al.current = allList;

    if (Array.isArray(allList)) {
      setAllList(allList);
    } else {
      allList.then(_allList => {
        if (al.current === allList) {
          setAllList(_allList);
        }
      });
    }
  }, [index < 0 || index > paths.length, refreshKey]);

  if (!allList) {
    return _react.default.createElement("div", {
      key: index,
      style: {
        height: '100%'
      }
    }, _react.default.createElement(_ProgressWithMask.default, {
      delay: 100
    }));
  }

  const sortFunc = (a, b) => {
    if (a.relPath < b.relPath) {
      return -1;
    }

    if (a.relPath > b.relPath) {
      return 1;
    }

    return 0;
  };

  const filteredList = allList.filter(info => fileFilter(info, options));
  const fileList = filteredList.filter(info => info.type === 'file');
  fileList.sort(sortFunc);
  const folderList = filteredList.filter(info => info.type === 'folder');
  folderList.sort(sortFunc);
  return _react.default.createElement(_List.default, {
    dense: true,
    key: index
  }, renderListItem({
    type: 'newFile',
    name: 'newFile',
    relPath: ''
  }, options), renderListItem({
    type: 'newFolder',
    name: 'newFolder',
    relPath: ''
  }, options), _react.default.createElement(_Divider.default, null), folderList.map(info => renderListItem(info, options)), fileList.map(info => renderListItem(info, options)));
};

exports.default = _default;