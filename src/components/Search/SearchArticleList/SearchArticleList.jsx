/**
 * 文件说明： 搜索· 文章 列表
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/5
 */


import React,{Component} from 'react';
import searchArticleList from './scss/searchArticleList.scss'



export default class SearchArticleList extends Component{

  componentDidMount(){
    this.refs.title.innerHTML = this.props.article.title;
    this.refs.content.innerHTML = this.props.article.content.substring(0,80) +'......';
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  render(){
    return (
      <div className={searchArticleList.searchArticleListContainer}
        onClick={this.props.clickHandle.bind(
          this,
          this.props.article.id,
          this.context.router
        )}
      >
        <p ref='title'></p>
        <p ref='content'></p>
      </div>
    )
  }
}
