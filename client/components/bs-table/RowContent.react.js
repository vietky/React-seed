var React = require('react');
var PropTypes = React.PropTypes;

var RowContent = React.createClass({
    propTypes: {
        content: PropTypes.object.isRequired,
    },
    render: function(){
        var self = this;
        var createCells = function (item){
            var cells = [];
            for (var i in item)
            {
                cells.push(
                    <div key={i} className="table-col">
                        {item[i].value}
                    </div>
                );
            }
           return cells;
        };
        return (
            <div className="table-row">
                {createCells(this.props.content)}
            </div>
        );
    }
});

module.exports = RowContent;