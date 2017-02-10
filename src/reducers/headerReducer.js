/**
 * 文件说明： 头组件
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1-17
 */

import Immutable from 'immutable';

import * as actionType from '../utils/actionTypes';

const init = {
  back: false,
  btn: true,
  title: ''
};


export default function headerReducer(state = Immutable.fromJS(init), action) {
  switch (action.type) {

    // 头部弹出层按钮隐藏 与显示
    case actionType.HEADER_BTN_HIDDEN:
      return state.update('btn',() => false);
    case actionType.HEADER_BTN_SHOW:
      return state.update('btn',() => true);

      // 头部回退按钮显示和隐藏
    case actionType.HIDE_HEADER_BACKBTN:
            return state.update('back', () => false);
    case actionType.SHOW_HEADER_BACKBTN:
      return state.update('back', () => true);

    case actionType.CHANGE_TITLE:
      return state.update('title',() => {
        return action.payload
      });

    default:
      return state;
  }
}
