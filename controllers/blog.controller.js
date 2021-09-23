"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mysqlConnection = require('../database'); //API - GET ALL


var getBlog = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var blogs;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return mysqlConnection.query('SELECT * FROM blog');

          case 2:
            blogs = _context.sent;
            res.json(blogs);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getBlog(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //API - GET JUST ONE


var getEntry = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, blog;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return mysqlConnection.query('SELECT * FROM blog WHERE id = ?', [id]);

          case 3:
            blog = _context2.sent;
            res.json(blog);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getEntry(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //GET BLOG´S LIST


var blogs = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var blogs;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return mysqlConnection.query('SELECT blog.*, category.name FROM blog LEFT join category on blog.category = category.id');

          case 2:
            blogs = _context3.sent;
            res.render('./blog/blog', {
              blogs: blogs
            });

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function blogs(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //GET CREATE FORM


var formBlog = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var category, users;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return mysqlConnection.query('SELECT * FROM category');

          case 2:
            category = _context4.sent;
            _context4.next = 5;
            return mysqlConnection.query('SELECT * FROM users');

          case 5:
            users = _context4.sent;
            res.render('./blog/add-blog', {
              category: category,
              users: users
            });

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function formBlog(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); //POST ENTRY


var createPost = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _req$body, title, description, field, img, user, category, new_post;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body = req.body, title = _req$body.title, description = _req$body.description, field = _req$body.field, img = _req$body.img, user = _req$body.user, category = _req$body.category;
            console.log(req.body);
            new_post = {
              title: title,
              description: description,
              field: field,
              img: img,
              user: user,
              category: category
            };
            _context5.next = 5;
            return mysqlConnection.query('INSERT INTO blog set ?', [new_post]);

          case 5:
            res.redirect('/view');

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function createPost(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); //UPDATE BLOG FORM


var formUpdate = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, blogs, users, category;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _context6.next = 3;
            return mysqlConnection.query('SELECT * FROM blog WHERE id = ?', [id]);

          case 3:
            blogs = _context6.sent;
            _context6.next = 6;
            return mysqlConnection.query('SELECT * FROM users');

          case 6:
            users = _context6.sent;
            _context6.next = 9;
            return mysqlConnection.query('SELECT * FROM category');

          case 9:
            category = _context6.sent;
            res.render('./blog/update-blog', {
              blogs: blogs,
              users: users,
              category: category
            });

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function formUpdate(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}(); //POST UPDATE


var postUpdate = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, _req$body2, title, description, field, img, user, category, new_post;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, title = _req$body2.title, description = _req$body2.description, field = _req$body2.field, img = _req$body2.img, user = _req$body2.user, category = _req$body2.category;
            new_post = {
              title: title,
              description: description,
              field: field,
              img: img,
              user: user,
              category: category
            };
            _context7.next = 5;
            return mysqlConnection.query('UPDATE blog set ? WHERE id = ?', [new_post, id]);

          case 5:
            res.redirect('/blog/view');

          case 6:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function postUpdate(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}(); //DELETE ENTRY


var deleteEntry = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id = req.params.id;
            _context8.next = 3;
            return mysqlConnection.query('DELETE FROM blog WHERE id = ?', [id]);

          case 3:
            res.redirect('/blog/view');

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function deleteEntry(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

module.exports = {
  getBlog: getBlog,
  getEntry: getEntry,
  formBlog: formBlog,
  createPost: createPost,
  formUpdate: formUpdate,
  postUpdate: postUpdate,
  deleteEntry: deleteEntry,
  blogs: blogs
};