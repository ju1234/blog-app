/**
 * 文件说明： 路由组件
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/9.
 */

import React from 'react'
import {Router,Route,browserHistory,IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux'

import {createHistory, createHashHistory, useBasename} from 'history';

import store from '../store/store'
import Layout from '../Layout/Layout.jsx'
import IndexPage from '../components/IndexPage/IndexPage.jsx'
import Login from '../components/Login/Login.jsx'






const routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <Route path="/index" component={IndexPage}/>
        <Route path="/login" component={Login}/>
        <Route path="/reg" component={Login}/>
      </Route>
    </Router>
  </Provider>
);



export default routes
