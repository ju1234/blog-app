/**
 * 文件说明： 公用action
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/9.
 */
import * as actionType from '../utils/actionTypes.js'
import * as paths from '../utils/paths.js'


// 登录
export function actionLogin(router) {

  router.push(paths.LOGIN);
  // location.href = paths.LOGIN;
  return (dispatch) => {
    // 隐藏头部按钮
    dispatch({
      type: actionType.HEADER_BTN_HIDDEN
    });
    // 设置footer active
    dispatch({
      type: actionType.SET_FOOTER_ACTIVE,
      payload: [0,0,0,0]
    });
    // 头部回退按钮显示
    dispatch({
      type: actionType.SHOW_HEADER_BACKBTN
    })
  }
}

//注销
export function actionLogout() {
  return (dispatch) => {

  }
}

// 注册
export function actionReg(router) {
  router.push(paths.REG);
  return (dispatch) => {
    // 隐藏头部按钮
    dispatch({
      type: actionType.HEADER_BTN_HIDDEN
    });
    // 设置footer active
    dispatch({
      type: actionType.SET_FOOTER_ACTIVE,
      payload: [0,0,0,0]
    })
  }
}


// 隐藏弹出框
export function actionHideAlert() {
  return (dispatch) => {
    dispatch({
      type: actionType.HIDE_ALERTMODEL
    })
  }
}

// 设置底部active
export function actionSetFooterActive(payload) {
  return (dispatch) => {
    dispatch({
      type: actionType.SET_FOOTER_ACTIVE,
      payload: payload
    })
  }
}
