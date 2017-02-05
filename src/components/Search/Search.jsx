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
import SearchArticleList from './SearchArticleList/SearchArticleList.jsx'
//================================================================
import {actionSearch, actionInitSearch, actionGoToView} from '../../actions/searchAction.js'
//================================================================
import searchStyle from './scss/search.scss';


class Search extends Component {
  constructor(props) {
    super(props);
    this.reqCount = 1;
    this.actions = bindActionCreators(Object.assign({}, {
      actionSearch,
      actionInitSearch,
      actionGoToView
    }), props.dispatch)
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  changeHandle(e) {
    this.reqCount = 1;
    console.log(e.target.value);
    if (e.target.value !== '') {
      this.actions.actionSearch(e.target.value, this.reqCount);
    } else {
      this.actions.actionInitSearch();
    }
  }

  userClick(user_id, router = this.context.router) {

  }

  articleClick(article_id, router = this.context.router) {
    this.actions.actionGoToView(article_id, router)
  }

  render() {
    console.log('router',this.context.router)
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
        <div>
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
                  return <SearchArticleList key={index}
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
