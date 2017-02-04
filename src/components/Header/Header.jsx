/**
 * 文件说明： 头部组件
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/9.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//=============================================================================
import {actionShowAlertModel, actionInit,actionChangeTitle} from '../../actions/headerAction.js'
import {actionSetFooterActive} from '../../actions/commonAction.js'
//==============================================================================

import headerStyle from './sass/header.scss'
import * as paths from '../../utils/paths.js'


import {pathProcessor} from '../../utils/pathInfo'



class Header extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(
      Object.assign({}, {
        actionShowAlertModel,
        actionInit,
        actionSetFooterActive,
        actionChangeTitle
      }), props.dispatch);
    this.alertToggle = false;
  }

  componentDidMount() {
   /* 默认跳转首页*/
    if (pathProcessor(location.href) === paths.BASE) {
      this.context.router.push('/index');
      this.actions.actionSetFooterActive([1,0,0,0])
    }
    this.actions.actionInit();

    // 刷新设置title
    this.actions.actionChangeTitle(pathProcessor(location.href));
    // 监听路径变化
    this.context.router.listen((event)=>{
      this.actions.actionChangeTitle(event.pathname);
      console.log(event.pathname)
    })
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };


  render() {
    let {login, header,title} = this.props;
    login = login.toJS();
    header = header.toJS();
    return (
      <div className={headerStyle.headerContainer}>
        <div onClick={() => {
          console.log(1)
        }}>
          {
            header.back ?
              <img src="/images/icon/back.png" alt="back" title="返回"/> :
              null
          }
        </div>
        <h1>{header.title}</h1>
        <div>
          {
            header.btn ?
              <button type="button" onClick={this.actions.actionShowAlertModel}>+</button> :
              null
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    login: store.login,
    header: store.header
  }
}

export default connect(mapStateToProps)(Header);
