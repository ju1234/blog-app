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

export function goToOtherPage(articleInfo,router) {
  return (dispatch) => {
    articleInfo.author = articleInfo.author.replace('<span class="cue">','');
    articleInfo.author = articleInfo.author.replace('</span>','');
    apiPost(api.GET_MYARTICLE,{id: articleInfo.author_id})
      .then((data) => {
        dispatch({
          type: actionType.SET_OTHER,
          payload: {
            userInfo: {
              name: articleInfo.author,
              id: articleInfo.author_id
            },
            articleList: JSON.parse(data.data)
          }
        });
        router.push(path.OTHER + '/id=' + articleInfo.author_id);
      })
  }
}

