"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _styles = require("@material-ui/core/styles");

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogContentText = _interopRequireDefault(require("@material-ui/core/DialogContentText"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const useStyles = (0, _styles.makeStyles)(theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  flex1: {
    flex: 1
  },
  appBar: {
    position: 'relative'
  },
  paper: {
    margin: 'auto'
  }
}));

var _default = props => {
  const {
    title,
    contents,
    contentText,
    buttonComponents = {},
    buttonTexts = {},
    dialogProps,
    children,
    fullScreen,
    onClose
  } = props;

  const handleClose = result => (...args) => {
    onClose(result, ...args);
  };

  const classes = useStyles();
  const ConfirmButton = buttonComponents.yes || buttonComponents.confirm || _Button.default;
  const CancelButton = buttonComponents.no || buttonComponents.cancel || _Button.default;
  const ConfirmButtonText = buttonTexts.yes || buttonTexts.confirm || 'Confirm';
  const CancelButtonText = buttonTexts.no || buttonTexts.cancel || 'Cancel';
  return _react.default.createElement(_Dialog.default, _extends({
    fullWidth: true,
    fullScreen: fullScreen,
    onClose: handleClose(false),
    scroll: "paper",
    "aria-labelledby": "form-dialog-title",
    classes: {
      paper: classes.paper
    }
  }, dialogProps), fullScreen && _react.default.createElement(_AppBar.default, {
    className: (0, _clsx.default)(classes.appBar)
  }, _react.default.createElement(_Toolbar.default, null, _react.default.createElement(_IconButton.default, {
    color: "inherit",
    className: (0, _clsx.default)(classes.menuButton),
    onClick: handleClose(false),
    "aria-label": "Close"
  }, _react.default.createElement(_Close.default, null)), _react.default.createElement(_Typography.default, {
    variant: "h6",
    color: "inherit",
    className: (0, _clsx.default)(classes.flex1)
  }, title || ''))), !fullScreen && _react.default.createElement(_DialogTitle.default, {
    id: "form-dialog-title"
  }, title || ''), !!(contents || contentText) && _react.default.createElement(_DialogContent.default, null, contents, !contents && _react.default.createElement(_DialogContentText.default, null, contentText)), children, _react.default.createElement(_DialogActions.default, null, _react.default.createElement(CancelButton, {
    onClick: handleClose(false)
  }, CancelButtonText), _react.default.createElement(ConfirmButton, {
    onClick: handleClose(true),
    variant: "contained",
    color: "primary"
  }, ConfirmButtonText)));
};

exports.default = _default;