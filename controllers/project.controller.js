"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mysqlConnection = require('../database'); //API - GET ALL


var getProject = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var projects;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return mysqlConnection.query('SELECT * FROM project');

          case 2:
            projects = _context.sent;
            res.json(projects);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getProject(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //API - GET JUST ONE BY ID


var getProjectbyId = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, project;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return mysqlConnection.query('SELECT * FROM project WHERE id = ?', [id]);

          case 3:
            project = _context2.sent;
            res.json(project);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getProjectbyId(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //GET PROJECT´S LIST


var viewProject = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var projects;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return mysqlConnection.query('SELECT project.*, category.name FROM project LEFT join category on project.category = category.id');

          case 2:
            projects = _context3.sent;
            res.render('./projects/view-projects', {
              projects: projects
            });

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function viewProject(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //GET PROJECT CREATE FORM


var createProject = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var category;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return mysqlConnection.query('SELECT * FROM category');

          case 2:
            category = _context4.sent;
            res.render('./projects/add-project', {
              category: category
            });

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function createProject(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); //POST PROJECT ENTRY


var postProject = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _req$body, title, description, category, img, link, new_post;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body = req.body, title = _req$body.title, description = _req$body.description, category = _req$body.category, img = _req$body.img, link = _req$body.link;
            new_post = {
              title: title,
              description: description,
              category: category,
              img: img,
              link: link
            };
            _context5.next = 4;
            return mysqlConnection.query('INSERT INTO project set ?', [new_post]);

          case 4:
            res.redirect('/project/view');

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function postProject(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); //UPDATE PROYECT FORM


var updateProjectbyId = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, projects, category;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _context6.next = 3;
            return mysqlConnection.query('SELECT * FROM project WHERE id = ?', [id]);

          case 3:
            projects = _context6.sent;
            _context6.next = 6;
            return mysqlConnection.query('SELECT * FROM category');

          case 6:
            category = _context6.sent;
            res.render('./projects/update-project', {
              projects: projects,
              category: category
            });

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateProjectbyId(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}(); //POST UPDATE


var updateProject = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, _req$body2, title, description, category, img, link, new_post;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, title = _req$body2.title, description = _req$body2.description, category = _req$body2.category, img = _req$body2.img, link = _req$body2.link;
            new_post = {
              title: title,
              description: description,
              category: category,
              img: img,
              link: link
            };
            _context7.next = 5;
            return mysqlConnection.query('UPDATE project set ? WHERE id = ?', [new_post, id]);

          case 5:
            res.redirect('/project/view');

          case 6:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function updateProject(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}(); //DELETE ENTRY


var deleteProject = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id = req.params.id;
            _context8.next = 3;
            return mysqlConnection.query('DELETE FROM project WHERE id = ?', [id]);

          case 3:
            res.redirect('/project/view');

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function deleteProject(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

module.exports = {
  getProject: getProject,
  getProjectbyId: getProjectbyId,
  createProject: createProject,
  postProject: postProject,
  updateProjectbyId: updateProjectbyId,
  updateProject: updateProject,
  deleteProject: deleteProject,
  viewProject: viewProject
};