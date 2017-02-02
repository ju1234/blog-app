/**
 * 文件说明： 文章查看页 事件
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/1
 */

import * as actionType from '../utils/actionTypes.js'
import * as api from '../utils/api.js'
import * as path from '../utils/paths.js'
import {apiPost} from '../api/API.js'

// 获取文章查看页  文章数据
export function getViewArticle(id) {
  return (dispatch) => {
    apiPost(api.GET_VIEW_ARTICLE, {id: id})
      .then((data) => {
        dispatch({
          type: actionType.SET_VIEW_ARTICLE,
          payload: JSON.parse(data.data)[0]
        });

      })
  }
}

// 设置文章收藏
export function setFavorite(msg) {
  return (dispatch) => {
    if (msg) {
      dispatch({
        type: actionType.SET_FAVORITE,
        payload: true
      })
    }else {
      dispatch({
        type: actionType.SET_FAVORITE,
        payload: false
      })
    }
  }
}
