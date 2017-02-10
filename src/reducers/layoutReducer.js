/**
 * 文件说明： 框架组件reducer
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1-17
 */

import Immutable from 'immutable';
import * as actionType from '../utils/actionTypes.js';
import * as paths from '../utils/paths.js';


const init = {
  showHeader: true,
  showFooter: true,
  showAlert: false,
  alertInfo: [],
  history: paths.INDEX
};

export default function layoutReducer(state = Immutable.fromJS(init),action) {
  switch (action.type){
    // 显示弹出层
    case actionType.SHOW_ALERTMODEL:
      return state.update('showAlert',() => true);

    // 隐藏弹出层
    case actionType.HIDE_ALERTMODEL:
      return state.update('showAlert',() => false);

      // 修改历史路径
    case actionType.CHANGE_HISTORY:
      return state.update('history',() => {
        return action.payload
      });
    default:
      return state;
  }
}
