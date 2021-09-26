"use strict";

require("core-js/stable");

require("regenerator-runtime/runtime");

require("./adapters/processor");

var _models = require("./models");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var shutdown;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            shutdown = function _shutdown(signal) {
              return function (err) {
                console.log("".concat(signal, "..."));
                if (err) console.error(err.stack || err);
                setTimeout(function () {
                  console.log('...waited 2s, exiting');
                  process.exit(err ? 1 : 0);
                }, 2000).unref();
              };
            };

            _context.next = 3;
            return (0, _models.syncDB)();

          case 3:
            process.on('SIGTERM', shutdown('SIGTERM')).on('SIGINT', shutdown('SIGINT')).on('uncaughtException', shutdown('uncaughtException'));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _main.apply(this, arguments);
}

main();
//# sourceMappingURL=index.js.map