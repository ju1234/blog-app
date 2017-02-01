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
