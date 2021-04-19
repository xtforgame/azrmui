"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = props => {
  const {
    onKeyDown = () => {},
    onCompositionStart = () => {},
    onCompositionUpdate = () => {},
    onCompositionEnd = () => {},
    onPressEnter,
    onPressEnterCheckCondition
  } = props,
        rest = _objectWithoutProperties(props, ["onKeyDown", "onCompositionStart", "onCompositionUpdate", "onCompositionEnd", "onPressEnter", "onPressEnterCheckCondition"]);

  const [isOnComposition, setIsOnComposition] = (0, _react.useState)(false);

  const onKeyPressed = e => {
    const {
      onPressEnter = () => {},
      multiline
    } = props;
    const {
      onPressEnterCheckCondition = event => !multiline || event.nativeEvent.shiftKey
    } = props;

    if (!isOnComposition && e.keyCode === 13 && onPressEnterCheckCondition(e)) {
      onPressEnter(e);
    }
  };

  const handleComposition = e => {
    if (e.type === 'compositionend') {
      setIsOnComposition(false);
    } else {
      setIsOnComposition(true);
    }
  };

  return _react.default.createElement(_TextField.default, _extends({
    variant: "outlined",
    onKeyDown: e => {
      onKeyDown(e);
      onKeyPressed(e);
    },
    onCompositionStart: e => {
      onCompositionStart(e);
      handleComposition(e);
    },
    onCompositionUpdate: e => {
      onCompositionUpdate(e);
      handleComposition(e);
    },
    onCompositionEnd: e => {
      onCompositionEnd(e);
      handleComposition(e);
    }
  }, rest));
};

exports.default = _default;