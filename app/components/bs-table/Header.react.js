var React = require('react');

var Header = React.createClass({
    render: function () {
        var createHeader = function (col, index) {
            return (
                <th key={index}>{col.header}</th>
            );
        };
        return (
            <thead>
            {
                 this.props.columns.map(createHeader)
            }
            </thead>
        );
    }
});

module.exports = Header;