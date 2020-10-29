"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _imageHelpers = require("../../utils/imageHelpers");

var _utils = require("../../common/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const useStyles = (0, _styles.makeStyles)(theme => ({
  input: {
    display: 'none'
  }
}));

const FormFileInput = props => {
  const {
    id,
    accept,
    onLoadEnd = () => {},
    onChange = () => {},
    children,
    inputProps,
    labelProps,
    readFile = _imageHelpers.readFile,
    readFileOption = {}
  } = props;
  const classes = useStyles();
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("input", _extends({}, inputProps, {
    accept: accept,
    className: classes.input,
    id: id,
    type: "file",
    onChange: e => {
      onChange(e);
      const files = Array.from(e.target.files);
      (0, _utils.promiseReduce)(files, (_, file) => readFile(file, readFileOption).then(imgInfo => {
        onLoadEnd(imgInfo);
      }));
    }
  })), _react.default.createElement("label", _extends({}, labelProps, {
    htmlFor: id
  }), children));
};

FormFileInput.propTypes = {
  id: _propTypes.default.string.isRequired
};
var _default = FormFileInput;
exports.default = _default;