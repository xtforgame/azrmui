"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultToPromiseFunc = defaultToPromiseFunc;
exports.toSeqPromise = toSeqPromise;
exports.promiseReduce = promiseReduce;
exports.promiseWait = promiseWait;
exports.toMap = toMap;
exports.isFunction = isFunction;
exports.isFunctionV2 = isFunctionV2;
exports.rightJustify = exports.leftJustify = exports.defaultCallbackPromise = exports.toFloatCurrency = exports.toCurrency = exports.capitalizeFirstLetter = exports.toUnderscore = exports.toCamel = exports.toSafename = exports.toDashed = exports.lowerTheFirstLetter = void 0;

function defaultToPromiseFunc(_, value, index, array) {
  return Promise.resolve(value);
}

function toSeqPromise(inArray, toPrmiseFunc = defaultToPromiseFunc) {
  return inArray.reduce((prev, curr, index, array) => prev.then(() => toPrmiseFunc(prev, curr, index, array)), Promise.resolve());
}

function promiseReduce(inArray, toPrmiseFunc = defaultToPromiseFunc, startValue) {
  return inArray.reduce((prev, curr, index, array) => prev.then(v => toPrmiseFunc(v, curr, index, array)), Promise.resolve(startValue));
}

function promiseWait(waitMillisec) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, waitMillisec);
  });
}

function toMap(inArray, getId, trans = t => t) {
  return inArray.reduce((prev, curr, index, array) => {
    prev[getId(curr, index, array)] = trans(curr, index, array);
    return prev;
  }, {});
}

const defaultCallbackPromise = ({
  result,
  error
}) => {
  if (error) {
    return Promise.reject(error);
  }

  return Promise.resolve(result);
};

exports.defaultCallbackPromise = defaultCallbackPromise;
const getClass = {}.toString;

function isFunction(object) {
  return object && getClass.call(object) === '[object Function]';
}

function isFunctionV2(object) {
  return typeof object === 'function';
}

const lowerTheFirstLetter = str => str.charAt(0).toLowerCase() + str.slice(1);

exports.lowerTheFirstLetter = lowerTheFirstLetter;

const toCamel = str => str.replace(/_([a-z])/g, g => g[1].toUpperCase());

exports.toCamel = toCamel;

const toUnderscore = str => str.replace(/([A-Z])/g, g => `_${g.toLowerCase()}`);

exports.toUnderscore = toUnderscore;

const toDashed = str => lowerTheFirstLetter(toCamel(str)).replace(/([A-Z])/g, g => `-${g.toLowerCase()}`);

exports.toDashed = toDashed;

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

exports.capitalizeFirstLetter = capitalizeFirstLetter;

const toSafename = str => toDashed(str).replace(/-/g, '').toLowerCase();

exports.toSafename = toSafename;

const toCurrency = number => number.toFixed().replace(/\d(?=(\d{3})+$)/g, '$&,');

exports.toCurrency = toCurrency;

const toFloatCurrency = (v, d = 2) => parseFloat(v).toFixed(d).replace(/\d(?=(\d{3})+\.)/g, '$&,');

exports.toFloatCurrency = toFloatCurrency;

const leftJustify = function (s, length, char) {
  const fill = [];

  while (fill.length + s.length < length) {
    fill[fill.length] = char;
  }

  return fill.join('') + s;
};

exports.leftJustify = leftJustify;

const rightJustify = function (s, length, char) {
  const fill = [];

  while (fill.length + s.length < length) {
    fill[fill.length] = char;
  }

  return s + fill.join('');
};

exports.rightJustify = rightJustify;