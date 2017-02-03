/**
 * 文件说明： 我的收藏action
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
export function getMyFavoriteArticle(userInfo) {
  const {id,favorite} = userInfo;
  return (dispatch) => {
    apiPost(api.GET_MYFAVORITE_ARTICLE,{
      id: id,
      favorite: favorite
    })
      .then((res) => {
        console.log(JSON.parse(res.data));
        dispatch({
          type: actionType.MYFAVORITE_ARTICLE,
          payload: JSON.parse(res.data)
        })
      })
  }
}
