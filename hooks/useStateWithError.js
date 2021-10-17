"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useStateWithError;
exports.Cancel = void 0;

var _react = require("react");

const Cancel = Symbol('Cancel');
exports.Cancel = Cancel;

function useStateWithError(initialState, initialError = '', options) {
  const [state, setState] = (0, _react.useState)(initialState);
  const [error, setError] = (0, _react.useState)(initialError);

  const se = (newState, isReseting = false) => {
    if (options === null || options === void 0 ? void 0 : options.onSetError) {
      options === null || options === void 0 ? void 0 : options.onSetError(newState, isReseting);
    }

    setError(newState);
  };

  const sv = (newState, clearError = true) => {
    if (options === null || options === void 0 ? void 0 : options.onSetState) {
      options === null || options === void 0 ? void 0 : options.onSetState(newState);
    }

    setState(newState);

    if (clearError) {
      se('', true);
    }
  };

  return [state, sv, error, se];
}