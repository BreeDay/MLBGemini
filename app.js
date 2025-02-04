var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var authRouter = require('./routes/oauth');
var requestRouter = require('./routes/request');
var htmlAuthRouter = require('./routes/htmlAuth');

var htmlFileRouter = require('./routes/htmlResponse');

var app = express();

app.options('*', function(req,res,next){
    res.header("Access-Control-Allow-Origin", 'http://localhost:3000');
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", ['X-Requested-With', 
'content-type', 'credentials']);
res.header('Access-Control-Methods', 'GET,POST');
res.status(200);
next()
})

