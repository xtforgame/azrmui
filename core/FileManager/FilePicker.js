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

var _DialogEx = _interopRequireDefault(require("../Dialogs/DialogEx"));

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
    onSelected = () => {},
    filePicker,
    folderPicker
  } = p,
        props = _objectWithoutProperties(p, ["isFileExists", "defaultPaths", "defaultFileName", "onSelected", "filePicker", "folderPicker"]);

  const [value, setValue] = (0, _react.useState)(defaultPaths || []);
  const {
    renderButton,
    renderDialog
  } = (0, _useFormDialogInput.default)({
    displayValue: v => v,
    onChange: v => {
      onSelected(v);
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
    }) => _react.default.createElement(_DialogEx.default, {
      fullHeight: true,
      dialogProps: dialogProps
    }, _react.default.createElement(_WithSearch.default, _extends({}, props, {
      title: "Open",
      value: value,
      onClose: () => handleClose(),
      onChange: setValue,
      onSelect: (info, options) => {
        if (info.type === 'newFolder') {
          options.refresh();
          return;
        }

        if (filePicker) {
          const ps = options.paths.concat([info.relPath]);
          handleClose({
            paths: ps,
            path: ps.join('/'),
            type: 'file'
          });
        }
      }
    })), _react.default.createElement(_DialogActions.default, null, folderPicker && _react.default.createElement(_Button.default, {
      autoFocus: true,
      onClick: () => {
        const ps = value;
        handleClose({
          paths: ps,
          path: ps.join('/'),
          type: 'folder'
        });
      },
      color: "primary"
    }, "Select Folder")))
  });
  return _react.default.createElement(_react.default.Fragment, null, renderButton(), renderDialog());
};

exports.default = _default;