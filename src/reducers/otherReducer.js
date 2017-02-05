/**
 * 文件说明： 他人信息页
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/5
 */

import Immutable from 'immutable';
import * as actionType from '../utils/actionTypes.js';

const init = {
  userInfo: {},
  articleList: []
};

export default function otherReducer(state = Immutable.fromJS(init),action) {
  switch (action.type){
    case actionType.SET_OTHER:
      return Immutable.fromJS(action.payload);
    default:
      return state;
  }
}
