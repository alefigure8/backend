"use strict";

var _require = require('express'),
    Router = _require.Router;

var router = Router();

var _require2 = require('../controllers/blog.controller'),
    getBlog = _require2.getBlog,
    getEntry = _require2.getEntry,
    createPost = _require2.createPost,
    formBlog = _require2.formBlog,
    formUpdate = _require2.formUpdate,
    postUpdate = _require2.postUpdate,
    deleteEntry = _require2.deleteEntry,
    blogs = _require2.blogs;

var _require3 = require('../libs/logged'),
    isLoggedIn = _require3.isLoggedIn;

var _require4 = require('../middlewares/authjwt'),
    verifyToken = _require4.verifyToken; //GET ENTRIES / PUBLIC


router.get('/all', verifyToken, getBlog); //GET ONLY ONE

router.get('/all/:id', verifyToken, getEntry); //VIEW ENTRIES BLOG

router.get('/view', isLoggedIn, blogs); //GET CREATE

router.get('/add', isLoggedIn, formBlog); //POST CREATE / PRIVATE

router.post('/add', isLoggedIn, createPost); //GET UPADATE / PRIVATE

router.get('/update/:id', isLoggedIn, formUpdate); //POST UPADATE / PRIVATE

router.post('/update/:id', isLoggedIn, postUpdate); //DELETE / PRIVATE

router.get('/delete/:id', isLoggedIn, deleteEntry);
module.exports = router;