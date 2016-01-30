var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var cors = require('cors');
var httpProxy = require('http-proxy');
var express = require('express');
var request = require('request');

// var proxy = new httpProxy.RoutingProxy();
var app = new express();
var port = 3000;


// function apiProxy(host, port) {
//   return function(req, res, next) {
//     if(req.url.match(new RegExp('^\/api\/'))) {
//       proxy.proxyRequest(req, res, {host: host, port: port});
//     } else {
//       next();
//     }
//   };
// }

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));

app.use('/proxy', function(req, res) {
  var url = req.url.replace('/?url=','');
  req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT || 3000);


// app.use(webpackHotMiddleware(compiler));
// app.use(express.static(process.cwd() + "/generated"));
// app.use(apiProxy('localhost', 3000));
// app.use(express.bodyParser());
// app.use(express.errorHandler());


app.use(function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
//
//
// app.listen(port, function(error) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
//   }
// });
