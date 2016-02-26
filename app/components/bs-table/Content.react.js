var React = require('react');
var PropTypes = React.PropTypes;

var Content = React.createClass({
    propTypes: {
        data: PropTypes.array.isRequired
    },
    render: function(){
        var createCells = function (item){
            var cells = [];
            for (var i in item)
            {
                cells.push(
                    <td key={i}>
                        {item[i]}
                    </td>
                );
            }
           return cells;
        };
        var createRow = function (item, index){
            return (
                <tr key={index}>
                    {createCells(item)}
                </tr>
            );
        };
        return (
            <tbody>
                {this.props.data.map(createRow)}
            </tbody>
        );
    }
});

module.exports = Content;