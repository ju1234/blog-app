/**
 * 文件说明： 注册页面
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/20
 */

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//=======================================
import {register} from '../../actions/regAction.js'

//=======================================
import regStyle from './scss/reg.scss';
import ageArr from '../../utils/ageArr.js';

import {regFormValidator} from '../../utils/regFormValidator.js';


class Reg extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Object.assign({},{register}),props.dispatch)
    this.status = [0, 0, 0, 0];
  }

  // 密码验证
  ntPassword() {
    if(this.status[1] === 0){
      return false
    }
    if (this.refs.password.value.trim() === '') {
      this.refs.passwordMsg.innerHTML = '密码不得为空';
      return;
    }
    if (this.refs.password.value.trim() === this.refs.ntpassword.value.trim()) {
      this.refs.ntpasswordMsg.innerHTML = '验证通过';
      this.refs.ntpasswordMsg.style.color = '#1296db';
      this.status[2] = 1;
    }else {
      this.refs.ntpasswordMsg.innerHTML = '密码不正确';
      this.status[2] = 0;
    }
  }

  onSubmitHandle(data,status = this.status){
    this.actions.register(data,status)
  }

  //表单输入内容验证
  fromVal(value, type, msg, status = this.status) {
    regFormValidator(value, type, msg,status);
  }

  render() {
    return (
      <div className={regStyle.regContainer}>
        <form>
          <div>
            <i>
              <img src="/images/reg/err/account.png" alt="username"/>
            </i>
            <input type="text" ref="name"
                   placeholder="*请输入用户名"
                   onBlur={() => {
                       this.fromVal(
                         this.refs.name.value,
                         'name',
                         this.refs.nameMsg
                       )
                     }
                   }
                   onChange={() => {
                     this.refs.nameMsg.innerHTML = ''
                   }}
            />
          </div>
          <p ref="nameMsg"></p>
          <div>
            <i>
              <img src="/images/reg/err/password.png" alt="password"/>
            </i>
            <input type="password" ref="password"
                   placeholder="*请输入密码"
                   onBlur={() => {
                     this.fromVal(
                       this.refs.password.value,
                       'password',
                       this.refs.passwordMsg
                     )
                   }
                   }
                   onChange={() => {
                     this.refs.passwordMsg.innerHTML = ''
                     this.refs.ntpasswordMsg.innerHTML = ''
                   }}
            />
          </div>
          <p ref='passwordMsg'></p>
          <div>
            <i>
              <img src="/images/reg/err/ntpassword.png" alt="ntpassword"/>
            </i>
            <input type="password" ref="ntpassword"
                   placeholder="*请再次输入密码"
                   onBlur={this.ntPassword.bind(this)}
                   onChange={() => {
                     this.refs.ntpasswordMsg.innerHTML = ''
                   }}
            />
          </div>
          <p ref="ntpasswordMsg"></p>
          <div>
            <i>
              <img src="/images/reg/phone.png" alt="phone"/>
            </i>
            <input type="text" ref="phone"
                   placeholder="请输入手机号码"
                   onBlur={() => {
                     this.fromVal(
                       this.refs.phone.value,
                       'phone',
                       this.refs.phoneMsg
                     );
                   }
                   }
                   onChange={() => {
                     this.refs.phoneMsg.innerHTML = ''
                   }}
            />
          </div>
          <p ref="phoneMsg"></p>
          <div>
            <div>
              <i>
                <img src="/images/reg/sex.png" alt="sex"/>
              </i>
              <select name="sex" ref="sex">
                <option value="1">男</option>
                <option value="0">女</option>
              </select>
            </div>
            <div>
              <i>
                <img src="/images/reg/age.png" alt="age"/>
              </i>
              <select name="age" ref="age">
                {
                  ageArr.map((item, index) => {
                    return (
                      <option value={item} key={index}>{item}</option>
                    )
                  })
                }
              </select>
            </div>
          </div>
          <p></p>
          <div>
            <i>
              <img src="/images/reg/map.png" alt="address"/>
            </i>
            <input type="text" ref="address"
                   placeholder="居住地所在城市"
            />
          </div>
          <p></p>
          <div>
            <i>
              <img src="/images/reg/email.png" alt="email"/>
            </i>
            <input type="text" ref="email"
                   placeholder="请输入常有邮箱"
            />
            <select name="email" ref="_email">
              <option value="@qq.com">@qq.com</option>
              <option value="@163.com">@163.com</option>
              <option value="@gmail.com">@gmail.com</option>
            </select>
          </div>
          <p></p>
          <div>
            <button type="button" onClick={() => {
              this.onSubmitHandle(
                {
                  name: this.refs.name.value.trim(),
                  password: this.refs.password.value.trim(),
                  phone: this.refs.phone.value.trim(),
                  sex: this.refs.sex.value,
                  age: this.refs.age.value,
                  address: this.refs.address.value.trim(),
                  email: this.refs.email.value + this.refs._email.value
                }
              )
            }}>注册</button>
          </div>
        </form>
      </div>
    )
  }
}


export default connect()(Reg)




