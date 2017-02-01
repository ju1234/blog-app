/**
 * 文件说明： 文章查看页 reducer
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/1
 */

import Immutable from 'immutable';
import * as actionType from '../utils/actionTypes.js'

export default function viewReducer(state = Immutable.fromJS({}),action) {
  switch (action.type){
    case actionType.SET_VIEW_ARTICLE:
      return Immutable.fromJS(action.payload);
    default:
      return state;
  }
}
