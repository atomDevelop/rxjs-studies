const path = require('path')
// console.log(typeof path.resolve(__dirname, 'dist'))
module.exports = {
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}