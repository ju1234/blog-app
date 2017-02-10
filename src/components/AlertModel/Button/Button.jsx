/**
 * 文件说明： 按钮组件
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/9.
 */

import React,{Component} from 'react'

import style from './sass/button.scss'


export default class Button extends Component{
  render(){
    return (
      <button className={style.button} onClick={this.props.onclick}>{this.props.text}</button>
    )
  }
}



