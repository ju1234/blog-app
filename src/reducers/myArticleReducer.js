/**
 * 文件说明： 我的文章
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/1
 */

import Immutable from 'immutable';
import * as actionType from '../utils/actionTypes.js';

function myArticleReducer(state = Immutable.fromJS({}),action) {
  switch (action.type){
    // 设置我的文章数据
    case actionType.SET_MYARTICLE:
      return Immutable.fromJS(action.payload);
    default:
      return state;
  }
}

export default myArticleReducer;
