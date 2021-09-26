"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleView = exports.FindEnable = exports.HandleCreate = exports.HandleDelete = exports.HandleUpdate = void 0;

var _controllers = require("../controllers");

var _models = require("../models");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var HandleUpdate = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var pk, name, description, price, _yield$Model$update, statusCode, data, message;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pk = _ref.pk, name = _ref.name, description = _ref.description, price = _ref.price;
            _context.prev = 1;
            _context.next = 4;
            return _models.Model.update({
              pk: pk,
              name: name,
              description: description,
              price: price
            });

          case 4:
            _yield$Model$update = _context.sent;
            statusCode = _yield$Model$update.statusCode;
            data = _yield$Model$update.data;
            message = _yield$Model$update.message;
            return _context.abrupt("return", {
              statusCode: statusCode,
              data: data,
              message: message
            });

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            console.error({
              step: "service HandleUpdate",
              error: _context.t0
            });
            return _context.abrupt("return", {
              statusCode: 500,
              message: "Internal error server"
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11]]);
  }));

  return function HandleUpdate(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.HandleUpdate = HandleUpdate;

var HandleDelete = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
    var pk, _yield$Delete, statusCode, data, message;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            pk = _ref3.pk;
            _context2.prev = 1;
            _context2.next = 4;
            return (0, _controllers.Delete)({
              pk: pk
            });

          case 4:
            _yield$Delete = _context2.sent;
            statusCode = _yield$Delete.statusCode;
            data = _yield$Delete.data;
            message = _yield$Delete.message;
            return _context2.abrupt("return", {
              statusCode: statusCode,
              data: data,
              message: message
            });

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](1);
            console.error({
              step: "service HandleDelete",
              error: _context2.t0
            });
            return _context2.abrupt("return", {
              statusCode: 500,
              message: "Internal error server"
            });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 11]]);
  }));

  return function HandleDelete(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

exports.HandleDelete = HandleDelete;

var HandleCreate = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref5) {
    var name, description, price, _yield$Create, statusCode, data, message;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            name = _ref5.name, description = _ref5.description, price = _ref5.price;
            _context3.prev = 1;
            _context3.next = 4;
            return (0, _controllers.Create)({
              name: name,
              description: description,
              price: price
            });

          case 4:
            _yield$Create = _context3.sent;
            statusCode = _yield$Create.statusCode;
            data = _yield$Create.data;
            message = _yield$Create.message;
            return _context3.abrupt("return", {
              statusCode: statusCode,
              data: data,
              message: message
            });

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](1);
            console.error({
              step: "service HandleCreate",
              error: _context3.t0
            });
            return _context3.abrupt("return", {
              statusCode: 500,
              message: "Internal error server"
            });

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 11]]);
  }));

  return function HandleCreate(_x3) {
    return _ref6.apply(this, arguments);
  };
}();

exports.HandleCreate = HandleCreate;

var FindEnable = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref7) {
    var limit, offset, _ref7$filter, filter, _yield$View, statusCode, data, message;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            limit = _ref7.limit, offset = _ref7.offset, _ref7$filter = _ref7.filter, filter = _ref7$filter === void 0 ? {
              status: true
            } : _ref7$filter;
            _context4.prev = 1;
            _context4.next = 4;
            return (0, _controllers.View)({
              limit: limit,
              offset: offset,
              filter: filter
            });

          case 4:
            _yield$View = _context4.sent;
            statusCode = _yield$View.statusCode;
            data = _yield$View.data;
            message = _yield$View.message;
            return _context4.abrupt("return", {
              statusCode: statusCode,
              data: data,
              message: message
            });

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](1);
            console.error({
              step: "service FindEnable",
              error: _context4.t0
            });
            return _context4.abrupt("return", {
              statusCode: 500,
              message: "Internal error server"
            });

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 11]]);
  }));

  return function FindEnable(_x4) {
    return _ref8.apply(this, arguments);
  };
}();

exports.FindEnable = FindEnable;

var handleView = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref9) {
    var limit, offset, _ref9$filter, filter, _yield$View2, statusCode, data, message;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            limit = _ref9.limit, offset = _ref9.offset, _ref9$filter = _ref9.filter, filter = _ref9$filter === void 0 ? {} : _ref9$filter;
            _context5.prev = 1;
            _context5.next = 4;
            return (0, _controllers.View)({
              limit: limit,
              offset: offset,
              filter: filter
            });

          case 4:
            _yield$View2 = _context5.sent;
            statusCode = _yield$View2.statusCode;
            data = _yield$View2.data;
            message = _yield$View2.message;
            return _context5.abrupt("return", {
              statusCode: statusCode,
              data: data,
              message: message
            });

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](1);
            console.error({
              step: "service handleView",
              error: _context5.t0
            });
            return _context5.abrupt("return", {
              statusCode: 500,
              message: "Internal error server"
            });

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 11]]);
  }));

  return function handleView(_x5) {
    return _ref10.apply(this, arguments);
  };
}();

exports.handleView = handleView;
//# sourceMappingURL=index.js.map