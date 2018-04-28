const path = require('path')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  }
}
