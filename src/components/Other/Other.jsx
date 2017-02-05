/**
 * 文件说明： 其他用户 信息页
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/5
 */


import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import ArticleList from '../Search/ArticleList/ArticleList.jsx'
//===============================================
import {actionGoToView} from '../../actions/searchAction.js';
import {actionChangeTitle} from '../../actions/myFavoriteAction.js';
//===============================================
import otherStyle from './scss/other.scss'


class Other extends Component{
  constructor(props){
    super(props);
    this.actions = bindActionCreators(Object.assign({},{
      actionGoToView,
      actionChangeTitle
    }),props.dispatch)
  }

  articleClick(article_id, router = this.context.router) {
    this.actions.actionGoToView(article_id, router)
  }

  componentDidUpdate(){
    this.actions.actionChangeTitle(`${this.props.userInfo.name}的主页`)
  }

  render(){
    console.log(this.props);
    return (
      <div className={otherStyle.otherContainer}>
        <div>
          <i>
            <img src={`http://16.1.30.200:3000/images/${parseInt(Math.random() * 19) + 1}.jpg`} alt="头像" title="头像"/>
          </i>
          <span>{this.props.userInfo.name || null}</span>
        </div>
        <div>
          {
            this.props.articleList.map((article, index) => {
              return <ArticleList key={index}
                                  article={article}
                                  clickHandle={this.articleClick.bind(this)}
              />
            })
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    userInfo: store.other.toJS().userInfo,
    articleList: store.other.toJS().articleList
  }
}

export default connect(mapStateToProps)(Other)
