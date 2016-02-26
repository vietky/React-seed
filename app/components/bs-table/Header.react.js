var React = require('react');

var Header = React.createClass({
    render: function () {
        var createHeader = function (cell, index) {
            return (
                <th key={index}>{cell}</th>
            );
        };
        return (
            <thead>
                <tr>
                {
                    this.props.columns.map(createHeader)
                }
                </tr>
            </thead>
        );
    }
});

module.exports = Header;