/**
 * 文件说明： 首页文章
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/1
 */


import Immutable from 'immutable';
import * as actionType from '../utils/actionTypes.js';

const init = {
  articleList: [],
  hasMore: true
};

export default function homePageArticleReducer(state = Immutable.fromJS(init), action) {
  switch (action.type) {
    // 设置首页文章数据
    case actionType.SET_HOMEPAGE_ARTICLE:
      return state.update('articleList', (oldValue) => {
        return mergeUniq(oldValue, action.payload);
      });
    case actionType.SET_GETARTICLE_HASMORE:
      return state.update('hasMore', () => action.payload);
    default:
      return state;
  }
}


// 数组合并 并 去重
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
