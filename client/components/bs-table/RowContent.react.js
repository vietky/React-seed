var React = require('react');
var PropTypes = React.PropTypes;

var RowContent = React.createClass({
    propTypes: {
        content: PropTypes.object.isRequired,
        onEdit: PropTypes.func,
    },
    getInitialState: function(){
        return {
            editing: false,
        };
    },
    _onEdit: function(e){
        e.preventDefault();
        var editing = !this.state.editing;
        this.setState({
            editing: editing
        });
    },
    render: function(){
        var self = this;
        var createCells = function (item){
            var cells = [];
            for (var i in item)
            {
                cells.push(
                    <td key={i}>
                        {self.state.editing && item[i].editor ? item[i].editor : item[i].value}
                    </td>
                );
            }
            cells.push(
                <td key={cells.length}>
                    <a href='#' onClick={self._onEdit}>Edit</a>
                </td>
            );
           return cells;
        };
        return (
            <tr>
                {createCells(this.props.content)}
            </tr>
        );
    }
});

module.exports = RowContent;