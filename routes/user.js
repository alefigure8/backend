"use strict";

var _require = require('express'),
    Router = _require.Router;

var router = Router();

var _require2 = require('../controllers/user.controller'),
    registerUser = _require2.registerUser,
    LoginUser = _require2.LoginUser,
    listUser = _require2.listUser,
    deleteUser = _require2.deleteUser;

var _require3 = require('../libs/logged'),
    isLoggedIn = _require3.isLoggedIn; //LOGIN VIEW


router.get('/', function (req, res) {
  res.render('./auth/login', {
    layout: false
  });
}); //LOGIN

router.post('/', LoginUser); //REGISTER VIEW

router.get('/register', isLoggedIn, function (req, res) {
  res.render('./auth/register');
}); //REGISTER

router.post('/register', isLoggedIn, registerUser); //VIEW LIST

router.get('/view', isLoggedIn, listUser); //DELETE

router.get('/delete/:id', isLoggedIn, deleteUser);
router.get('/logout', isLoggedIn, function (req, res) {
  req.logout();
  res.redirect('/user');
});
module.exports = router;