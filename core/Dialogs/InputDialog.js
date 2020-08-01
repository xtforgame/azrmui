"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _useStateWithError = _interopRequireDefault(require("../../hooks/useStateWithError"));

var _FormInputs = require("../FormInputs");

var _ConfirmDialog = _interopRequireDefault(require("./ConfirmDialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = props => {
  const {
    asyncValidator,
    validator,
    onClose = () => null
  } = props;
  const [text, setText, textError, setTextError] = (0, _useStateWithError.default)(props.value || '');

  const handleClose = _result => {
    let result = _result;

    if (result === true) {
      result = text;

      if (validator) {
        const errorText = validator(text);

        if (errorText) {
          setTextError(errorText);
          return;
        }
      }

      if (asyncValidator) {
        Promise.resolve(asyncValidator(text)).then(errorText => {
          if (errorText) {
            setTextError(errorText);
          } else {
            onClose(result);
          }
        }).catch(error => setTextError(error.message));
        return;
      }
    }

    onClose(result);
  };

  const handleEnterForTextField = event => {
    if (event.key === 'Enter') {
      handleClose(true);
      event.preventDefault();
    }
  };

  const {
    id,
    label
  } = props,
        rest = _objectWithoutProperties(props, ["id", "label"]);

  return _react.default.createElement(_ConfirmDialog.default, _extends({}, rest, {
    onClose: handleClose
  }), _react.default.createElement(_DialogContent.default, null, _react.default.createElement(_FormInputs.FormSpace, {
    variant: "content2"
  }), _react.default.createElement(_FormInputs.FormTextField, {
    error: !!textError,
    helperText: textError,
    label: label,
    onKeyPress: handleEnterForTextField,
    value: text,
    onChange: e => setText(e.target.value),
    autoFocus: true,
    margin: "dense",
    fullWidth: true
  })));
};

exports.default = _default;