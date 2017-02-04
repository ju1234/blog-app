/**
 * 文件说明： 搜索页面
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/4
 */

import React,{Component} from 'react';
import {connect} from 'react-redux'


class Search extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>search</div>
    )
  }
}

function mapStateToProps(store) {
  return {

  }
}

export default connect(mapStateToProps)(Search)
