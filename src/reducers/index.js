/**
 * 文件说明： reducer导出
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/9.
 */
import {combineReducers} from 'redux'

import layoutReducer from './layoutReducer'
import loginReducer from './loginReducer.js';
import headerReducer from './headerReducer.js';
import footerReducer from './footerReducer.js';
import homePageArticleReducer from './homePageArticleReducer.js';
import viewReducer from './viewReducer.js';
import myArticleReducer from './myArticleReducer.js';
import myFavoriteReducer from './myFavoriteReducer.js';


const reducers = combineReducers({
  login: loginReducer,
  header: headerReducer,
  layout: layoutReducer,
  footer: footerReducer,
  homePage: homePageArticleReducer,
  view: viewReducer,
  myArticle: myArticleReducer,
  myFavorite: myFavoriteReducer
});

export default reducers;

