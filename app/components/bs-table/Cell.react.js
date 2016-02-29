var React = require('react');
var PropTypes = React.PropTypes;

var Cell = React.createClass({
    propTypes: {
        onEdit: PropTypes.func,
    },
    getInitialState: function(){
        return {
            editing: false
        };
    },
    render: function () {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Cell;