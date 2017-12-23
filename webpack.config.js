module.exports = {
    entry: './index.jsx',

    output: {
        filename: 'bundle.js',
        publicPath: ''
    },

    module: {
        loaders: [
            {
                test: /\.jsx?/, 
                exclude: /node_modules/, 
                loader: 'babel-loader', 
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}