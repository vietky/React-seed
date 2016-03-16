var path = require('path');
var IS_PROD = process.env.NODE_ENV === "production";
var root = path.resolve(__dirname, '..');
var appFolder = path.resolve(root, 'client');
var distFolder = path.resolve(root, 'dist');
var serverFolder = path.resolve(root, 'server');
var publicFolder = IS_PROD ? distFolder : appFolder;

var pathConfig = {
    root: root,
    appFolder: appFolder,
    distFolder: distFolder,
    publicFolder: publicFolder,
    serverFolder: serverFolder,
    getClientFilePath: function (filePath) {
        return path.resolve(this.publicFolder, filePath);
    }
};

module.exports = pathConfig;