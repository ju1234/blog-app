/**
 * 文件说明： 接口调用
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/5.
 */

var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
module.exports = function(app) {

  // app.get('/', function (req, res,next) {
  //   location.href = 'index';
  // });
  app.get('/index', function (req, res) {
    document.title = '首页'
  });

};
