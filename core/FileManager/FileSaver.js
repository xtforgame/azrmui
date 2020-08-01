"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _useFormDialogInput = _interopRequireDefault(require("../FormInputs/FormDialogInput/useFormDialogInput"));

var _useStateWithError = _interopRequireDefault(require("../../hooks/useStateWithError"));

var _useDialogState = _interopRequireWildcard(require("../../hooks/useDialogState"));

var _DialogEx = _interopRequireDefault(require("../Dialogs/DialogEx"));

var _ConfirmDialog = _interopRequireDefault(require("../Dialogs/ConfirmDialog"));

var _FormInputs = require("../FormInputs");

var _WithSearch = _interopRequireDefault(require("./WithSearch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = p => {
  const {
    isFileExists,
    defaultPaths = [],
    defaultFileName = '',
    onSelected = () => {}
  } = p,
        props = _objectWithoutProperties(p, ["isFileExists", "defaultPaths", "defaultFileName", "onSelected"]);

  const [value, setValue] = (0, _react.useState)(defaultPaths || []);
  const [filename, setFilename, filenameError, setFilenameError] = (0, _useStateWithError.default)(defaultFileName || '');
  const [viewCallbacks, updateViewCallbacks] = (0, _react.useState)({
    clearList: () => {},
    refresh: () => {},
    getViewOptions: () => ({})
  });
  let handleOverwriteDialogOpen = null;
  let save = null;
  const {
    renderButton,
    renderDialog,
    useDialogWithButtonStateResult: [, {
      handleClose
    }]
  } = (0, _useFormDialogInput.default)({
    displayValue: v => v,
    onChange: v => {
      onSelected(v);
    },
    onClose: () => {
      setFilename('');
    },
    value,
    renderButton: ({
      buttonProps
    }) => _react.default.createElement(_Button.default, _extends({
      variant: "contained"
    }, buttonProps), "File Saver"),
    renderDialog: ({
      value,
      handleClose,
      dialogProps
    }) => _react.default.createElement(_DialogEx.default, {
      fullHeight: true,
      dialogProps: dialogProps
    }, _react.default.createElement(_WithSearch.default, _extends({}, props, {
      title: "Save As...",
      value: value,
      onChange: setValue,
      onClose: () => handleClose(),
      updateViewCallbacks: updateViewCallbacks,
      onSelect: (info, options) => {
        if (info.type === 'newFolder') {
          options.refresh();
          return;
        }

        setFilename(info.relPath);
      }
    })), _react.default.createElement(_DialogActions.default, null, _react.default.createElement(_FormInputs.FormTextField, {
      error: !!filenameError,
      helperText: filenameError,
      value: filename,
      onChange: e => setFilename(e.target.value),
      autoFocus: true,
      margin: "dense",
      fullWidth: true
    }), _react.default.createElement(_Button.default, {
      autoFocus: true,
      onClick: async () => {
        if (props.canCreate) {
          try {
            const errorMsg = await Promise.resolve(props.canCreate({
              filename,
              type: 'file',
              params: {
                options: viewCallbacks.getViewOptions()
              }
            }));

            if (errorMsg) {
              setFilenameError(errorMsg);
              return;
            }
          } catch (error) {
            setFilenameError(error.message);
            return;
          }
        }

        const fileExists = await Promise.resolve(isFileExists({
          filename,
          type: 'file',
          params: {
            options: viewCallbacks.getViewOptions()
          }
        }));

        if (fileExists) {
          handleOverwriteDialogOpen();
        } else {
          save(handleClose);
        }
      },
      color: "primary"
    }, "Save")))
  });

  save = handleClose => {
    const ps = value.concat([filename]);
    handleClose({
      paths: ps,
      path: ps.join('/'),
      type: 'file'
    });
  };

  const [{
    open,
    exited: overwriteDialogExited,
    dialogProps: overwriteDialogOpenProps
  }, {
    handleOpen: _handleOverwriteDialogOpen,
    handleClose: handleOverwriteDialogClose
  }] = (0, _useDialogState.default)({
    open: v => {},
    close: v => {
      if (v === true) {
        save(handleClose);
      }
    }
  });
  handleOverwriteDialogOpen = _handleOverwriteDialogOpen;
  return _react.default.createElement(_react.default.Fragment, null, renderButton(), renderDialog(), !overwriteDialogExited && _react.default.createElement(_ConfirmDialog.default, {
    title: "Create Folder",
    contentText: "Folder Name",
    onClose: handleOverwriteDialogClose,
    dialogProps: overwriteDialogOpenProps
  }));
};

exports.default = _default;