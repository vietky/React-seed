var React = require('react');
var PropTypes = React.PropTypes;

var Column = React.createClass({
    propTypes: {
        header: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.func
        ]),
        cell: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.func    
        ]),
    },
    statics: {
        __TableColumn__: true,
    },
    render: function () {
        return (
            null
        );
    }
});

module.exports = Column;