"use strict";

var app = require('./app'); //SETTING


app.set('port', process.env.PORT || 3000); //LISTEN

app.listen(app.get('port'), function () {
  console.log('server on port', app.get('port'));
});