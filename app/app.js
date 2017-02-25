var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

/*
日志模块
*/
var log = require("./tools/logs/logHelper");
log.use(app);

module.exports = app;
