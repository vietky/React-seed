var webpack = require('webpack');
var path = require('path');
var root = path.resolve(__dirname, '..');

var entries = [
    path.resolve(root, 'app/main.js')
];
var outputPath = path.resolve(root, 'dist/');
var plugins = [];

var config = function (isProd) {
    plugins.push(new webpack.DefinePlugin({
        IS_PROD: isProd
    }));

    if (!isProd) {
        outputPath = path.resolve(root);
        entries.push.apply(entries, [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080'
        ]);

        plugins.push.apply(plugins, [
            new webpack.HotModuleReplacementPlugin(),
        ]);
    } else {
        plugins.push.apply(plugins, [
            new webpack.optimize.UglifyJsPlugin(),
        ]);
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
            'react-router': 'ReactRouter',
            'react-bootstrap': 'ReactBootstrap',
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