/**
 * 文件说明： server
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/1.
 */
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.set('port', (process.env.PORT || 8888));


app.use('/', express.static(path.join(__dirname + '/static')));

// Additional middleware which will set headers that we need on each request.
app.use(function (req, res, next) {
  // Set permissive CORS header - this allows this server to be used only as
  // an API server in conjunction with something like webpack-dev-server.
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Disable caching so we'll always get the latest comments.
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, "src/index.html"));
});

// // 路由处理
// app.get('/', (req, res, next) => {
//   res.sendFile(path.join(__dirname, "src/index.html"));
// });
//
// app.get('/index', (req, res, next) => {
//   res.sendFile(path.join(__dirname, "src/index.html"));
//   // next();
// });
//
//
// app.get('/login', (req, res, next) => {
//   res.sendFile(path.join(__dirname, "src/index.html"));
// });
//
// app.get('/reg', (req, res, next) => {
//   res.sendFile(path.join(__dirname, "src/index.html"));
// });
//
// app.get('/personal', (req, res, next) => {
//   res.sendFile(path.join(__dirname, "src/index.html"));
// });


// routes(app);
var isProduction = process.env.NODE_ENV === 'production';
console.log(process.env.NODE_ENV, process.env.NODE_ENV === 'production');

var port = isProduction ? 80 : 8888;

app.listen(port, function () {
  console.log('Server started: http://localhost:' + port + '/');
});

