var path = require('path');

var deps = [
    'jquery.min.js',
    'bootstrap.min.js',
    'react-0.14.7.min.js',
    'react-dom-0.14.7.min.js',
    'react-bootstrap.min.js'
];

var config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
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
    module: {
        noParse: [],
        loaders: [
            {
                test: /\.(js)$/,
                exclude: '/node_modules/',
                loader: 'babel-loader'
            },
        ],
    }
};

var libPath = path.join(__dirname, '/app/libs/');
for (var dep in deps) {
    var depPath = path.resolve(libPath, dep);
    //    config.resolve.alias[]
    config.module.noParse.push(depPath);
    console.log(depPath);
}

module.exports = config;