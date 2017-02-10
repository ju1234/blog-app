/**
 * 文件说明： 搜索页 reducer
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/5
 */
import Immutable from 'immutable';
import * as actionTypes from '../utils/actionTypes.js';

const init = {
  userList: [],
  articleList: []
};

export default function searchReducer(state = Immutable.fromJS(init), action) {
  switch (action.type) {
      // 再次加载数据并设置
    case actionTypes.SET_SEARCH_DATA_AGIAN:
      return state.update('userList', (oldValue) => {
        return Immutable.fromJS(mergeUniq(oldValue.toJS(), action.payload.userList));
      }).update('articleList', (oldValue) => {
        return  Immutable.fromJS(mergeUniq(oldValue.toJS(), action.payload.articleList));
      });

      // 设置搜索数据
    case actionTypes.SET_SEARCH_DATA:
      return Immutable.fromJS(action.payload);

      // 初始化设置
    case actionTypes.SEARCH_INIT:
      return Immutable.fromJS(init);

    default:
      return state;
  }
}

// 数组合并去重
function mergeUniq(old, newData) {
  for (let i = 0; i < newData.length; i++) {
    for (let j = 0; j < old.length; j++) {
      if (old[j].id === newData[i].id) {
        newData.splice(i, 1);
      }
    }
  }
  return old.concat(newData);
}


