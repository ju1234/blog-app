/**
 * 文件说明： 主页
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/11.
 */

import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//==========================================================
import {getArticle} from '../../actions/homePageAction.js'

//==========================================================
import ArticleList from './ArticleList/ArticleList.jsx';
import homepageStyle from './scss/homepage.scss'



class HomePage extends Component{
  constructor(props){
    super(props);
    this.actions = bindActionCreators(Object.assign({
      getArticle
    },{}),props.dispatch)
  }

  componentDidMount(){
    if(this.props.articleList.length === 0){
      this.actions.getArticle()
    }
  }

  render(){
    return (
      <div className={homepageStyle.homepageContainer}>
        {
          this.props.articleList.map((item,index) => {
            return <ArticleList key={index} {...item}/>
          })
        }
      </div>
    )
  }
}


function mapStateToProps(store) {
  return {
    articleList: store.homePage.toJS().articleList
  }
}

export default connect(mapStateToProps)(HomePage);
