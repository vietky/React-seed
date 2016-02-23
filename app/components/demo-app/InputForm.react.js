var React = require('react');
var ReactPropTypes = React.PropTypes;
var Input = require('react-bootstrap').Input;
var ButtonInput = require('react-bootstrap').ButtonInput;

var InputForm = React.createClass({
    getInitialState: function(){
        return {
            value: this.props.value || '',
        };
    },
    propTypes: {
        onSave: ReactPropTypes.func.isRequired,
        value: ReactPropTypes.string
    },
    render: function () {
        return (<form>
            <Input type="text"
                placeholder="Enter your message"
                value={this.state.value}
                onChange={this._onChange}
                onKeyDown={this._handleKeydown} />

            <ButtonInput value="Send" onClick={this._createItem} />
        </form>);
    },
    _handleKeydown: function(e) {
        if (e.keyCode === 13){
            this._createItem(e);
        }
    },
    _createItem: function(e) {
        e.preventDefault();
        var val = this.state.value.trim();
        if (val.length < 1) return;
        this.props.onSave(this.state.value);
        this.setState({
            value: ''
        });
    },
    _onChange: function(e) {
        this.setState({
            value: e.target.value
        });
    }
});

module.exports = InputForm;