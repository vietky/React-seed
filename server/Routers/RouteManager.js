var pathConfig = require('../../configs/path.js');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');
var RouterContext = ReactRouter.RouterContext;
var routes = require('../../client/components/Router.react.js');
var RouteManager = {};

RouteManager.route = function (app) {
    app.get('*', function (req, res) {
        ReactRouter.match({
            routes: routes,
            location: req.url
        }, function (err, redirect, props) {
            var appHtml = ReactDOMServer.renderToString(React.createElement(RouterContext, props));
            res.send(appHtml);
        //            res.sendFile(pathConfig.getClientFilePath('index.html'));
        });
    });
};

module.exports = RouteManager;