"use strict";

require('passport');

module.exports = {
  isLoggedIn: function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      return res.redirect('/user');
    }
  },
  isNotLoggedin: function isNotLoggedin(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    } else {
      return res.redirect('/user');
    }
  }
};