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
import {getArticle} from '../../actions/homePageAction.js';
import {actionChangeTitle} from '../../actions/myFavoriteAction.js'
import {goToView,changeHistoy} from '../../actions/commonAction.js';
//==========================================================
import ArticleList from '../../common/ArticleList/ArticleList.jsx';
import homepageStyle from './scss/homepage.scss'
import * as api from '../../utils/api.js';
import {apiPost} from '../../api/API.js';



class HomePage extends Component{
  constructor(props){
    super(props);
    this.actions = bindActionCreators(Object.assign({
      getArticle,
      goToView,
      changeHistoy,
      actionChangeTitle
    },{}),props.dispatch)
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  componentDidMount(){
    if(this.props.articleList.length === 0){
      this.actions.getArticle()
    }
  }

  clickHandle(articleInfo){
    this.actions.goToView(this.context.router,articleInfo);
    apiPost(api.HITS_ADD,{id: articleInfo.id});
    this.actions.changeHistoy(location.href.split('8888')[1]);
    this.actions.actionChangeTitle(articleInfo.title)
  }

  render(){
    return (
      <div className={homepageStyle.homepageContainer}>
        {
          this.props.articleList.map((item,index) => {
            return <ArticleList key={index} articleInfo={item} clickHandle={this.clickHandle.bind(this)}/>
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
