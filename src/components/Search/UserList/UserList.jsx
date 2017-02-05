/**
 * 文件说明： 搜索用户列表
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/4
 */


import React,{Component} from 'react';
import userListStyle from './scss/userList.scss'



export default class UserList extends Component{

  componentDidMount(){
    this.refs.username.innerHTML = this.props.userInfo.name;
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  render(){
    return (
      <div className={userListStyle.userListContainer}
        onClick={this.props.clickHandle.bind(
          this,
          this.props.userInfo,
          this.context.router
        )}
      >
        <i>
          <img src={`http://16.1.30.200:3000/images/${parseInt(Math.random() * 19) + 1}.jpg`} alt="头像" title="头像"/>
        </i>
        <span ref="username"></span>
      </div>
    )
  }
}
