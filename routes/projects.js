"use strict";

var _require = require('express'),
    Router = _require.Router;

var router = Router();

var _require2 = require('../controllers/project.controller'),
    getProject = _require2.getProject,
    getProjectbyId = _require2.getProjectbyId,
    createProject = _require2.createProject,
    postProject = _require2.postProject,
    updateProjectbyId = _require2.updateProjectbyId,
    updateProject = _require2.updateProject,
    deleteProject = _require2.deleteProject,
    viewProject = _require2.viewProject;

var _require3 = require('../libs/logged'),
    isLoggedIn = _require3.isLoggedIn;

var _require4 = require('../middlewares/authjwt'),
    verifyToken = _require4.verifyToken; //API - GET ALL PROJECT


router.get('/all', verifyToken, getProject); //API - GET JUST ONE BY ID

router.get('/all/:id', verifyToken, getProjectbyId); //GET PROJECT´S LIST

router.get('/view', isLoggedIn, viewProject); //GET CREATE PROJECT FORM

router.get('/add', isLoggedIn, createProject); //POST NEW PROJECT

router.post('/add', isLoggedIn, postProject); //GET UPDATE PROJECT FORM

router.get('/update/:id', isLoggedIn, updateProjectbyId); //POST UPDATE

router.post('/update/:id', isLoggedIn, updateProject); //DELETE PROJECT

router.get('/delete/:id', isLoggedIn, deleteProject);
module.exports = router;