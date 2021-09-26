"use strict";

var _services = require("../services");

var _index = require("./index");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_index.queueUpdate.process( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(job, done) {
    var _job$data, pk, name, description, price, _yield$HandleUpdate, statusCode, data, message;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _job$data = job.data, pk = _job$data.pk, name = _job$data.name, description = _job$data.description, price = _job$data.price;
            _context.next = 4;
            return (0, _services.HandleUpdate)({
              pk: pk,
              name: name,
              description: description,
              price: price
            });

          case 4:
            _yield$HandleUpdate = _context.sent;
            statusCode = _yield$HandleUpdate.statusCode;
            data = _yield$HandleUpdate.data;
            message = _yield$HandleUpdate.message;
            return _context.abrupt("return", done(null, {
              statusCode: statusCode,
              data: data,
              message: message
            }));

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.error({
              step: "adapter queueUpdate",
              error: _context.t0
            });
            return _context.abrupt("return", done(new Error({
              statusCode: 500,
              message: "Internal error server"
            })));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

_index.queueCreate.process( /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(job, done) {
    var _job$data2, name, description, price, _yield$HandleCreate, statusCode, data, message;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _job$data2 = job.data, name = _job$data2.name, description = _job$data2.description, price = _job$data2.price;
            _context2.next = 4;
            return (0, _services.HandleCreate)({
              name: name,
              description: description,
              price: price
            });

          case 4:
            _yield$HandleCreate = _context2.sent;
            statusCode = _yield$HandleCreate.statusCode;
            data = _yield$HandleCreate.data;
            message = _yield$HandleCreate.message;
            return _context2.abrupt("return", done(null, {
              statusCode: statusCode,
              data: data,
              message: message
            }));

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.error({
              step: "adapter queueCreate",
              error: _context2.t0
            });
            return _context2.abrupt("return", done(new Error({
              statusCode: 500,
              message: "Internal error server"
            })));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

_index.queueFindEnable.process( /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(job, done) {
    var _job$data3, limit, offset, _yield$FindEnable, statusCode, data, message;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _job$data3 = job.data, limit = _job$data3.limit, offset = _job$data3.offset;
            _context3.next = 4;
            return (0, _services.FindEnable)({
              limit: limit,
              offset: offset
            });

          case 4:
            _yield$FindEnable = _context3.sent;
            statusCode = _yield$FindEnable.statusCode;
            data = _yield$FindEnable.data;
            message = _yield$FindEnable.message;
            return _context3.abrupt("return", done(null, {
              statusCode: statusCode,
              data: data,
              message: message
            }));

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            console.error({
              step: "adapter queueFindEnable",
              error: _context3.t0
            });
            return _context3.abrupt("return", done(new Error({
              statusCode: 500,
              message: "Internal error server"
            })));

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

_index.queueView.process( /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(job, done) {
    var _job$data4, limit, offset, filter, _yield$handleView, statusCode, data, message;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _job$data4 = job.data, limit = _job$data4.limit, offset = _job$data4.offset, filter = _job$data4.filter;
            _context4.next = 4;
            return (0, _services.handleView)({
              limit: limit,
              offset: offset,
              filter: filter
            });

          case 4:
            _yield$handleView = _context4.sent;
            statusCode = _yield$handleView.statusCode;
            data = _yield$handleView.data;
            message = _yield$handleView.message;
            return _context4.abrupt("return", done(null, {
              statusCode: statusCode,
              data: data,
              message: message
            }));

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            console.error({
              step: "adapter queueView",
              error: _context4.t0
            });
            return _context4.abrupt("return", done(new Error({
              statusCode: 500,
              message: "Internal error server"
            })));

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 11]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

_index.queueDelete.process( /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(job, done) {
    var pk, _yield$HandleDelete, statusCode, data, message;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            pk = job.data.pk;
            _context5.next = 4;
            return (0, _services.HandleDelete)({
              pk: pk
            });

          case 4:
            _yield$HandleDelete = _context5.sent;
            statusCode = _yield$HandleDelete.statusCode;
            data = _yield$HandleDelete.data;
            message = _yield$HandleDelete.message;
            return _context5.abrupt("return", done(null, {
              statusCode: statusCode,
              data: data,
              message: message
            }));

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            console.error({
              step: "adapter queueDelete",
              error: _context5.t0
            });
            return _context5.abrupt("return", done(new Error({
              statusCode: 500,
              message: "Internal error server"
            })));

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 11]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
//# sourceMappingURL=processor.js.map