/**
 * 文件说明： 注册事件
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/21
 */

import * as actionType from '../utils/actionTypes.js'
import * as api from '../utils/api.js'
import * as path from '../utils/paths.js'
import {apiPost} from '../api/API.js'

// 注册数据判断
export function register(data, status, router) {
  return (dispatch) => {
    delete data.ntpassword;
    for (let key in data) {
      if (data[key] === '') {
        delete data[key]
      }
    }
    if (data['email'].split('@')[0] === '') {
      delete data['email']
    }
    apiPost(api.REG, data)
      .then((msg) => {
        if (msg.msg) {
          // 设置登录信息
          dispatch({
            type: actionType.SET_USER_INFO,
            payload: {
              userInfo: data,
              logined: true
            }
          });
          // 跳转主页
          router.push(path.INDEX);
          //头部右侧按钮显示
          dispatch({
            type: actionType.HEADER_BTN_SHOW
          });
          // 设置footer activve
          dispatch({
            type: actionType.SET_FOOTER_ACTIVE,
            payload: [1, 0, 0, 0]
          })
        }
      })
  }
}
