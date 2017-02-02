/**
 * 文件说明： 个人主页
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/23
 */

import * as actionType from '../utils/actionTypes.js'
import * as api from '../utils/api.js'
import {apiPost} from '../api/API.js'

// 修改用户资料
export function actionAlterUserInfo(id,value,type) {
  console.log(id,value,type)
  return (dispatch) => {
    apiPost(api.ALTER_USER_INFO,{id: id,value: value,type: type})
      .then((msg) => {
        if(msg.msg){
          dispatch({
            type: actionType.ALTER_USER_INFO,
            payload: {
              key: type,
              value: value
            }
          })
        }
      })
  }
}
