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
import {getMyFavoriteArticle} from '../../actions/myFavoriteAction.js'
import {goToView, changeHistoy} from '../../actions/commonAction.js'
//==========================================================
import ArticleList from '../../common/ArticleList/ArticleList.jsx';
import myFavoriteStyle from './scss/myFavorite.scss'
// import * as api from '../../utils/api.js';
// import {apiPost} from '../../api/API.js';


class MyFavorite extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Object.assign({
      getMyFavoriteArticle,
      goToView,
      changeHistoy,
    }, {}), props.dispatch)
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  componentDidMount() {
    this.actions.getMyFavoriteArticle(this.props.userInfo)
  }

  clickHandle(articleInfo) {
    this.actions.goToView(this.context.router, articleInfo);
    this.actions.changeHistoy(location.href.split('8888')[1])
  }

  render() {

    return (
      <div className={myFavoriteStyle.myFavoriteContainer}>
        {
          this.props.articleList.map((item, index) => {
            return <ArticleList key={index} articleInfo={item} clickHandle={this.clickHandle.bind(this)}/>
          })
        }
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
