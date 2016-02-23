var AppDispatcher = require('../dispatchers/AppDispatcher.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var DemoConstants = require('../constants/DemoConstants.js');
var ActionTypes = DemoConstants.ActionTypes;

var CHANGE_EVENT = 'change';

var _demoStorage = {
    'abcz': {
        id: 'abcz',
        value: 'text'
    }
};

function create(value) {
    var newId = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    _demoStorage[newId] = {
        id: newId,
        value: value
    };
}

function update(item) {
    _demoStorage[item.id] = item;
}

function destroy(id) {
    delete _demoStorage[id];
}

var DemoStore = assign({}, EventEmitter.prototype, {
    get: function(id){
        return _demoStorage[id];
    },
    getAll: function () {
        console.log('GetAll');
        console.log(_demoStorage);
        return _demoStorage;
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
});

AppDispatcher.register(function (payload) {
    console.log('store');
    console.log(payload);

    switch (payload.actionType) {
    case ActionTypes.CREATE:
        create(payload.value);
        DemoStore.emitChange();
        break;
    case ActionTypes.UPDATE:
        update(payload.item);
        DemoStore.emitChange();
        break;
    case ActionTypes.DESTROY:
        destroy(payload.id);
        DemoStore.emitChange();
        break;
    default:
    }
});

module.exports = DemoStore;