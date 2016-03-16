var path = require('path');
var root = path.resolve(__dirname, '..');

var buildConfig = {
    root: root,
    appFolder: path.resolve(root, 'client'),
    distFolder: path.resolve(root, 'dist')
};

module.exports = buildConfig;