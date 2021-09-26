"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REDIS = exports.sequelize = exports.DATABASES = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _sequelize = require("sequelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var DATABASES = {
  ENGINE: process.env.ENGINE,
  NAME: process.env.DB_NAME,
  USER: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
  HOST: process.env.DB_HOST,
  PORT: process.env.DB_PORT
};
exports.DATABASES = DATABASES;
var sequelize = new _sequelize.Sequelize(DATABASES.NAME, DATABASES.USER, DATABASES.PASSWORD, {
  host: DATABASES.HOST,
  port: DATABASES.PORT,
  dialect: DATABASES.ENGINE
});
exports.sequelize = sequelize;
var REDIS = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
};
exports.REDIS = REDIS;
//# sourceMappingURL=settings.js.map