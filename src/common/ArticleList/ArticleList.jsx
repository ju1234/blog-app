/**
 * 文件说明： 首页文章展示栏
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/1
 */


import React, {Component} from 'react';
import moment from 'moment';
//-------------------------------------------------
import articleListStyle from './scss/articleList.scss'
import {noEscapeSequence} from '../../utils/viewUtils.js'

export default class ArticleList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.refs.overview.innerHTML = noEscapeSequence(this.props.articleInfo.content.substring(0, 40)) + '...'
  }

  render() {
    const deleteBtn = this.props.deleteHandle ?
      (<button type="button"
               onClick={this.props.deleteHandle.bind(this, this.props.articleInfo)}
      >删除</button>) :
      null;


    return (
      <div className={articleListStyle.articleList}>
        <div
          onClick={() => {
            if(typeof this.props.goToOtherPage === 'function'){
              this.props.goToOtherPage(this.props.articleInfo)
            }
          }}>
          <i>
            <img src={`http://16.1.30.200:3000/images/${parseInt(Math.random() * 19) + 1}.jpg`} alt="头像" title="头像"/>
          </i>
          <span>{this.props.articleInfo.title}</span>
          {deleteBtn}
        </div>
        <div onClick={this.props.clickHandle.bind(this, this.props.articleInfo)}>
          <span>{this.props.articleInfo.author + "："}</span>
          <span ref="overview"></span>
        </div>
        <div>
          <span>{moment(this.props.articleInfo.time).format('YYYY-MM-DD h:mm:ss')}</span>
        </div>
      </div>
    )
  }
}


