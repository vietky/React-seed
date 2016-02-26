var React = require('react');

var Cell = React.createClass({
    render: function () {
        return (
            <span>
                {this.props.children}
            </span>
        );
    }
});

module.exports = Cell;