/**
 * 文件说明： 弹出层组件
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/9.
 */


import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Button from '../Button/Button.jsx'
import alertModelStyle from './scss/alertModel.scss'

import {actionLogin,actionLogout,actionReg,actionHideAlert} from '../../actions/commonAction.js'


class AlertModel extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Object.assign({},{actionLogin,actionLogout,actionReg,actionHideAlert}),props.dispatch)
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };


  componentDidMount() {
    console.log('i am asd on')
  }


  render() {
    console.log(this.context)
    return (
      <div className={alertModelStyle.alertModel} onClick={this.actions.actionHideAlert.bind(this)}>
        {this.props.logined?
          <div>
            <Button text="注销" onclick={this.actions.actionLogout.bind(this,this.context.router)}/>
          </div>:
          <div>
            <Button text="登录" onclick={this.actions.actionLogin.bind(this,this.context.router)}/>
            <Button text="注册" onclick={this.actions.actionReg.bind(this,this.context.router)}/>
          </div>
        })}
      </div>
    )
  }
}


export default connect()(AlertModel);
