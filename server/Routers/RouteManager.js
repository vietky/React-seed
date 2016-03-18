var pathConfig = require('../../configs/path.js');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');
var RouterContext = ReactRouter.RouterContext;
var routes = require('../../client/components/Routes.react.js');
var HtmlComponent = require('../../client/components/Html.react.js');
var RouteManager = {};

RouteManager.route = function (app) {
    app.get('*', function (req, res) {
        console.log(routes);
        ReactRouter.match({
            routes: routes,
            location: req.url
        }, function (err, redirect, props) {
            if (err) {
                res.status(500).send(err.message);
                return;
            } else if (redirect) {
                res.redirect(302, redirect.pathname);
                return;
            }
//            console.log(props);
            var appHtml = ReactDOMServer.renderToString(React.createElement(RouterContext, props));
            res.send(ReactDOMServer.renderToStaticMarkup(React.createElement(HtmlComponent, {
                markup: appHtml
            })));
            //            res.sendFile(pathConfig.getClientFilePath('index.html'));
        });
    });
};

module.exports = RouteManager;