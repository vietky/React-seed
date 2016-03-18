var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var css = require('./styles/main.scss');
var routes =  require('./components/Routes.react.js');
var appConfig = require('./configs/app.config.js');
var browserHistory;
if (!appConfig.isProd) browserHistory = ReactRouter.browserHistory;

ReactDOM.render(
    <Router routes={routes} history={browserHistory} />,
    document.getElementById('main')
);