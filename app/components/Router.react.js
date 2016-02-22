var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;

var App = require('./App.react.js');
var Index = require('./layouts/Index.react.js');
var About = require('./layouts/About.react.js');

module.exports = function(){
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute path="index" component={Index} />
                <Route path="index" component={Index} />
                <Route path="about" component={About} />
            </Route>
        </Router>
    , document.getElementById('main'));
}