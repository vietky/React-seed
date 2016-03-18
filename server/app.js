require('babel-register');

var express = require('express');
var compression = require('compression');
var pathConfig = require('../configs/path.js');
var RouteManager = require('./Routers/RouteManager.js');
var PORT = process.env.PORT || 9090;

var app = express();
app.use(express.static(pathConfig.publicFolder));
app.use(compression());

app.listen(PORT, function () {
    console.log('Express started at localhost:', PORT);
});

RouteManager.route(app);