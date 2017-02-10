/**
 * 文件说明： 我的收藏页
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/1
 */


import Immutable from 'immutable';
import * as actionType from '../utils/actionTypes.js';


const init = {
  articleList : []
};

export default function myFavoriteReducer(state = Immutable.fromJS(init),action) {
  switch (action.type){
      // 设置我的收藏文章数据
    case actionType.MYFAVORITE_ARTICLE:
      return state.update('articleList',() => action.payload);
    default:
      return state;
  }
}
