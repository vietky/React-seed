var AppDispatcher = require('../dispatchers/AppDispatcher.js');
var DemoConstants = require('../constants/DemoConstants.js');
var ActionTypes = DemoConstants.ActionTypes;

var DemoActions = {
    create: function (text) {
        console.log('action.create');
        AppDispatcher.dispatch({
            actionType: ActionTypes.CREATE,
            value: text,
        });
    },
    update: function (item){
        console.log('action.edit');
        AppDispatcher.dispatch({
            actionType: ActionTypes.UPDATE,
            item: item
        });
    },
    destroy: function (id) {
        console.log('action.destroy');
        AppDispatcher.dispatch({
            actionType: ActionTypes.DESTROY,
            id: id,
        });
    },
};

module.exports = DemoActions;