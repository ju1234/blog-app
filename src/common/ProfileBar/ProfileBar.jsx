/**
 * 文件说明： 个人主页信息展示条
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/18.
 */

import React, {Component} from 'react'
//======================================
import {dataValidator} from '../../utils/profileUtils.js'
//=====================================
import barStyle from './sass/bar.scss'


class Bar extends Component {
  constructor(props) {
    super(props);
    this.editType = props.info.editType;
    this.key = props.info.key;
  }

  state = {
    isEdit: false
  };

  clickHandle() {
    if (this.state.isEdit) {
      this.setState({
        isEdit: !this.state.isEdit
      });


      if(dataValidator(this.refs.input.value,this.key)){
        this.props.onclick(this.props.id,this.refs.input.value,this.key)
      }else {
        alert('修改失败')
      }
    } else {
      this.setState({
        isEdit: !this.state.isEdit
      })
    }
  }

  render() {
    const info = this.props.info;
    return (
      <div className={barStyle.bar}>
        <span>{info.title}</span>
        <p>{
          this.state.isEdit ?
            <input type="text" placeholder={info.value} ref="input"/> :
            info.value
        }</p>
        <button type="button">
          {
            info.edit ?
              <div  onClick={this.clickHandle.bind(this)}>{
                this.state.isEdit ?
                '完成' :
                <img src="/images/personal/edit.png" alt="编辑" />
              }</div> :
              null
          }
        </button>
      </div>
    )
  }
}


export default Bar;
