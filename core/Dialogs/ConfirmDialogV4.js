"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ConfirmDialogV = _interopRequireDefault(require("./ConfirmDialogV3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = props => {
  const {
    title,
    contents,
    contentText,
    buttonComponents,
    buttonTexts,
    onClose,
    children,
    fullScreen
  } = props,
        dialogProps = _objectWithoutProperties(props, ["title", "contents", "contentText", "buttonComponents", "buttonTexts", "onClose", "children", "fullScreen"]);

  return _react.default.createElement(_ConfirmDialogV.default, {
    title: title,
    contents: contents,
    contentText: contentText,
    buttonComponents: buttonComponents,
    buttonTexts: buttonTexts,
    onClose: onClose,
    fullScreen: fullScreen,
    dialogProps: dialogProps
  }, children);
};

exports.default = _default;