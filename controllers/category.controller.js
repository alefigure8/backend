"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mysqlConnection = require('../database'); //GET categories / private


var getCategory = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var category;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return mysqlConnection.query('SELECT * FROM category');

          case 2:
            category = _context.sent;
            res.json(category);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getCategory(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //GET ONLY ONE / private


var getCategorybyId = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, category;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return mysqlConnection.query('SELECT * FROM category WHERE id = ?', [id]);

          case 3:
            category = _context2.sent;
            res.json(category);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getCategorybyId(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //VIEW CATEGORY LIST


var viewCategory = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var category;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return mysqlConnection.query('SELECT * FROM category');

          case 2:
            category = _context3.sent;
            res.render('./category/category', {
              category: category
            });

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function viewCategory(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //POST CREATE / PRIVATE


var postCategory = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, name, img, new_category;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, img = _req$body.img;
            new_category = {
              name: name,
              img: img
            };
            _context4.next = 4;
            return mysqlConnection.query('INSERT INTO category set ?', [new_category]);

          case 4:
            res.redirect('/category/view');

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function postCategory(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); //GET UPADATE / PRIVATE


var updateCategorybyId = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, category;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return mysqlConnection.query('SELECT * FROM category WHERE id = ?', [id]);

          case 3:
            category = _context5.sent;
            res.render('./category/update-category', {
              category: category
            });

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateCategorybyId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); //POST UPADATE / PRIVATE


var postCategorybyId = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, name, img, update_category;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, img = _req$body2.img;
            update_category = {
              name: name,
              img: img
            };
            _context6.next = 5;
            return mysqlConnection.query('UPDATE category set ? WHERE ID = ?', [update_category, id]);

          case 5:
            res.redirect('/category/view');

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function postCategorybyId(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}(); //DELETE / PRIVATE


var deleteCategory = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _context7.next = 3;
            return mysqlConnection.query('DELETE FROM category WHERE id = ?', [id]);

          case 3:
            res.redirect('/category/view');

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function deleteCategory(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

module.exports = {
  getCategory: getCategory,
  getCategorybyId: getCategorybyId,
  postCategory: postCategory,
  updateCategorybyId: updateCategorybyId,
  postCategorybyId: postCategorybyId,
  deleteCategory: deleteCategory,
  viewCategory: viewCategory
};