/**
 * 文件说明： 登陆页面
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/11.
 */

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//==========================================

import {actionLogin} from '../../actions/commonAction';

//==========================================
import loginStyle from './scss/login.scss'
import * as path from '../../utils/paths.js'


class Login extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Object.assign({}, {actionLogin}), props.dispatch)
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  onSubmit() {
    const username = this.refs.username.value,
      password = this.refs.password.value;

    const msg = {
      usernameMessage: this.refs.usernameMessage,
      passwordMessage: this.refs.passwordMessage
    };

    if (username.trim() === '') {
      msg.usernameMessage.innerHTML = '用户名不能为空';
    }
    if (password.trim() === '') {
      msg.passwordMessage.innerHTML = '密码不能为空';
      return false;
    }

    const data = {
      username: username,
      password: password
    };
    this.actions.actionLogin(data,msg,this.context.router)
  }

  onChange() {

  }


  render() {
    return (
      <div className={loginStyle.loginContainer}>
        <form>
          <div>
            <i>
              <img src="/images/login/account.png" alt="username"/>
            </i>
            <input type="text" ref="username"
                   placeholder="手机号或用户名"
                   onChange={() => {
                     this.refs.usernameMessage.innerHTML = '';
                   }}
            />
          </div>
          <p ref="usernameMessage"></p>
          <div>
            <i>
              <img src="/images/reg/password.png" alt="password"/>
            </i>
            <input type="password" ref="password"
                   placeholder="请输入密码"
                   onChange={() => {
                     this.refs.passwordMessage.innerHTML = '';
                   }}
            />
          </div>
          <p ref="passwordMessage"></p>
          <div>
            <p onClick={() => {
              this.context.router.push(path.REG)
            }}>
              没有账户？赶紧<span>注册</span>
            </p>
            <button type="button" onClick={this.onSubmit.bind(this)}>登录</button>
          </div>
        </form>
      </div>
    )
  }
}


export default connect()(Login);
