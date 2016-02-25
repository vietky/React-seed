var React = require('react');
var PropTypes = React.PropTypes;

var Content = React.createClass({
    propTypes: {
        data: PropTypes.array.isRequired,
        columns: PropTypes.array.isRequired
    },
    render: function(){
        var columns = this.props.columns;
        var createRow = function (row){
            var cells = [];
            for (var i in columns){
                cells.push(<td key={row.id + "-" + row[columns[i].keyField]}>{row[columns[i].keyField]}</td>);
            }
            return <tr key={row.id}>{cells}</tr>;
        };
        return <tbody>{this.props.data.map(createRow)}</tbody>;
    }
});

module.exports = Content;