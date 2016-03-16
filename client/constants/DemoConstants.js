var keymirror = require('keymirror');

var DemoConstants = {
    ActionTypes: keymirror({
        CREATE : null,
        UPDATE: null,
        DESTROY: null,
    })
};

module.exports = DemoConstants;