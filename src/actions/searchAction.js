/**
 * 文件说明： 搜索 action
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/5
 */
import * as actionTypes from '../utils/actionTypes.js';
import * as api from '../utils/api.js'
import * as paths from '../utils/paths.js'
import {apiPost} from '../api/API.js'

// 搜索事件
export function actionSearch(value,reqCount) {
  return (dispatch) => {
    apiPost(api.SEARCH,{
      value: value,
      reqCount: reqCount
    })
      .then((data) => {
        if(reqCount > 1){
          dispatch({
            type: actionTypes.SET_SEARCH_DATA_AGIAN,
            payload: data
          });
        }else {
          dispatch({
            type: actionTypes.SET_SEARCH_DATA,
            payload: data
          })
        }
      })
  }
}

// 初始化搜索
export function actionInitSearch() {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SEARCH_INIT
    })
  }
}

// 跳转文章查看页面
export function actionGoToView(id,router) {
  return (dispatch) => {
    apiPost(api.GET_VIEW_ARTICLE,{id: id})
      .then((data) => {
        dispatch({
          type: actionTypes.SET_VIEW_ARTICLE,
          payload: JSON.parse(data.data)[0]
        });
        router.push(paths.VIEW +'/id='+ id);
      })
  }
}


//跳转他人主页
export function actionGoToOhterPage(userInfo, router) {
  return (dispatch) => {
    userInfo.name = userInfo.name.replace('<span class="cue">','');
    userInfo.name = userInfo.name.replace('</span>','');
    apiPost(api.GET_MYARTICLE,{id: userInfo.id})
      .then((data) => {
        dispatch({
          type: actionTypes.SET_OTHER,
          payload: {
            userInfo: userInfo,
            articleList: JSON.parse(data.data)
          }
        });
        router.push(paths.OTHER + '/id=' + userInfo.id);
      })
  }
}

