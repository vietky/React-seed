var React = require('react');

var Test = React.createClass({
    getInitialState: function () {
        return {
            hello: 'Hello world'
        };
    },
    render: function () {
        return (
            <h1>{this.state.hello}</h1>
        );
    }
});

module.exports = Test;