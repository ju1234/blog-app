/**
 * 文件说明： 注册页面
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/20
 */

import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

//=======================================
import regStyle from './scss/reg.scss'



class Reg extends Component{
  constructor(props) {
    super(props)
  }

  render(){
    return <div>register</div>
  }
}


export default connect()(Reg)
