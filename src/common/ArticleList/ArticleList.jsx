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


export default class ArticleList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={articleListStyle.articleList}
           onClick={this.props.clickHandle.bind(this, this.props.articleInfo)}>
        <div>
          <i>
            <img src={`http://16.1.30.200:3000/images/${parseInt(Math.random() * 19) + 1}.jpg`} alt=""/>
          </i>
          <span>{this.props.articleInfo.title}</span>
          {
            this.props.delete ?
              <button type="button">删除</button> :
              null
          }
        </div>
        <div>
          <span>{this.props.articleInfo.author + "："}</span>
          {this.props.articleInfo.content.substring(0, 40) + '...'}
        </div>
        <div>
          <span>{moment(this.props.articleInfo.time).format('YYYY-MM-DD h:mm:ss')}</span>
        </div>
      </div>
    )
  }
}


