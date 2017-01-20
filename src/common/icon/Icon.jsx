/**
 * 文件说明： icon图标组件
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/18.
 */

import React,{Component} from 'react'

import iconType from './sass/icons.scss'


class Icon extends Component{
  render(){
    switch (this.props.type){
      case 'back':
        return (
          <div className={iconType.back}>
            <div>
              <div></div>
            </div>
          </div>
        )
    }
  }
}



export default Icon;
