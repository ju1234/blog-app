/**
 * 文件说明： 我的文章
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/2
 */
import {apiPost} from '../api/API.js';
//=======================================================
import * as actionType from '../utils/actionTypes.js';
import * as api from '../utils/api.js'
import * as path from '../utils/paths.js'

// 获取我的文章数据
export function getMyArticle(author_id) {
  return (dispatch) => {
    apiPost(api.GET_MYARTICLE, {id: author_id})
      .then((data) => {
        dispatch({
          type: actionType.SET_MYARTICLE,
          payload: JSON.parse(data.data)
        })
      })
  }
}

// 删除文章
export function deleteArticle(articleInfo) {
  return (dispatch) => {
    apiPost(api.DELETE_ARTICLE, {id: articleInfo.id})
      .then((data) => {
        apiPost(api.GET_MYARTICLE, {id: articleInfo.author_id})
          .then((data) => {
            dispatch({
              type: actionType.SET_MYARTICLE,
              payload: JSON.parse(data.data)
            })
          })
      })
  }
}
