var React = require('react');
var PropTypes = React.PropTypes;

var Cell = React.createClass({
    render: function () {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Cell;