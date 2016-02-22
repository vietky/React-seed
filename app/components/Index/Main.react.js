var React = require('react');

var Index = React.createClass({
    getInitialState: function () {
        return {
            hello: 'Home'
        };
    },
    render: function () {
        return (
            <h2>{this.state.hello}</h2>
        );
    }
});

module.exports = Index;