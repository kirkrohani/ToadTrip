const path = require('path');
const SOURCE_DIR = path.join(__dirname, '/client/src');
const DEST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SOURCE_DIR}/index.jsx`,
  output: {
    path: DEST_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
      }
    }
    ]
  }
};