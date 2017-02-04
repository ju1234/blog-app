/**
 * 文件说明： 新建文章action
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/4
 */
import {apiPost} from '../api/API.js';
import * as api from '../utils/api.js';
import * as paths from '../utils/paths.js'
import * as actionTypes from '../utils/actionTypes.js'

// 存储文章
export function actionSaveArticle(data,router) {
  return (dispatch) => {
    apiPost(api.SAVE_ARTICLE,data)
      .then((data) => {
        router.push(paths.VIEW +'/id='+ JSON.parse(data.data)[0].id);
        dispatch({
          type: actionTypes.SET_VIEW_ARTICLE,
          payload: JSON.parse(data.data)[0]
        })
      })
  }
}
