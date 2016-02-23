var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;

var App = require('./App.react.js');
var Index = require('./index/Main.react.js');
var DemoApp = require('./demo-app/DemoApp.react.js');
var About = require('./about/Main.react.js');

module.exports = function(){
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Index} />
                <Route path="index" component={Index} />
                <Route path="demo" component={DemoApp} />
                <Route path="about" component={About} />
            </Route>
        </Router>
    , document.getElementById('main'));
}