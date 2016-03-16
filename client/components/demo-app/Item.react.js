var React = require('react');
var ReactPropTypes = React.PropTypes;
var DemoActions = require('../../actions/DemoActions.js');

var Item = React.createClass({
    propTypes: {
        onEdit: ReactPropTypes.func.isRequired,
    },
    render: function () {
        var item = this.props.item;
        return (
            <li key={item.id}>{item.value}  [<a href='#' onClick={this._edit}>Edit</a>] [<a href='#' onClick={this._destroy}>Delete</a>]</li>
        );
    },
    _edit: function(e){
        var item = this.props.item;
        this.props.onEdit(item);
    },
    _destroy: function(e){
        var item = this.props.item;
        DemoActions.destroy(item.id);
    },
});

module.exports = Item;