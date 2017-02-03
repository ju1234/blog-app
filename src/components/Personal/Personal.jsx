/**
 * 文件说明： 个人主页
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/1
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//==================================================================
import * as path from '../../utils/paths.js';
import {actionGoToLoginPage} from '../../actions/commonAction.js';
import {actionGoToOther} from '../../actions/footerAction.js';
//==================================================================
import personalStyle from './scss/personal.scss'


class Personal extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Object.assign({}, {
      actionGoToLoginPage,
      actionGoToOther
    }), props.dispatch)
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  render() {
    return (
      <div className={personalStyle.personalContainer}>
        {
          this.props.logined ?
            <div>
              <div onClick={() => {this.context.router.push(path.PROFILE)}}>
                <p>个人资料</p>
              </div>
              <div onClick={() => {this.context.router.push(path.MYARTICLE)}}>
                <p>我的文章</p>
              </div>
              <div onClick={this.actions.actionGoToOther.bind(this,this.context.router,path.MYFAVORITE,[0,1,0,0])}>
                <p>我的收藏</p>
              </div>
              <div>
                <p>再来一篇</p>
              </div>
            </div>:
            <div className={personalStyle.isNotLogin} onClick={this.actions.actionGoToLoginPage.bind(this,this.context.router)}>
              <p>点击登录</p>
            </div>
        }
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    logined: store.login.toJS().logined
  }
}


export default connect(mapStateToProps)(Personal);
