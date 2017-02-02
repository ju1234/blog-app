/**
 * 文件说明： 文章查看页 reducer
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/1
 */

import Immutable from 'immutable';
import * as actionType from '../utils/actionTypes.js'

const init = {
  article: {},
  favorited: false
};


export default function viewReducer(state = Immutable.fromJS(init),action) {
  switch (action.type){
    case actionType.SET_VIEW_ARTICLE:
      return state.update('article',() => {
          return action.payload;
        });
    default:
      return state;
  }
}
