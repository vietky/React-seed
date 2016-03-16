var React = require('react');
var ReactPropTypes = React.PropTypes;
var Input = require('react-bootstrap').Input;
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;

var DemoStore = require('../../stores/DemoStore.js');
var DemoActions = require('../../actions/DemoActions.js');

var DemoModal = React.createClass({
    propTypes: {
        selectedId: ReactPropTypes.string.isRequired,
        onSave: ReactPropTypes.func.isRequired,
        onClose: ReactPropTypes.func.isRequired
    },
    getInitialState: function() {
        return {
            value: ''
        };
    },
    componentWillReceiveProps: function(nextProps){
        var item = this._getItem(nextProps.selectedId);
        this.setState({
            value: item.value
        });
        console.log('receive props: ' + item.value);
    },
    _getItem: function(id){
        var item = DemoStore.get(id);
        console.log(id);
        console.log(item);
        if (!item){
            item = {
                id: this.props.selectedId,
                value: !item ? '' : item.value
            };
        }
        return item;
    },
    _onSave: function(e){
        this.props.onSave({
            id: this.props.selectedId,
            value: this.state.value
        });
    },
    _onChange: function(e){
        var value = this.state.value;
        value = e.target.value;
        this.setState({
            value: value
        });
    },
    render: function(){
        var id = this.props.selectedId;
        var showModal = this.props.selectedId.length > 0;

        return (
            <div className="static-modal">
                <Modal show={showModal} onHide={this.props.onClose}>
                    <Modal.Header>
                        Edit Item {id}
                    </Modal.Header>
                    <Modal.Body>
                        <Input type="text" label="Value" placeholder="Enter value here..." value={this.state.value} onChange={this._onChange} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onClose}>Close</Button>
                        <Button bsStyle="primary" onClick={this._onSave}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
});

module.exports = DemoModal;