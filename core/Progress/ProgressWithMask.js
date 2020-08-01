"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _common = _interopRequireDefault(require("../../styles/common"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const useStyles = (0, _styles.makeStyles)(theme => _objectSpread({}, (0, _common.default)(theme, 'flex'), {
  maskedContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    flexDirection: 'column',
    display: 'flex'
  },
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    display: 'flex'
  },
  progress: {}
}));

const ProgressWithMask = props => {
  const {
    color,
    style,
    zIndex,
    backgroundColor,
    delay
  } = props,
        rest = _objectWithoutProperties(props, ["color", "style", "zIndex", "backgroundColor", "delay"]);

  const classes = useStyles();
  const [show, setShow] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    const delayTimeout = setTimeout(() => {
      setShow(true);
    }, delay);
    return () => {
      clearTimeout(delayTimeout);
    };
  }, []);
  const extraStyle = {};

  if (show) {
    if (zIndex != null) {
      extraStyle.zIndex = zIndex;
    }

    if (backgroundColor != null) {
      extraStyle.backgroundColor = backgroundColor;
    }
  }

  return _react.default.createElement("div", _extends({
    className: show ? classes.maskedContainer : classes.container,
    style: _objectSpread({}, style, {}, extraStyle)
  }, rest), _react.default.createElement("div", {
    className: classes.flex1
  }), _react.default.createElement("div", {
    className: classes.flexContainer
  }, _react.default.createElement("div", {
    className: classes.flex1
  }), show && _react.default.createElement(_CircularProgress.default, {
    className: classes.progress,
    size: 50,
    color: color || 'primary',
    thickness: 7
  }), _react.default.createElement("div", {
    className: classes.flex1
  })), _react.default.createElement("div", {
    className: classes.flex1
  }));
};

var _default = ProgressWithMask;
exports.default = _default;