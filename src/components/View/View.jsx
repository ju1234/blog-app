/**
 * 文件说明： 文章查看页
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/1
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment'
//==================================================
import {actionGoToLoginPage} from  '../../actions/commonAction.js';
import {getViewArticle, setFavorite,changeMyFavorite} from '../../actions/viewAction.js';
import {actionChangeTitle} from '../../actions/myFavoriteAction.js';
//==================================================
import viewStyle from './scss/view.scss';
import {noEscapeSequence} from '../../utils/viewUtils.js'
import {LOCALHOST} from '../../utils/localhostConfig.js';

class View extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Object.assign({}, {
      getViewArticle,
      actionGoToLoginPage,
      setFavorite,
      changeMyFavorite,
      actionChangeTitle
    }), props.dispatch)
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  // 是否被收藏
  ifFavorite() {
    if (this.props.userInfo.favorite && this.props.article) {
      const favorite = this.props.userInfo.favorite;
      const favArr = favorite.split(',');
      if (favArr.some((item) => {
          return this.props.article.id === item
        })) {
        this.actions.setFavorite(true);
      } else {
        this.actions.setFavorite(false);
      }
    } else {
      this.actions.setFavorite(false);
    }

  }

  componentDidMount() {
    if (JSON.stringify(this.props.article) === '{}') {
      this.actions.getViewArticle(location.href.split('id=')[1])
    }
    this.ifFavorite();
    this.refs.content.innerHTML = noEscapeSequence(this.props.article.content);
  }

  componentDidUpdate() {
    this.ifFavorite();
    this.actions.actionChangeTitle(this.props.article.title);
    this.refs.content.innerHTML = noEscapeSequence(this.props.article.content);
  }

  favoriteClick() {
    if (!this.props.logined) {
      if (confirm('您还没有登录，是否登录？')) {
        this.actions.actionGoToLoginPage(this.context.router)
      }
    } else {
      if(this.props.favorited){
        //取消收藏
        this.actions.changeMyFavorite(this.props.article.id,this.props.userInfo.id,true);

      }else{
        // 收藏
        this.actions.changeMyFavorite(this.props.article.id,this.props.userInfo.id,false);
      }
    }
  }

  render() {
    const favoriteImgSrc = this.props.favorited ? 'enjoy1.png' : 'enjoy.png';

    return (
      <div className={viewStyle.viewContainer}>
        {
          this.props.article ?
            <div>
              <div>
                <h4>{this.props.article.title}</h4>
                <i onClick={this.favoriteClick.bind(this)}>
                  <img src={`\/images\/icon\/${favoriteImgSrc}`} alt="收藏" title="收藏"/>
                </i>
              </div>
              <div>
                <i>
                  <img src={`http://${LOCALHOST}:3000/images/${parseInt(Math.random() * 19) + 1}.jpg`} alt="头像" title="头像"/>
                </i>
                <span>{this.props.article.author + ' · '}</span>
                <span>{moment(this.props.article.time).format('YYYY-MM-DD h:mm:ss')}</span>
              </div>
              <article ref="content">{}</article>
            </div> :
            <div>该文章消失在茫茫人海中。。。。。。对此我们表示抱歉。。如果不服，你来打我啊</div>
        }
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    article: store.view.toJS().article,
    favorited: store.view.toJS().favorited,
    userInfo: store.login.toJS().userInfo,
    logined: store.login.toJS().logined
  }
}

export default connect(mapStateToProps)(View)
