/**
 * 文件说明： 登录状态login
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1-17
 */
import Immutable from 'immutable'

import * as actionType from '../utils/actionTypes.js'

const init = localStorage.getItem('BLOG_USER_INFO')?
  JSON.parse(localStorage.getItem('BLOG_USER_INFO')):
  {
    userInfo: {
      name: "BLOG"
    },
    logined: false,

  };

export default function loginReducer(state = Immutable.fromJS(init),action){
  switch (action.type){
    // 登陆成功 设置用户信息
    case actionType.SET_USER_INFO:
      localStorage.setItem('BLOG_USER_INFO',JSON.stringify(action.payload));
      return Immutable.fromJS(action.payload);

    case actionType.ALTER_USER_INFO:
      let st = state.toJS();
      st.userInfo[action.payload.key] = action.payload.value;
      localStorage.setItem('BLOG_USER_INFO',JSON.stringify(st));
      return Immutable.fromJS(st);

      //注销   清楚用户信息
    case actionType.CLEAR_USER_INFO:
      localStorage.clear('BLOG_USER_INFO');
      return Immutable.fromJS(action.payload);

    default:
      return state;
  }
}
