/**
 * 文件说明： 文章查看页
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/1
 */

import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment'
//==================================================

import {getViewArticle} from '../../actions/viewAction.js'
//==================================================
import viewStyle from './scss/view.scss'

class View extends Component{
  constructor(props){
    super(props);
    this.actions = bindActionCreators(Object.assign({},{
      getViewArticle
    }),props.dispatch)
  }

  componentDidMount(){
    if(JSON.stringify(this.props.article) === '{}'){
      this.actions.getViewArticle(location.href.split('=')[1])
    }
  }

  render(){
    return (
      <div className={viewStyle.viewContainer}>
        <h4>{this.props.article.title}</h4>
        <div>
          <i>
            <img src={`http://16.1.30.200:3000/images/${parseInt(Math.random()*19)+1}.jpg`} alt=""/>
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
    article: store.view.toJS()
  }
}

export default connect(mapStateToProps)(View)
