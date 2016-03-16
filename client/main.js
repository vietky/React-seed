var ReactDOM = require('react-dom');
var css = require('./styles/main.scss');

ReactDOM.render(
    require('./components/Router.react.js'),
    document.getElementById('main')
);

//var ReactDOM = require('react-dom');
//console.log(document.getElementById('main'));
//var App = require('./components/App.react.js');
//ReactDOM.render(<App />, document.getElementById('main'));