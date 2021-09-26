"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncDB = exports.Model = void 0;

var _sequelize = require("sequelize");

var _settings = require("../settings");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var opts = {
  timestamps: true,
  freezeTableName: true
};

var Model = _settings.sequelize.define('model', {
  uuid: {
    type: _sequelize.DataTypes.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: _sequelize.DataTypes.UUDV4
  },
  name: {
    type: _sequelize.DataTypes.STRING
  },
  description: {
    type: _sequelize.DataTypes.STRING
  },
  price: {
    type: _sequelize.DataTypes.BIGINT,
    defaultValue: 0
  },
  status: {
    type: _sequelize.DataTypes.BOOLEAN,
    defaultValue: true
  },
  registeredUser: {
    type: _sequelize.DataTypes.UUID
  },
  updateUser: {
    type: _sequelize.DataTypes.UUID
  }
}, opts); //This function is going to help us to setup the previous model in the database


exports.Model = Model;

var syncDB = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return Model.sync({
              logging: false,
              force: true
            });

          case 3:
            console.info('Model up');
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.info('Model down', _context.t0);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function syncDB() {
    return _ref.apply(this, arguments);
  };
}();

exports.syncDB = syncDB;
//# sourceMappingURL=index.js.map