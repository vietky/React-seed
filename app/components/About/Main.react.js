var React = require('react');

var About = React.createClass({
    getInitialState: function () {
        return {
            hello: 'About me'
        };
    },
    render: function () {
        return (
            <h2>{this.state.hello}</h2>
        );
    }
});

module.exports = About;