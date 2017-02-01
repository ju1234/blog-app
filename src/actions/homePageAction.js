/**
 * 文件说明： 首页action
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/1
 */

import {apiPost} from '../api/API.js';

//=======================================================
import * as actionType from '../utils/actionTypes.js';
import * as api from '../utils/api.js'
import * as path from '../utils/paths.js'

// 获取文章数据
export function getArticle() {
  return (dispatch) => {
    apiPost(api.GET_HOMEPAGE_ARTICLE)
      .then((res) => {
        dispatch({
          type: actionType.SET_HOMEPAGE_ARTICLE,
          payload: JSON.parse(res.data)
        })
      })
  }
}

// 跳转view页面
export function goToView(router,payload) {
  router.push(path.VIEW +'/id='+ payload.id);
  return (dispatch) => {
    dispatch({
      type: actionType.SET_VIEW_ARTICLE,
      payload: payload
    })
  }
}

