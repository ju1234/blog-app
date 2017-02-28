/**
 * 文件说明： api
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/20
 */

import {LOCALHOST} from '../utils/localhostConfig.js';

export function apiGet(url, dataType = 'json',) {
  return new Promise((resolve, reject) => {
    $.ajax({
      // url:'http://16.1.30.200:3000/api/all',
      url: `http://${LOCALHOST}:3000${url}`,
      type: 'get', //GET
      async: true,
      timeout: 5000,    //超时时间
      dataType: dataType,    //返回的数据格式：json/xml/html/script/jsonp/text
      success: function (data, textStatus, jqXHR) {
        resolve(data);
      },
      error: function (xhr, textStatus) {
        console.log('错误');
        console.log(xhr);
        console.log(textStatus)
      }
    })
  })
}


export function apiPost(url,data,dataType = 'json') {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `http://${LOCALHOST}:3000${url}`,
      // url: `http://16.1.30.200:3000${url}`,
      type: 'post', //GET
      async: true,    //或false,是否异
      data: data,
      timeout: 5000,    //超时时间
      dataType: dataType,    //返回的数据格式：json/xml/html/script/jsonp/text
      success: function (data, textStatus, jqXHR) {
        // console.log(JSON.parse(data));
        resolve(JSON.parse(data));
        // console.log(textStatus)
        // console.log(jqXHR)
      },
      error: function (xhr, textStatus) {
        console.log('错误');
        console.log(xhr);
        console.log(textStatus)
      }
    })
  })
}
