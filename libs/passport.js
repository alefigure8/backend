"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var passport = require('passport');

var localStrategy = require('passport-local').Strategy;

var auth = require('../libs/auth');

var mysqlConnection = require('../database');

var jwt = require('jsonwebtoken');

var _require = require('../config'),
    SECRET = _require.SECRET;

passport.use('local.register', new localStrategy({
  usernameField: 'user',
  passwordField: 'password',
  passReqToCallback: true
}, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, user, password, done) {
    var name, newUser, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            name = req.body.name;
            newUser = {
              name: name,
              user: user,
              password: password
            };
            _context.next = 4;
            return auth.encryptPassword(password);

          case 4:
            newUser.password = _context.sent;
            _context.next = 7;
            return mysqlConnection.query('INSERT INTO users SET ?', [newUser]);

          case 7:
            result = _context.sent;
            newUser.id = result.insertId;
            newUser.api_key = jwt.sign({
              id: newUser.id
            }, SECRET, {});
            _context.next = 12;
            return mysqlConnection.query('UPDATE users set apiy_key = ? WHERE id = ?', [newUser.api_key, newUser.id]);

          case 12:
            return _context.abrupt("return", done(null, newUser));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}()));
passport.use('local.login', new localStrategy({
  usernameField: 'user',
  passwordField: 'password',
  passReqToCallback: true
}, /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, user, password, done) {
    var rows, newUser, validPassword;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return mysqlConnection.query('SELECT * FROM users WHERE user = ?', [user]);

          case 2:
            rows = _context2.sent;

            if (!(rows.length > 0)) {
              _context2.next = 9;
              break;
            }

            newUser = rows[0];
            _context2.next = 7;
            return auth.matchPassword(password, newUser.password);

          case 7:
            validPassword = _context2.sent;

            if (validPassword) {
              done(null, newUser);
            } else {
              done(null, false);
            }

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x5, _x6, _x7, _x8) {
    return _ref2.apply(this, arguments);
  };
}()));
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser( /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id, done) {
    var rows;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return mysqlConnection.query('SELECT * FROM users WHERE ID = ?', [id]);

          case 2:
            rows = _context3.sent;
            done(null, rows[0]);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x9, _x10) {
    return _ref3.apply(this, arguments);
  };
}());