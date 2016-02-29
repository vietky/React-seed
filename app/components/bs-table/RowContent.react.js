var React = require('react');
var PropTypes = React.PropTypes;

var Content = React.createClass({
    propTypes: {
        content: PropTypes.object.isRequired
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
        return (
            <tr>
                {createCells(this.props.content)}
            </tr>
        );
    }
});

module.exports = Content;