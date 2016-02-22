var webpack = require('webpack');
var path = require('path');
var root = path.resolve(__dirname, '..');

var entries = [
    path.resolve(root, 'app/main.js')
];
var outputPath = path.resolve(root, 'dist/');
var plugins = [];

var config = function (isProd) {

    if (!isProd) {
        outputPath = path.resolve(root);
        entries.push('webpack/hot/dev-server');
        entries.push('webpack-dev-server/client?http://localhost:8080');

        plugins.push(
            new webpack.HotModuleReplacementPlugin()
        );
    }

    return {
        entry: entries,
        output: {
            path: outputPath,
            filename: 'bundle.js'
        },
        resolve: {
            alias: {}
        },
        externals: {
            'jquery': 'jQuery',
            'react': 'React',
            'react-dom': 'ReactDOM',
            'react-bootstrap': 'react-bootstrap',
        },
        plugins: plugins,
        module: {
            noParse: [],
            loaders: [
                {
                    test: /\.(js)$/,
                    exclude: '/node_modules/',
                    loader: 'babel-loader'
            },
                {
                    test: /\.(css|scss|sass)$/,
                    loader: 'style!css!sass'
            }
        ],
        }
    };
};


//var deps = [
//    'jquery.min.js',
//    'bootstrap.min.js',
//    'react-0.14.7.min.js',
//    'react-dom-0.14.7.min.js',
//    'react-bootstrap.min.js'
//];

//var libPath = path.join(root, '/app/libs/');
//for (var dep in deps) {
//    var depPath = path.resolve(libPath, dep);
//    //    config.resolve.alias[]
//    config.module.noParse.push(depPath);
//    console.log(depPath);
//}

module.exports = config;