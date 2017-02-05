/**
 * 文件说明： reducer导出
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/9.
 */
import {combineReducers} from 'redux'

// 布局框架
import layoutReducer from './layoutReducer';
// 登录信息
import loginReducer from './loginReducer.js';
//Header
import headerReducer from './headerReducer.js';
// Footer
import footerReducer from './footerReducer.js';
//首页
import homePageArticleReducer from './homePageArticleReducer.js';
// 文章查看
import viewReducer from './viewReducer.js';
// 我的文章
import myArticleReducer from './myArticleReducer.js';
// 我的收藏
import myFavoriteReducer from './myFavoriteReducer.js';
// 搜索
import searchReducer from './searchReducer.js';

const reducers = combineReducers({
  login: loginReducer,
  header: headerReducer,
  layout: layoutReducer,
  footer: footerReducer,
  homePage: homePageArticleReducer,
  view: viewReducer,
  myArticle: myArticleReducer,
  myFavorite: myFavoriteReducer,
  search: searchReducer
});

export default reducers;

