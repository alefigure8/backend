"use strict";

var express = require('express');

var morgan = require('morgan');

var pkg = require('../package.json');

var exphbs = require('express-handlebars');

var path = require('path');

var session = require('express-session');

var MySQLStore = require('express-mysql-session');

var _require = require('./keys'),
    database = _require.database;

var passport = require('passport');

var cors = require('cors'); //INIT


var app = express();

require('./libs/passport');

app.use(cors()); //SETTINGS

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./libs/handlebars')
}));
app.set('view engine', '.hbs'); //MIDDLEWARES

app.use(session({
  secret: 'secretmysql',
  resave: false,
  saveUninitialized: false,
  store: new MySQLStore(database)
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.disable('etag'); //GLOBAL VARIABLES

app.use(function (req, res, next) {
  app.locals.user = req.user;
  next();
}); //ROUTES

app.use('/blog', require('./routes/blog'));
app.use('/category', require('./routes/category'));
app.use('/user', require('./routes/user'));
app.use('/project', require('./routes/projects'));
app.get('/', function (req, res) {
  res.json({
    author: pkg.author,
    description: pkg.description,
    version: pkg.version
  });
}); //PUBLIC

app.use(express["static"](__dirname + '/public'));
module.exports = app;