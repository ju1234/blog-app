/**
 * 文件说明： 底部action
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/19
 */

import * as actionType from '../utils/actionTypes.js'
import * as paths from '../utils/paths.js'
import {pathProcessor} from '../utils/pathInfo'

// 刷新初始化配置
export function footInit() {
  const path = pathProcessor(location.href);
  return (dispatch) => {
    switch (path) {
      // 设置active
      case paths.INDEX:
        dispatch({
          type: actionType.SET_FOOTER_ACTIVE,
          payload: [1,0,0,0]
        });
        break;
    }
  }
}

// 跳转主页
export function actionGoToIndex(router) {
  router.push(paths.INDEX);
  return (dispatch) => {
    // 设置active
    dispatch({
      type: actionType.SET_FOOTER_ACTIVE,
      payload: [1,0,0,0]
    });

    //显示头部按钮
    dispatch({
      type: actionType.HEADER_BTN_SHOW
    });

    // 回退按钮隐藏
    dispatch({
      type: actionType.HIDE_HEADER_BACKBTN
    })
  }
}

//跳转个人主页
export function actionGoToPersonal(router) {
  router.push(paths.PERSONAL);
  return (dispatch) => {
    // 设置active
    dispatch({
      type: actionType.SET_FOOTER_ACTIVE,
      payload: [0,0,0,1]
    });

    //显示头部按钮
    dispatch({
      type: actionType.HEADER_BTN_SHOW
    });

    // 回退按钮隐藏
    dispatch({
      type: actionType.HIDE_HEADER_BACKBTN
    })
  }
}


// 跳转其他页面
export function actionGoToOther(router,url,activeArr) {
  router.push(url);
  return (dispatch) => {
    // 设置active
    dispatch({
      type: actionType.SET_FOOTER_ACTIVE,
      payload: activeArr
    });

    //显示头部按钮
    dispatch({
      type: actionType.HEADER_BTN_SHOW
    });

    // 回退按钮隐藏
    dispatch({
      type: actionType.HIDE_HEADER_BACKBTN
    })
  }
}
