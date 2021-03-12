"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Breadcrumbs = _interopRequireDefault(require("@material-ui/core/Breadcrumbs"));

var _Link = _interopRequireDefault(require("@material-ui/core/Link"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _NavigateNext = _interopRequireDefault(require("@material-ui/icons/NavigateNext"));

var _reactSwipeableViews = _interopRequireDefault(require("react-swipeable-views"));

var _reactSwipeableViewsUtils = require("react-swipeable-views-utils");

var _InputDialog = _interopRequireDefault(require("../Dialogs/InputDialog"));

var _useFormDialogInput = _interopRequireDefault(require("../FormInputs/FormDialogInput/useFormDialogInput"));

var _FolderView = _interopRequireDefault(require("./FolderView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const invalidFolderRegex = /[<>:"/|?*]/;
const VirtualizeSwipeableViews = (0, _reactSwipeableViewsUtils.bindKeyboard)((0, _reactSwipeableViewsUtils.virtualize)(_reactSwipeableViews.default));

function defaultRenderFolderView(params, _ref) {
  let {
    viewPaths
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["viewPaths"]);

  const {
    index,
    key
  } = params;
  return _react.default.createElement(_FolderView.default, _extends({
    key: key,
    pathKey: viewPaths.join('/'),
    index: index,
    paths: viewPaths
  }, rest));
}

function _default(props) {
  const {
    getFileList,
    createFileOrFolder = async () => {},
    filenameValidater = t => {
      if (!t) {
        return 'folder name is empty';
      }

      if (invalidFolderRegex.test(t)) {
        return 'folder name contains invalid character: <, >, :, ", /, \\, |, ?, *';
      }

      return undefined;
    },
    updateViewCallbacks = () => null,
    canCreate = async () => {},
    onPathsChange = () => {},
    renderFolderView: rfv,
    renderListItem,
    onSelect,
    selection,
    SwipeableViewsProps,
    customProps,
    fileFilter,
    value,
    onChange = () => {}
  } = props;
  const [controlled] = (0, _react.useState)(!!value);
  let [paths, _setPaths] = (0, _react.useState)(value || []);

  if (controlled && value) {
    paths = value;
    _setPaths = onChange;
  }

  const setPaths = paths => {
    onPathsChange(paths);

    _setPaths(paths);
  };

  const currentPathKey = paths.join('/');
  const renderFolderView = rfv || defaultRenderFolderView;
  const [createFileOrFolderInfo, setCreateFileOrFolderInfo] = (0, _react.useState)(null);
  const {
    renderDialog,
    useDialogWithButtonStateResult: [, {
      handleOpen = () => {}
    }]
  } = (0, _useFormDialogInput.default)({
    displayValue: v => v,
    onChange: filename => {
      if (filename && typeof filename === 'string' && createFileOrFolderInfo && createFileOrFolderInfo.cb) {
        const result = createFileOrFolder(_objectSpread({
          filename
        }, createFileOrFolderInfo));

        if (typeof result === 'string' || !result) {
          createFileOrFolderInfo.cb(result);
        } else {
          result.then(result => createFileOrFolderInfo.cb(result));
        }
      }
    },
    onOpen: data => {
      setCreateFileOrFolderInfo(data);
    },
    onClose: () => {
      setCreateFileOrFolderInfo(null);
    },
    value,
    renderButton: ({
      buttonProps
    }) => _react.default.createElement(_Button.default, _extends({
      variant: "contained"
    }, buttonProps), "File Picker"),
    renderDialog: ({
      value,
      handleClose,
      dialogProps
    }) => _react.default.createElement(_InputDialog.default, {
      title: "Create Folder",
      label: "Folder Name",
      validator: filenameValidater,
      asyncValidator: async filename => canCreate(_objectSpread({
        filename,
        type: 'folder'
      }, createFileOrFolderInfo)),
      dialogProps: dialogProps,
      onClose: handleClose
    })
  });
  return _react.default.createElement("div", {
    style: {
      height: '100%',
      minHeight: 200,
      display: 'flex',
      flexDirection: 'column'
    }
  }, _react.default.createElement("div", {
    style: {
      width: '100%',
      flexShrink: 0,
      paddingTop: 4,
      paddingBottom: 4,
      paddingLeft: 12,
      paddingRight: 12
    }
  }, _react.default.createElement(_Breadcrumbs.default, {
    key: paths.length,
    maxItems: 5,
    itemsBeforeCollapse: 2,
    itemsAfterCollapse: 2,
    separator: _react.default.createElement(_NavigateNext.default, {
      fontSize: "small"
    }),
    "aria-label": "breadcrumb"
  }, _react.default.createElement(_Link.default, {
    color: "inherit",
    href: "/",
    onClick: event => {
      event.preventDefault();
      setPaths([]);
    }
  }, "Root"), paths.slice(0, paths.length - 1).map((p, i) => _react.default.createElement(_Link.default, {
    key: p,
    color: "inherit",
    href: "/",
    onClick: event => {
      event.preventDefault();
      setPaths(paths.slice(0, i + 1));
    }
  }, p)), !!paths.length && _react.default.createElement(_Typography.default, {
    color: "textPrimary"
  }, paths[paths.length - 1]))), _react.default.createElement("div", {
    style: {
      width: '100%',
      flex: 1,
      overflowY: 'scroll',
      paddingTop: 4,
      paddingBottom: 4,
      paddingLeft: 12,
      paddingRight: 12
    }
  }, _react.default.createElement(VirtualizeSwipeableViews, _extends({
    index: paths.length,
    style: {
      height: '100%'
    },
    containerStyle: {
      height: '100%'
    },
    slideStyle: {
      height: '100%',
      position: 'relative'
    }
  }, {}, {
    slideRenderer: slideInfo => {
      const viewPaths = paths.slice(0, slideInfo.index);
      return renderFolderView(slideInfo, {
        handleCreate: (params, cb) => {
          handleOpen({
            params,
            cb
          });
        },
        updateViewCallbacks,
        getFileList,
        renderListItem,
        fullPaths: paths,
        viewPaths,
        setPaths,
        currentPathKey,
        onSelect,
        selection,
        customProps,
        fileFilter
      });
    },
    disabled: true
  }, SwipeableViewsProps))), renderDialog());
}