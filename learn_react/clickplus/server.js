var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
//var lessMiddleware = require('less-middleware');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/',require('connect-history-api-fallback')());  //把public目录下的index.html作为所有不存在的路径的请求的响应返回给浏览器。

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

if(process.env.NODE_ENV !== 'production'){
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.js');
  var webpackCompiled = webpack(webpackConfig);
  //配置运行时打包，自动执行编译过程，该配置就不需要执行npm run build,该组件运行生成的文件放在缓存中，要服务器执行生辰的缓存文件，需要删除 npm run build编译命令生成的静态out.js文件
  var webpackDevMiddleware = require('webpack-dev-middleware');
  app.use(webpackDevMiddleware(webpackCompiled,{
    publicPath:'/', //该插件的唯一必填项，由于index.html请求的out.js存放的位置映射到服务器的URL路径是根，即“/”
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
  var port = server.address().port;
  console.log('open http://localhost:%s',port);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
