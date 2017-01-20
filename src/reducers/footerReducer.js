/**
 * 文件说明：footer组件 Reducer
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1-19
 */

import Immutable from 'immutable';
import * as actionType from '../utils/actionTypes.js'

const init = {
  active: [0,0,0,0]
};

export default function (state = Immutable.fromJS(init),action) {
  switch (action.type){
    case actionType.SET_FOOTER_ACTIVE:
      return state.update('active',() => action.payload);

    default:
      return state;
  }
}
