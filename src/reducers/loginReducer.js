/**
 * 文件说明： 登录状态login
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1-17
 */
import Immutable from 'immutable'

const init = {
  username: 'BLOG',
  userID: 123456,
  logined: false
};

export default function loginReducer(state = Immutable.fromJS(init),action){
  switch (action.type){
    default:
      return state;
  }
}
