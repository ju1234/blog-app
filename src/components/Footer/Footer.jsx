/**
 * 文件说明： FOOTER组件
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/9.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
//===================================================================================
import {footInit,actionGoToIndex,actionGoToOther} from '../../actions/footerAction.js'
//===================================================================================
import * as paths from '../../utils/paths.js'
import footerStyle from './sass/footer.scss'

class Footer extends Component {

  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Object.assign({},{
      footInit,
      actionGoToIndex,
      actionGoToOther
    }),props.dispatch);
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  componentDidMount(){
    this.actions.footInit();
  }

  render() {
    const active = this.props.footer.toJS().active;

    return (
      <div className={footerStyle.footerContainer}>
        {
          active[0] ?
            <div onClick={this.actions.actionGoToOther.bind(this,this.context.router,paths.INDEX,[1,0,0,0])}>
              <i>
                <img src="/images/iconActive/index.png" alt="首页" title="首页"/>
              </i>
              <span style={{color: '#1296db'}}>首页</span>
            </div> :
            <div onClick={this.actions.actionGoToOther.bind(this,this.context.router,paths.INDEX,[1,0,0,0])}>
              <i>
                <img src="/images/icon/index.png" alt="首页" title="首页"/>
              </i>
              <span>首页</span>
            </div>
        }
        {
          active[1] ?
            <div onClick={this.actions.actionGoToOther.bind(this,this.context.router,paths.MYFAVORITE,[0,1,0,0])}>
              <i>
                <img src="/images/iconActive/favorite.png" alt="收藏" title="收藏"/>
              </i>
              <span style={{color: '#1296db'}}>收藏</span>
            </div> :
            <div onClick={this.actions.actionGoToOther.bind(this,this.context.router,paths.MYFAVORITE,[0,1,0,0])}>
              <i>
                <img src="/images/icon/favorite.png" alt="收藏" title="收藏"/>
              </i>
              <span>收藏</span>
            </div>
        }
        {
          active[2] ?
            <div onClick={this.actions.actionGoToOther.bind(this,this.context.router,paths.SEARCH,[0,0,1,0])}>
              <i>
                <img src="/images/iconActive/search.png" alt="搜索" title="搜索"/>
              </i>
              <span style={{color: '#1296db'}}>搜索</span>
            </div> :
            <div  onClick={this.actions.actionGoToOther.bind(this,this.context.router,paths.SEARCH,[0,0,1,0])}>
              <i>
                <img src="/images/icon/search.png" alt="搜索" title="搜索"/>
              </i>
              <span>搜索</span>
            </div>
        }
        {
          active[3] ?
            <div onClick={this.actions.actionGoToOther.bind(this,this.context.router,paths.PERSONAL,[0,0,0,1])}>
              <i>
                <img src="/images/iconActive/smile.png" alt="个人主页" title="个人主页"/>
              </i>
              <span style={{color: '#1296db'}}>我的</span>
            </div> :
            <div onClick={this.actions.actionGoToOther.bind(this,this.context.router,paths.PERSONAL,[0,0,0,1])}>
              <i>
                <img src="/images/icon/smile.png" alt="个人主页" title="个人主页"/>
              </i>
              <span>我的</span>
            </div>
        }
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    footer: store.footer
  }
}

export default connect(mapStateToProps)(Footer)
