"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    fontFamily: 'monospace,monospace'
  }
}));

var _default = props => {
  const {
    className
  } = props;
  const classes = useStyles();
  return _react.default.createElement("pre", _extends({}, props, {
    className: (0, _clsx.default)(classes.root, className)
  }));
};

exports.default = _default;