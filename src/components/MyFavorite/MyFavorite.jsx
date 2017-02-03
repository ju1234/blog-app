/**
 * 文件说明： 主页
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/11.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//==========================================================
import {getMyFavoriteArticle,actionChangeTitle} from '../../actions/myFavoriteAction.js';
import {goToView, changeHistoy} from '../../actions/commonAction.js';
import {actionGoToOther} from '../../actions/footerAction.js';
//==========================================================
import ArticleList from '../../common/ArticleList/ArticleList.jsx';
import myFavoriteStyle from './scss/myFavorite.scss';
// import * as api from '../../utils/api.js';
// import {apiPost} from '../../api/API.js';
import * as paths from '../../utils/paths.js';


class MyFavorite extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Object.assign({
      getMyFavoriteArticle,
      goToView,
      changeHistoy,
      actionGoToOther,
      actionChangeTitle
    }, {}), props.dispatch)
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  componentDidMount() {
    if(this.props.userInfo.favorite.length === 0){
      this.hasFavorite = false;
    }else {
      this.hasFavorite = true;
      this.actions.getMyFavoriteArticle(this.props.userInfo)
    }

  }

  clickHandle(articleInfo) {
    this.actions.goToView(this.context.router, articleInfo);
    this.actions.changeHistoy(location.href.split('8888')[1]);
    this.actions.actionChangeTitle(articleInfo.title)
  }

  render() {
    const content = this.hasFavorite?
      ( <div className={myFavoriteStyle.hisFavorite}>{
        this.props.articleList.map((item, index) => {
          return <ArticleList key={index} articleInfo={item} clickHandle={this.clickHandle.bind(this)}/>
        })
      }</div>):
      (<div className={myFavoriteStyle.hasNoFavorite}
        onClick={this.actions.actionGoToOther.bind(this,this.context.router,paths.INDEX,[1,0,0,0])}>
        <em>您还没有收藏任何文章，随便看看吧</em>
      </div>);

    return (
      <div className={myFavoriteStyle.myFavoriteContainer}>
        {content}
      </div>
    )
  }
}


function mapStateToProps(store) {
  return {
    articleList: store.myFavorite.toJS().articleList,
    userInfo: store.login.toJS().userInfo
  }
}

export default connect(mapStateToProps)(MyFavorite);
