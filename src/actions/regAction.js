/**
 * 文件说明： 注册事件
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/21
 */


import * as api from '../utils/api.js'
import {apiPost} from '../api/API.js'

// 注册数据判断
export function register(data,status) {
  return (dispatch) => {
    const isPass = status.every((item) => {
      return item === 1;
    });

    if(isPass){
      for (let key in data){
        if(data[key] === ''){
          delete data[key]
        }
      }
      if(data['email'].split('@')[0] === ''){
        delete data['email']
      }
      apiPost(api.REG,data)
        .then()
    }else {
      alert('请核对后再提交');
    }
  }
}
