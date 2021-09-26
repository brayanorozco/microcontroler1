"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queueDelete = exports.queueUpdate = exports.queueCreate = exports.queueFindEnable = exports.queueView = void 0;

var _bull = _interopRequireDefault(require("bull"));

var _settings = require("../settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var opts = {
  redis: {
    host: _settings.REDIS.host,
    port: _settings.REDIS.port
  }
};
var queueView = new _bull["default"]("microservice1:view", opts);
exports.queueView = queueView;
var queueFindEnable = new _bull["default"]("microservice1:findProductEnable", opts);
exports.queueFindEnable = queueFindEnable;
var queueCreate = new _bull["default"]("microservice1:create", opts);
exports.queueCreate = queueCreate;
var queueUpdate = new _bull["default"]("microservice1:update", opts);
exports.queueUpdate = queueUpdate;
var queueDelete = new _bull["default"]("gtghplzizsfe:delete", opts);
exports.queueDelete = queueDelete;
//# sourceMappingURL=index.js.map