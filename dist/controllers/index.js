"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.View = exports.Create = exports.Delete = exports.Update = void 0;

var _models = require("../models");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Update = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var pk, name, description, price;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pk = _ref.pk, name = _ref.name, description = _ref.description, price = _ref.price;
            _context.prev = 1;
            _context.next = 4;
            return _models.Model.update({
              name: name,
              description: description,
              price: price
            }, {
              where: {
                uuid: pk
              },
              logging: false
            });

          case 4:
            _context.next = 10;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](1);
            console.error({
              step: "controller Update",
              error: _context.t0
            });
            return _context.abrupt("return", {
              statusCode: 500,
              message: "Internal error server"
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 6]]);
  }));

  return function Update(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.Update = Update;

var Delete = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
    var pk;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            pk = _ref3.pk;
            _context2.prev = 1;
            _context2.next = 4;
            return _models.Model.destroy({
              where: {
                uuid: pk
              }
            });

          case 4:
            return _context2.abrupt("return", {
              statusCode: 200,
              data: "Product deleted"
            });

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](1);
            console.error({
              step: "controller Delete"
            });
            return _context2.abrupt("return", {
              statusCode: 500,
              message: "Internal error server"
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 7]]);
  }));

  return function Delete(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

exports.Delete = Delete;

var Create = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref5) {
    var name, description, price, _yield$Model$create, rows, count;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            name = _ref5.name, description = _ref5.description, price = _ref5.price;
            _context3.prev = 1;
            _context3.next = 4;
            return _models.Model.create({
              name: name,
              description: description,
              price: price
            }, {
              fields: ['name', 'description', 'price'],
              logging: false
            });

          case 4:
            _yield$Model$create = _context3.sent;
            rows = _yield$Model$create.rows;
            count = _yield$Model$create.count;
            return _context3.abrupt("return", {
              statusCode: 200,
              data: {
                data: rows,
                pageCount: Math.ceil(count / limit),
                itemCount: count
              }
            });

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](1);
            console.error({
              step: "controller Create"
            });
            return _context3.abrupt("return", {
              statusCode: 500,
              message: "Internal error server"
            });

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 10]]);
  }));

  return function Create(_x3) {
    return _ref6.apply(this, arguments);
  };
}();

exports.Create = Create;

var View = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref7) {
    var limit, offset, filter, _yield$Model$findAndC, rows, count;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            limit = _ref7.limit, offset = _ref7.offset, filter = _ref7.filter;
            _context4.prev = 1;
            _context4.next = 4;
            return _models.Model.findAndCountAll({
              where: filter,
              limit: limit,
              offset: offset,
              logging: false
            });

          case 4:
            _yield$Model$findAndC = _context4.sent;
            rows = _yield$Model$findAndC.rows;
            count = _yield$Model$findAndC.count;
            return _context4.abrupt("return", {
              statusCode: 200,
              data: {
                data: rows,
                pageCount: Math.ceil(count / limit),
                itemCount: count
              }
            });

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](1);
            console.error({
              step: "controller View"
            });
            return _context4.abrupt("return", {
              statusCode: 500,
              message: "Internal error server"
            });

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 10]]);
  }));

  return function View(_x4) {
    return _ref8.apply(this, arguments);
  };
}();

exports.View = View;
//# sourceMappingURL=index.js.map