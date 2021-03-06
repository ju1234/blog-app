/**
 * 文件说明： 弹出层组件
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/9.
 */


import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Button from './Button/Button.jsx'
import alertModelStyle from './scss/alertModel.scss'

import {actionGoToLoginPage,actionLogout,actionGoToRegPage,actionHideAlert} from '../../actions/commonAction.js'


class AlertModel extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Object.assign({},{actionGoToLoginPage,actionLogout,actionGoToRegPage,actionHideAlert}),props.dispatch)
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };


  componentDidMount() {
  }


  render() {
    return (
      <div className={alertModelStyle.alertModel} onClick={this.actions.actionHideAlert.bind(this)}>
        {this.props.logined?
          <div>
            <Button text="注销" onclick={this.actions.actionLogout.bind(this,this.context.router,this.props.history)}/>
          </div>:
          <div>
            <Button text="登录" onclick={this.actions.actionGoToLoginPage.bind(this,this.context.router)}/>
            <Button text="注册" onclick={this.actions.actionGoToRegPage.bind(this,this.context.router)}/>
          </div>
        })}
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    history: store.layout.toJS().history
  }
}

export default connect(mapStateToProps)(AlertModel);
