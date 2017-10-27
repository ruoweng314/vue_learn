var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main:[
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './src/index.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public')
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['env','stage-0','react'],
            plugins:[['import',{'libraryName':'antd','style':'css'}]] //配置按需加载  需要提前执行 npm install --save-dev babel-plugin-import
          }
        }
      },
      {
        test:/-m\.css$/,
        use:ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:[
            {
              loader:'css-loader',
              options:{
                modules:true,
                localIdentName:'[path][name]-[local]-[hash:base64:5]'
              }
            }
          ]
        })
      },
      {
        test:/^((?!(-m)).)*\.css$/,
        use:ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:'css-loader'
        })
      }
    ]
  },
  plugins:[  //热更新配置
    new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name:'vendor',
      minChunks: function(module){
        return module.context && module.context.indexOf('jquery') !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name:'common'
    })
  ]
};