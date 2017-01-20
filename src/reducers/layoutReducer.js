/**
 * 文件说明： 框架组件reducer
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1-17
 */

import Immutable from 'immutable'
import * as actionType from '../utils/actionTypes.js'

const init = {
  showHeader: true,
  showFooter: true,
  showAlert: false,
  alertInfo: [],
};

export default function layoutReducer(state = Immutable.fromJS(init),action) {
  switch (action.type){
    case actionType.SHOW_ALERTMODEL:
      return state.update('showAlert',() => true);

    case actionType.HIDE_ALERTMODEL:
      return state.update('showAlert',() => false);

    default:
      return state;
  }
}
