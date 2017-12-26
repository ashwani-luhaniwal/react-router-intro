module.exports = {
    entry: './UnderstandReactRouterV4/index.js',
    output: {
        filename: 'bundle.js',
        publicPath: ''
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}