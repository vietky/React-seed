var React = require('react');
var Item = require('./Item.react.js');
var InputForm = require('./InputForm.react.js');
var Modal = require('./DemoModal.react.js');
//var DataRow = require('../../FakeData/DataRow.js');

var DemoStore = require('../../stores/DemoStore.js');
var DemoActions = require('../../actions/DemoActions.js');

function getDemoState()
{
    return {
        selectedItemId: '',
        items: DemoStore.getAll(),
    };
}

var DemoApp = React.createClass({
    getInitialState: function(){
        return getDemoState();
    },
    componentDidMount: function (){
        DemoStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function (){
        DemoStore.removeChangeListener(this._onChange);
    },
    render: function() {
        var allDemos = this.state.items;
        var items = [];
        for (var key in allDemos)
        {
            items.push(<Item key={key} item={allDemos[key]} onEdit={this._onEditItem} />);
        }
        return (
            <div className="container">
                <div className="col-md-12">
                    <ul>
                        {items}
                    </ul>
                </div>
                <div className="col-md-12">
                    <InputForm onSave={this._onItemCreated} />
                </div>
                <div className="col-md-12">
                    <Modal
                       onSave={this._onItemUpdated}
                       onClose={this._closeModal}
                       selectedId={this.state.selectedItemId} />
                </div>
            </div>
         );
    },
    _onChange: function(){
        console.log('changed!');
        this.setState(getDemoState());
    },
    _onEditItem: function(item) {
        console.log(item);
        this.setState({
            selectedItemId: item.id,
        });
    },
    _onItemCreated: function(item){
        console.log(item);
        DemoActions.create(item);
    },
    _onItemUpdated: function(item){
        DemoActions.update(item);
        this._closeModal();
    },
    _closeModal: function(){
        console.log('close');
        this.setState({
            selectedItemId: '',
        });
    }
});

module.exports = DemoApp;