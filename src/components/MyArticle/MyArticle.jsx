/**
 * 文件说明： 我的文章 页面
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/1
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//====================================================
import ArticleList from '../../common/ArticleList/ArticleList.jsx';
import {getMyArticle, deleteArticle} from '../../actions/myArticleAction.js';
import {goToView} from '../../actions/commonAction.js';
import {actionChangeTitle} from '../../actions/myFavoriteAction.js'
//====================================================
import myArticleStyle from './scss/myArticle.scss';
import * as paths from '../../utils/paths.js';
// import * as api from '../../utils/api.js';
// import {apiPost} from '../../api/API.js';


class MyArticle extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Object.assign({}, {
      getMyArticle,
      goToView,
      deleteArticle,
      actionChangeTitle
    }), props.dispatch);
  }


  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  componentDidMount() {
    //获取我的文章数据
    this.actions.getMyArticle(this.props.userInfo.id);
  }

  // 删除我的文章
  deleteHandle(articleInfo) {
    if (confirm("您确定删除吗？")) {
      this.actions.deleteArticle(articleInfo);
    }
  }

  // 点击查看文章
  clickHandle(articleInfo) {
    this.actions.goToView(this.context.router, articleInfo);
    this.actions.actionChangeTitle(articleInfo.title)
  }

  render() {
    let count = this.props.myArticle.length;
    return (
      <div className={myArticleStyle.myArticleWrap}>
        {
          count ?
            <div className={myArticleStyle.myArticleContainer}>{
              this.props.myArticle.map((item, index) => {
                return <ArticleList key={index} articleInfo={item}
                                    deleteHandle={this.deleteHandle.bind(this)}
                                    clickHandle={this.clickHandle.bind(this)}/>
              })
            }</div> :
            <div className={myArticleStyle.hasNoArticle}
                 onClick={() => {
                   this.context.router.push(paths.WRITE)
                 }}>
              <em>您还没有发表任何文章,尝试来一发？</em>
            </div>
        }
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    myArticle: store.myArticle.toJS(),
    userInfo: store.login.toJS().userInfo
  }
}

export default connect(mapStateToProps)(MyArticle);
