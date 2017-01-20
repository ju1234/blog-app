/**
 * 文件说明： redux store
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/9.
 */
import {createStore,applyMiddleware} from 'redux';
import {browserHistory} from 'react-router'
import {routerMiddleware} from 'react-router-redux'


import reducers from '../reducers';

import thunk from 'redux-thunk'



const store = createStore(
  reducers,
  applyMiddleware(thunk)
);


export default store;
