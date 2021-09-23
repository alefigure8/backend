"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var jwt = require('jsonwebtoken');

var _require = require('../config'),
    SECRET = _require.SECRET;

var mysqlConnection = require('../database');

var verifyToken = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var token;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            token = req.headers["x-access-token"];

            if (!token) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", jwt.verify(token, SECRET, /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(err, decoded) {
                var user;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!err) {
                          _context.next = 2;
                          break;
                        }

                        return _context.abrupt("return", res.json({
                          success: false,
                          message: "Failed to authenticate token."
                        }));

                      case 2:
                        req.id = decoded.id;
                        _context.next = 5;
                        return mysqlConnection.query('SELECT id FROM users WHERE id = ?', [req.id]);

                      case 5:
                        user = _context.sent;

                        if (!(user.length === 0)) {
                          _context.next = 8;
                          break;
                        }

                        return _context.abrupt("return", res.status(404).json({
                          message: 'No user found'
                        }));

                      case 8:
                        return _context.abrupt("return", next());

                      case 9:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x4, _x5) {
                return _ref2.apply(this, arguments);
              };
            }()));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function verifyToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  verifyToken: verifyToken
};