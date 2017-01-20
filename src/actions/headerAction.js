/**
 * 文件说明： 头部action
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/9.
 */

import * as actionType from '../utils/actionTypes'

import {pathProcessor} from '../utils/pathInfo.js'

import * as paths from '../utils/paths'

// 显示弹出层
export function actionShowAlertModel() {
  return (dispatch) => {
    dispatch({
      type: actionType.SHOW_ALERTMODEL,
    })
  }
}


// 刷新初始化
export function actionInit() {
  const path = pathProcessor(location.href);

  return (dispatch) => {
    if(path === paths.LOGIN || path === paths.REG){
      // 隐藏头部按钮
      dispatch({
        type: actionType.HEADER_BTN_HIDDEN
      })
    }else {
      //显示头部按钮
      dispatch({
        type: actionType.HEADER_BTN_SHOW
      })
    }
  }
}

