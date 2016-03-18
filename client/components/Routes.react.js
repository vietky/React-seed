var React = require('react');
var ReactRouter = require('react-router');
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;

var App = require('./App.react.js');
var Index = require('./index/Main.react.js');
var BsTable = require('./bs-table/_Main.react.js');
var DemoApp = require('./demo-app/DemoApp.react.js');
var About = require('./about/Main.react.js');

module.exports = (
    <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="index" component={Index} />
        <Route path="bstable(/:page)" component={BsTable} />
        <Route path="demo" component={DemoApp} />
        <Route path="about" component={About} />
    </Route>
);