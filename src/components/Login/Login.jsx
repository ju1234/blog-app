/**
 * 文件说明： 登陆页面
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/11.
 */

import React, {Component} from 'react';

//==========================================
import Header from '../Header/Header.jsx';
import HomePage from '../Footer/Footer.jsx';

//==========================================
import loginStyle from './scss/login.scss'


export default class Login extends Component {
  render() {
    console.log('login', this.props);
    return (
      <div className={loginStyle.loginContainer}>
        <form>
          <div>
            <i>
              <img src="/images/login/account.png" alt="username"/>
            </i>
            <input type="text" ref="username"/>
          </div>
          <div>
            <i>
              <img src="/images/login/stop.png" alt="password"/>
            </i>
            <input type="password" ref="password"/>
          </div>
          <div>
            <p>
              没有账户？赶紧<span>注册</span>
            </p>
            <button type="button">登录</button>
          </div>
          <div>

          </div>
        </form>
      </div>
    )
  }
}
