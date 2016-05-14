var path = require('path');

module.exports = {

    entry: {
        main: './src/main.jsx'
    },

    output: {
        filename: '[name].js',
        publicPath: '/build/',
        path: path.join(__dirname, 'build/')
    },

    devtool: '#source-map',

    devServer: {
      watch:true,
      inline: true,
      host: '0.0.0.0',
      port: '3333',
      compress: true,
      watchOptions: {
            aggregateTimeout: 300,
            poll: 2000
      },
      historyApiFallback: true
    },

    module: {
         loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
              test: /\.jpg$/,
              loader: "url"
          }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
