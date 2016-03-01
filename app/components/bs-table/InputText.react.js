var React = require('react');
var PropTypes = React.PropTypes;

var ReactBS = require('react-bootstrap');
var Input = ReactBS.Input;

var InputText = React.createClass({
    propTypes: {
        textChanged: PropTypes.func
    },
    getInitialValue: function() {
        return {
            value: ''
        };
    },
    _handleChange: function(e){
        this.setState({
            value: e.target.value
        });
        
    },
    render: function () {
        return (
            <Input
                type="text"
                value={this.state.value}
                {...this.props}
                onChange={this._handleChange} />
        );
    }
});

module.exports = InputText;