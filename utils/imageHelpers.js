"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uploadHelpers = require("./uploadHelpers");

Object.keys(_uploadHelpers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _uploadHelpers[key];
    }
  });
});