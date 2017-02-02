/**
 * 文件说明： 文章查看页
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/1
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment'
//==================================================
import {actionGoToLoginPage} from  '../../actions/commonAction.js'
import {getViewArticle} from '../../actions/viewAction.js'
//==================================================
import viewStyle from './scss/view.scss'

class View extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Object.assign({}, {
      getViewArticle,
      actionGoToLoginPage
    }), props.dispatch)
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  componentDidMount() {
    if (JSON.stringify(this.props.article) === '{}') {
      this.actions.getViewArticle(location.href.split('id=')[1])
    }
  }

  favoriteClick(){
    if(!this.props.logined){
      if(confirm('您还没有登录，是否登录？')){
        this.actions.actionGoToLoginPage(this.context.router)
      }
    }
  }

  render() {
    return (
      <div className={viewStyle.viewContainer}>
        <div>
          <h4>{this.props.article.title}</h4>
          <i onClick={this.favoriteClick.bind(this)}>
            {
              this.props.favorited?
                <img src="/images/icon/enjoy1.png" alt=""/>:
                <img src="/images/icon/enjoy.png" alt=""/>
            }
          </i>
        </div>
        <div>
          <i>
            <img src={`http://16.1.30.200:3000/images/${parseInt(Math.random() * 19) + 1}.jpg`} alt=""/>
          </i>
          <span>{this.props.article.author + ' · '}</span>
          <span>{moment(this.props.article.time).format('YYYY-MM-DD h:mm:ss')}</span>
        </div>
        <div>{this.props.article.content}</div>
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    article: store.view.toJS().article,
    favorited: store.view.toJS().favorited,
    userInfo: store.login.toJS().userInfo,
    logined: store.login.toJS().logined
  }
}

export default connect(mapStateToProps)(View)
