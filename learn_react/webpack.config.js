var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');

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
      }, 
      {
          test: /\.less$/,
          include:/src/,
          exclude: /node_modules/,
          use:ExtractTextPlugin.extract({
            fallback:'style-loader',
            use:[
              {
                loader:'css-loader',
                options:{
                  modules:true,
                  importLoaders:3,
                  localIdentName:'[path][name]-[local]-[hash:base64:5]'
                }
              },
               {
                loader: path.resolve(__dirname, '..', 'loader/less-css-modules-assets-fix-loader.js')
              },
              {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                        require('autoprefixer')()
                    ]
                }
              },
              {
                  loader: 'less-loader'
              }
              ]
          })
      },
      {
          test: /\.woff(\?.*)?$/,
          use: 'url-loader?prefix=fonts/&name=[name]_[hash:8].[ext]&limit=10000&mimetype=application/font-woff'
      },
      {
          test: /\.woff2(\?.*)?$/,
          use: 'url-loader?prefix=fonts/&name=[name]_[hash:8].[ext]&limit=10000&mimetype=application/font-woff2'
      },
      {
          test: /\.otf(\?.*)?$/,
          use: 'file-loader?prefix=fonts/&name=[name]_[hash:8].[ext]&limit=10000&mimetype=font/opentype'
      },
      {
          test: /\.ttf(\?.*)?$/,
          use: 'url-loader?prefix=fonts/&name=[name]_[hash:8].[ext]&limit=10000&mimetype=application/octet-stream'
      },
      {
          test: /\.eot(\?.*)?$/,
          use: 'file-loader?prefix=fonts/&name=[name]_[hash:8].[ext]'
      },
      {
          test: /\.svg(\?.*)?$/,
          use: 'url-loader?prefix=fonts/&name=[name]_[hash:8].[ext]&limit=10000&mimetype=image/svg+xml'
      },
      {
          test: /\.(png|jpg|jpeg)$/,
          use: 'url-loader?limit=8192'
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