var React = require('react');
var ReactDOM = require('react-dom');
var Test = require('./Test.react.js');

console.log(document.getElementById('main'));
ReactDOM.render(<Test />, document.getElementById('main'));