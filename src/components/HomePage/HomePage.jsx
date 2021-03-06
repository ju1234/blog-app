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
import {getArticle, goToOtherPage} from '../../actions/homePageAction.js';
import {actionChangeTitle} from '../../actions/myFavoriteAction.js';
import {goToView, changeHistoy} from '../../actions/commonAction.js';
//==========================================================
import ArticleList from '../../common/ArticleList/ArticleList.jsx';
import homepageStyle from './scss/homepage.scss'
import * as api from '../../utils/api.js';
import {apiPost} from '../../api/API.js';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.reqCount = 1;
    this.actions = bindActionCreators(Object.assign({
      getArticle,
      goToView,
      changeHistoy,
      actionChangeTitle,
      goToOtherPage
    }, {}), props.dispatch)
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  componentDidMount() {
    this.reqCount = 1;
    if (this.props.articleList.length === 0) {
      this.actions.getArticle(this.reqCount)
    }
    addEventListener('scroll', this.scrollHandle.bind(this))
  }

  componentWillUnmount(){
    removeEventListener('scroll', this.scrollHandle)
  }

  scrollHandle(e) {
    const homeContainer = this.refs.homeContainer;
    let scrollTop = document.body.scrollTop;

    if (homeContainer !== undefined) {
      let height = homeContainer.offsetHeight;
      let screenHeight = $(window).height();
      console.log(this.props.hasMore);
      if (scrollTop + screenHeight + 100 >= height && this.props.hasMore) {
        this.reqCount++;
        this.actions.getArticle(this.reqCount);
      }
    }
  }

  goToOtherPage(articleInfo) {
    this.actions.goToOtherPage(articleInfo, this.context.router)
  }

  clickHandle(articleInfo) {
    this.actions.goToView(this.context.router, articleInfo);
    apiPost(api.HITS_ADD, {id: articleInfo.id});
    this.actions.changeHistoy(location.href.split('8888')[1]);
    this.actions.actionChangeTitle(articleInfo.title)
  }

  render() {
    return (
      <div className={homepageStyle.homepageContainer}
           ref="homeContainer"
      >
        {
          this.props.articleList.map((item, index) => {
            return <ArticleList
              key={index}
              articleInfo={item}
              clickHandle={this.clickHandle.bind(this)}
              goToOtherPage={this.goToOtherPage.bind(this)}
            />
          })
        }
      </div>
    )
  }
}


function mapStateToProps(store) {
  return {
    articleList: store.homePage.toJS().articleList,
    hasMore: store.homePage.toJS().hasMore
  }
}

export default connect(mapStateToProps)(HomePage);
