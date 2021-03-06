/**
 * 文件说明： 公用action
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/9.
 */
import * as actionType from '../utils/actionTypes.js'
import * as paths from '../utils/paths.js'
import * as api from '../utils/api.js'


import {apiPost} from '../api/API.js'

// 登录
export function actionLogin(data, msg, router, path) {
  return (dispatch) => {
    apiPost(api.VERIFY_PASSWORD, data)
      .then((res) => {
        if (res.msg === false) {
          msg.passwordMessage.innerHTML = '密码错误';
        } else if (res.msg === undefined) {
          msg.usernameMessage.innerHTML = '该用户不存在';
        } else if (res.msg === true) {
          // 跳转上一页
          router.push(path);
          // 设置footer  active
          dispatch({
            type: actionType.SET_FOOTER_ACTIVE,
            payload: [1, 0, 0, 0]
          });
          // 设置头部 +号 按钮
          dispatch({
            type: actionType.HEADER_BTN_SHOW
          });
          // 设置用户登录信息
          dispatch({
            type: actionType.SET_USER_INFO,
            payload: {
              userInfo: res.info,
              logined: true
            }
          })
        }
      })
  }
}


// 跳转登录页面登录
export function actionGoToLoginPage(router) {

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
      payload: [0, 0, 0, 0]
    });
    // // 头部回退按钮显示
    // dispatch({
    //   type: actionType.SHOW_HEADER_BACKBTN
    // })
  }
}

//注销
export function actionLogout(router, path) {
  return (dispatch) => {
    // 跳转上一页
    router.push(path);
    // 设置footer  active
    dispatch({
      type: actionType.SET_FOOTER_ACTIVE,
      payload: [1, 0, 0, 0]
    });
    // 设置头部 +号 按钮
    dispatch({
      type: actionType.HEADER_BTN_SHOW
    });
    // 清除用户登录信息
    dispatch({
      type: actionType.CLEAR_USER_INFO,
      payload: {
        userInfo: {
          name: 'BLOG'
        },
        logined: false
      }
    })
  }
}

// 跳转注册页面
export function actionGoToRegPage(router) {
  router.push(paths.REG);
  return (dispatch) => {
    // 隐藏头部按钮
    dispatch({
      type: actionType.HEADER_BTN_HIDDEN
    });
    // 设置footer active
    dispatch({
      type: actionType.SET_FOOTER_ACTIVE,
      payload: [0, 0, 0, 0]
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


// 跳转view页面
export function goToView(router, payload) {
  router.push(paths.VIEW + '/id=' + payload.id);
  return (dispatch) => {
    dispatch({
      type: actionType.SET_VIEW_ARTICLE,
      payload: payload
    })
  }
}

// 修改历史路径
export function changeHistoy(path) {
  return (dispatch) => {
    dispatch({
      type: actionType.CHANGE_HISTORY,
      payload: path
    })
  }
}


