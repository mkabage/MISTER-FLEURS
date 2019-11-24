'use strict'
const path = require('path');
const {VueLoaderPlugin} = require('vue-loader')
module.exports= {
  mode:'development',
  entry: {
    app: path.resolve(__dirname, '../','src/main.js')
  },
  module: {
    rules:[
      {
        test:/\.vue$/,
        use:'vue-loader'
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin()
  ]
}
