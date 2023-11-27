const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  devtool: 'eval-source-map',
  output: {
    path: path.join(__dirname, '../Server/wwwroot/js/reactapp'), // the bundle output path
    filename: 'bundle.js', // the name of the bundle
    clean: true, // completely removes file at the target location and repalces it with the updated one
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@sharedHooks': path.resolve(__dirname + '/src/shared/hooks'),
      '@sharedComponents': path.resolve(__dirname + '/src/shared/components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: 'url-loader',
        options: { limit: false },
      },
    ],
  },
};
