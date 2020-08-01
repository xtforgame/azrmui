"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useDialogWithButtonState = _interopRequireWildcard(require("../../../hooks/useDialogWithButtonState"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (props, options = {}, dependenciesArray) => {
  const {
    overwriteProps
  } = options;
  const {
    renderButton,
    renderDialog,
    value,
    displayValue = v => v,
    buttonProps: bp,
    dialogProps: dp,
    sharedProps,
    onChange = () => {},
    onOpen = () => {},
    onClose = () => {}
  } = props;
  const useDialogWithButtonStateResult = (0, _useDialogWithButtonState.default)({
    open: v => {
      onOpen(v);
    },
    close: v => {
      if (v !== undefined && v !== _useDialogWithButtonState.Cancel) {
        onChange(v);
      }

      onClose(v);
    },
    dialogProps: dp,
    buttonProps: bp
  });
  const [{
    open,
    exited: dialogExited,
    dialogProps,
    buttonProps
  }, {
    handleOpen,
    handleClose,
    handleExited
  }] = useDialogWithButtonStateResult;
  const valueForDisplay = displayValue(value);

  const propsForButton = _objectSpread({
    handleOpen,
    value,
    valueForDisplay
  }, overwriteProps, {
    buttonProps,
    sharedProps,
    useDialogWithButtonStateResult
  });

  const propsForDialog = _objectSpread({
    open,
    handleClose,
    handleExited,
    value
  }, overwriteProps, {
    dialogProps,
    sharedProps,
    useDialogWithButtonStateResult
  });

  return {
    useDialogWithButtonStateResult,
    propsForButton,
    propsForDialog,
    dialogExited,
    renderButton: () => renderButton(propsForButton),
    renderDialog: () => {
      if (dialogExited) {
        return undefined;
      }

      return renderDialog(propsForDialog);
    }
  };
};

exports.default = _default;