/**
 * 文件说明： 头组件
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1-17
 */

import Immutable from 'immutable'

import * as actionType from '../utils/actionTypes'

const init = {
  back: true,
  btn: true,
};


export default function headerReducer(state = Immutable.fromJS(init), action) {
  switch (action.type) {

    case actionType.HEADER_BTN_HIDDEN:
      return state.update('btn',() => false);

    case actionType.HEADER_BTN_SHOW:
      return state.update('btn',() => true);

    default:
      return state;
  }
}
