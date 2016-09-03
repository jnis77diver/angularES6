module.exports = {
    devtool: 'sourcemap',  // emits sourcemap when it handles the bundle
    output: {
        filename: 'bundle.js'
    },
    module: {
        loader: [
            {test: /\.js$/, exclude: [/node_modules/], loader: 'ng-annotate!babel'},  // ng-annotate for dependency injection, bable to convert from es6 to es5
            {test: /\/.html$/, loader: 'raw'},
            {test: /\/.css$/, loader: 'style!css'},
            {test: /\/.styl$/, loader: 'style!css!stylus'},
            {test: /\/.(tff|otf|eot|svg|woff(2)?)$/, loader: 'url'},
        ]
    }
}