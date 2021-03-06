/**
 * 文件说明： 路由组件
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/9.
 */

import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
//=======================================================================
import store from '../store/store';
//=======================================================================
/*布局组件*/
import Layout from '../Layout/Layout.jsx';
/*主页*/
import HomePage from '../components/HomePage/HomePage.jsx';
/*登录组件*/
import Login from '../components/Login/Login.jsx';
/*注册组件*/
import Reg from '../components/Register/Reg.jsx';
/*个人主页组件*/
import Personal from '../components/Personal/Personal.jsx';
/*用户资料组件*/
import Profile from '../components/Profile/Profile.jsx';
/*文章查看页*/
import View from '../components/View/View.jsx';
/*我的文章页*/
import MyArticle from '../components/MyArticle/MyArticle.jsx';
/*我的收藏页*/
import MyFavorite from '../components/MyFavorite/MyFavorite.jsx';
/*新建文章*/
import Write from '../components/Write/Write.jsx';
/*搜索*/
import Search from '../components/Search/Search.jsx';
/*其他用户信息页*/
import Other from '../components/Other/Other.jsx';

const routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <Route path="/index" component={HomePage}/>
        <Route path="/login" component={Login}/>
        <Route path="/reg" component={Reg}/>
        <Route path='/view/:id' component={View}/>
        <Route path='/myFavorite' component={MyFavorite}/>
        <Route path='/write' component={Write}/>
        <Route path='/search' component={Search}/>
        <Route path='/other/:id' component={Other}/>
        <Route path='/personal'>
          <IndexRoute component={Personal}/>
          <Route path='profile' component={Profile}/>
          <Route path='myArticle' >
            <IndexRoute component={MyArticle}/>
          </Route>
        </Route>
      </Route>
    </Router>
  </Provider>
);


export default routes;
