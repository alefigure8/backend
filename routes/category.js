"use strict";

var _require = require('express'),
    Router = _require.Router;

var router = Router();

var _require2 = require('../controllers/category.controller'),
    getCategory = _require2.getCategory,
    getCategorybyId = _require2.getCategorybyId,
    postCategory = _require2.postCategory,
    updateCategorybyId = _require2.updateCategorybyId,
    postCategorybyId = _require2.postCategorybyId,
    deleteCategory = _require2.deleteCategory,
    viewCategory = _require2.viewCategory;

var _require3 = require('../libs/logged'),
    isLoggedIn = _require3.isLoggedIn;

var _require4 = require('../middlewares/authjwt'),
    verifyToken = _require4.verifyToken; //GET categories / private


router.get('/all', verifyToken, getCategory); //GET ONLY ONE / private

router.get('/all/:id', verifyToken, getCategorybyId);
router.get('/view', isLoggedIn, viewCategory); //POST CREATE / PRIVATE

router.post('/add', isLoggedIn, postCategory); //GET UPADATE / PRIVATE

router.get('/update/:id', isLoggedIn, updateCategorybyId); //POST UPADATE / PRIVATE

router.post('/update/:id', isLoggedIn, postCategorybyId); //DELETE / PRIVATE

router.get('/delete/:id', isLoggedIn, deleteCategory);
module.exports = router;