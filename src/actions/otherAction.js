/**
 * 文件说明： 用户信息 action
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/5
 */
import {apiPost} from '../api/API.js';

//=======================================================
import * as actionType from '../utils/actionTypes.js';
import * as api from '../utils/api.js'
import * as path from '../utils/paths.js'

// 获取他人主页数据
export function actionGetOtherData(id) {
  return (dispatch) => {
    apiPost(api.GET_OTHER, {id: id})
      .then((data) => {
        const articleList = JSON.parse(data.data);
        const userInfo = {
          name: articleList[0].author,
          id: articleList[0].author_id
        };
        dispatch({
          type: actionType.SET_OTHER,
          payload: {
            userInfo: userInfo,
            articleList: articleList
          }
        })
      })
  }
}
