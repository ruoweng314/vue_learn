var express = require('express');
var app = express();
var proxy = require('http-proxy-middleware');
//var httpProxy = require('http-proxy');
const request = require('request');
var config = require('../config/index.js');
//var url = require('url');
//var proxy = httpProxy.createProxyServer({
//   target:'http://camptest.clickplus.cn:80'
// });
app.use('/',require('connect-history-api-fallback')());  //把public目录下的index.html作为所有不存在的路径的请求的响应返回给浏览器。
app.use('/',express.static(config.staticPath));

 app.use('/users',proxy({
        target:'http://camptest.clickplus.cn',
        changeOrigin:true
      }));

// function remoteRequest(req,res){
//   var pathname = url.parse(req.url).pathname;
//   console.log(pathname);
//    if(pathname.indexOf("ajax") > 0){
//       console.log("执行了");
     
//       proxy.web(req,res);
//   }
// }





if(process.env.NODE_ENV !== 'production'){
  var webpack = require('webpack');
  var webpackConfig = require('../config/webpack/webpack.dev.config.js');
  var webpackCompiled = webpack(webpackConfig);
  //配置运行时打包，自动执行编译过程，该配置就不需要执行npm run build,该组件运行生成的文件放在缓存中，要服务器执行生辰的缓存文件，需要删除 npm run build编译命令生成的静态out.js文件
  var webpackDevMiddleware = require('webpack-dev-middleware');
  app.use(webpackDevMiddleware(webpackCompiled,{
    publicPath:config.publicPath, //该插件的唯一必填项，由于index.html请求的out.js存放的位置映射到服务器的URL路径是根，即“/”
    stats:{colors:true}, //设置console带颜色输出
    lazy:false, //懒加载，true表示不监控源代码修改状态，false需要使用配套的watchOptions选项设置相关参数
    watchOptions:{
      aggregateTimeout:500,
      poll:true
    }
  }));


  //热更新配置,用于处理修改代码，立即刷新
  var webpackHotMiddleware = require('webpack-hot-middleware');
  app.use(webpackHotMiddleware(webpackCompiled));
}

var server = app.listen(2000,function(){
 // app.get('/*',remoteRequest);
  var port = server.address().port;
  console.log('open http://localhost:%s',port);
});


module.exports = app;
