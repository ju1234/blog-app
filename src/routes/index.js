/**
 * 文件说明： 路由组件
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/9.
 */

import React from 'react'
import {Router,Route,browserHistory,IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
//=======================================================================

import store from '../store/store';
//=======================================================================
 /*布局组件*/
import Layout from '../Layout/Layout.jsx';
 /*主页*/
import IndexPage from '../components/IndexPage/IndexPage.jsx';
 /*登录组件*/
import Login from '../components/Login/Login.jsx';
 /*注册组件*/
import Reg from '../components/Register/Reg.jsx'
 /*个人主页组件*/
import Personal from '../components/Personal/Personal.jsx'
 /*用户资料组件*/
import Profile from '../components/Profile/Profile.jsx'




const routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <Route path="/index" component={IndexPage}/>
        <Route path="/login" component={Login}/>
        <Route path="/reg" component={Reg}/>
        <Route path='/personal'>
          <IndexRoute component={Personal}/>
          <Route path='profile' component={Profile}/>
        </Route>
      </Route>
    </Router>
  </Provider>
);



export default routes
