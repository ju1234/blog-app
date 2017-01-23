/**
 * 文件说明： 个人主页
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/23W
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
//================================================
import Bar from '../../common/PersonalBar/PersonalBar.jsx'
import {actionAlterUserInfo} from '../../actions/personalAction.js'
//============================================
import {infoProcess} from '../../utils/personalUtils.js'
import personalStyle from './scss/personal.scss'

class Personal extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Object.assign({},{actionAlterUserInfo}),props.dispatch)
  }

  render() {
    const userInfo = infoProcess(this.props.userInfo);
    return (
      <div className={personalStyle.personalContainer}>
        {
          userInfo.map((item,index) => {
            return <Bar info={item} key={index} id={userInfo[0].value} onclick={this.actions.actionAlterUserInfo.bind(this)}/>
          })
        }
      </div>
    )
  }
}


function mapStateToProp(store) {
  return {
    userInfo: store.login.toJS().userInfo
  }
}

export default connect(mapStateToProp)(Personal);


