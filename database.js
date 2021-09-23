"use strict";

var mysql = require('mysql');

var _require = require('util'),
    promisify = _require.promisify;

var _require2 = require('./keys'),
    database = _require2.database;

var mysqlConnection = mysql.createPool(database);
mysqlConnection.getConnection(function (err, connection) {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('DATABASE CONNECTION WAS CLOSED');
    }

    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('DATABASE HAS TOO MANY CONNECTIONS');
    }

    if (err.code === 'ECONNREFUSED') {
      console.error('DATABASE CONNECTION WAS REFUSED');
    }
  }

  if (connection) connection.release();
  console.log('DB IS CONNECTED');
  return;
});
mysqlConnection.query = promisify(mysqlConnection.query); //Async await

module.exports = mysqlConnection;