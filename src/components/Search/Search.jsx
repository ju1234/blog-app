/**
 * 文件说明： 搜索页面
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/4
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import UserList from './UserList/UserList.jsx'
import ArticleList from './ArticleList/ArticleList.jsx'
//================================================================
import {actionSearch, actionInitSearch, actionGoToView, actionGoToOhterPage} from '../../actions/searchAction.js';
//================================================================
import searchStyle from './scss/search.scss';


class Search extends Component {
  constructor(props) {
    super(props);
    this.reqCount = 1;
    this.actions = bindActionCreators(Object.assign({}, {
      actionSearch,
      actionInitSearch,
      actionGoToView,
      actionGoToOhterPage
    }), props.dispatch)
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  componentDidMount() {
    this.actions.actionInitSearch();

    addEventListener('scroll', this.searchScrollHandle.bind(this));
  }

  componentWillUnmount() {
    removeEventListener('scroll', this.searchScrollHandle);
  }


  searchScrollHandle(e) {
    // console.log(React)
    const searchContent = this.refs.searchContent;
    let scrollTop = document.body.scrollTop;

    if (searchContent !== undefined) {
      let height = searchContent.offsetHeight;
      let screenHeight = $(window).height();
      if (scrollTop + screenHeight + 100 >= height && this.props.search.hsaMore) {
        this.reqCount++;
        if (this.refs.searchInput.value !== '') {
          this.actions.actionSearch(this.refs.searchInput.value, this.reqCount);
        }
      }
    }
  }


  changeHandle(e) {
    this.reqCount = 1;
    if (e.target.value !== '') {
      this.actions.actionSearch(e.target.value, this.reqCount);
    } else {
      this.actions.actionInitSearch();
    }
  }

  userClick(userInfo, router = this.context.router) {
    this.actions.actionGoToOhterPage(userInfo, router);
  }

  articleClick(article_id, router = this.context.router) {
    this.actions.actionGoToView(article_id, router)
  }

  render() {
    const users = this.props.search.userList;
    const articleList = this.props.search.articleList;

    return (
      <div className={searchStyle.searchContainer}>
        <div>
          <input type="text"
                 placeholder="您想搜索的内容"
                 ref="searchInput"
                 onChange={this.changeHandle.bind(this)}
          />
          <button type="button">搜索</button>
        </div>
        <div ref='searchContent'>
          <div>
            <h6>用户：</h6>
            <div>
              {
                users.map((user, index) => {
                  return <UserList userInfo={user}
                                   key={index}
                                   clickHandle={this.userClick.bind(this)}
                  />
                })
              }
            </div>
          </div>
          <div>
            <h6>文章：</h6>
            <div>
              {
                articleList.map((article, index) => {
                  return <ArticleList key={index}
                                      article={article}
                                      clickHandle={this.articleClick.bind(this)}
                  />
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    search: store.search.toJS()
  }
}

export default connect(mapStateToProps)(Search)
