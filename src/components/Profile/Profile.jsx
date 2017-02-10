/**
 * 文件说明： 用户资料
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/23
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
//================================================
import Bar from './ProfileBar/ProfileBar.jsx'
import {actionAlterUserInfo} from '../../actions/personalAction.js'
import {actionGoToLoginPage} from '../../actions/commonAction.js'
//============================================
import {infoProcess} from '../../utils/profileConfig.js'
import profileStyle from './scss/profile.scss'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Object.assign({}, {actionAlterUserInfo, actionGoToLoginPage}), props.dispatch)
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  render() {
    const userInfo = infoProcess(this.props.userInfo);
    return (
      <div className={profileStyle.profileContainer}>
        {
          userInfo.map((item, index) => {
            if (item.key === 'favorite') {
              return null;
            }
            return <Bar info={item} key={index} id={userInfo[0].value}
                        onclick={this.actions.actionAlterUserInfo.bind(this)}/>
          })
        }
      </div>
    )
  }
}


function mapStateToProp(store) {
  return {
    userInfo: store.login.toJS().userInfo,
  }
}

export default connect(mapStateToProp)(Profile);


