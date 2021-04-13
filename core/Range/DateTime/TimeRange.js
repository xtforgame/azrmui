"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactI18next = require("react-i18next");

var _FormInputs = require("../../FormInputs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = props => {
  const {
    lowerBound,
    upperBound,
    onLowerBoundChange,
    onUpperBoundChange,
    PickerProps = {},
    Picker1Props = {},
    Picker2Props = {}
  } = props;
  const {
    t
  } = (0, _reactI18next.useTranslation)(['builtin-components']);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_FormInputs.FormTimePicker, _extends({
    label: t('timeStart')
  }, PickerProps, Picker1Props, {
    value: lowerBound,
    onChange: onLowerBoundChange
  })), _react.default.createElement(_FormInputs.FormSpace, {
    variant: "content2"
  }), _react.default.createElement(_FormInputs.FormTimePicker, _extends({
    label: t('timeEnd')
  }, PickerProps, Picker2Props, {
    value: upperBound,
    onChange: onUpperBoundChange
  })));
};

exports.default = _default;