"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = props => {
  const {
    children,
    fullHeight,
    dialogProps: {
      onClose
    }
  } = props;

  const handleClose = result => () => {
    onClose(result);
  };

  const style = {
    display: 'flex',
    overflowY: 'hidden',
    width: '100%',
    margin: 0
  };

  if (fullHeight) {
    style.height = '100%';
  }

  return _react.default.createElement(_Dialog.default, _extends({
    maxWidth: "sm",
    fullWidth: true,
    PaperProps: {
      style
    }
  }, props.dialogProps, {
    onClose: handleClose()
  }), children);
};

exports.default = _default;