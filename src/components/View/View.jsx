/**
 * 文件说明： 文章查看页
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/1
 */

import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class View extends Component{
  render(){
    console.log(this.props.article)
    return <div>view</div>
  }
}

function mapStateToProps(store) {
  return {
    article: store.view.toJS()
  }
}

export default connect(mapStateToProps)(View)
