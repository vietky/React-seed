var React = require('react');
var Link = ReactRouter.Link;

var App = React.createClass({
    getInitialState: function () {
        return {
            hello: 'App'
        };
    },
    render: function () {
        return (
            <div>
                <h1>{this.state.hello}</h1>
                <ul>
                    <li><Link to="/index">Index</Link></li>
                    <li><Link to="/demo">Demo</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <div>{this.props.children}</div>
            </div>
        );
    }
});

module.exports = App;