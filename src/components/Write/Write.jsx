/**
 * 文件说明： 创作文章
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/4
 */

import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//========================================================
import {actionSaveArticle} from '../../actions/writeAction.js'
//========================================================
import writeStyle from './scss/write.scss'




class Write extends Component{
  constructor(props){
    super(props);
    this.actions = bindActionCreators(Object.assign({},{
      actionSaveArticle
    }),props.dispatch)
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  componentDidMount(){
    this.refs.content.style.color = '#ccc';
  }

  contentOnFocus(){
    const contentValue = this.refs.content.innerHTML;
    if(contentValue === '请输入内容'){
      this.refs.content.innerHTML = '';
      this.refs.content.style.color = '#333';
    }
  }
  contentOnBlur(){
    const contentValue = this.refs.content.innerText;
    if(contentValue.trim() === ''){
      this.refs.content.innerHTML = '请输入内容';
      this.refs.content.style.color = '#ccc';
    }
  }

  submitHandle(){
    const title = this.refs.title.value.trim();
    const content = this.refs.content.innerHTML.trim();
    if(title === ''){
      alert('标题不得为空');
      this.refs.title.focus();
      return ;
    }else if(content === '' || content === '请输入内容'){
      alert('内容不得为空');
      this.refs.content.focus();
      return ;
    }
    console.log(this.props.userInfo)
    const data = {
      title: title,
      content: content,
      author: this.props.userInfo.name,
      author_id: this.props.userInfo.id
    };
    // 保存文章
    this.actions.actionSaveArticle(data,this.context.router)
  }


  render(){
    return (
      <div className={writeStyle.writeContainer}>
        <div>
          <p>
            <input type="text" placeholder="请输入标题" ref="title"/>
          </p>
        </div>
        <div >
          <p contentEditable="true"
             ref="content"
             onFocus={this.contentOnFocus.bind(this)}
             onBlur={this.contentOnBlur.bind(this)}
          >请输入内容</p>
        </div>
        <div>
          <button type="button" onClick={this.submitHandle.bind(this)}>发表</button>
        </div>
      </div>
    )
  }
}

function mapStatetoProps(store) {
  return {
    userInfo: store.login.toJS().userInfo
  }
}



export default connect(mapStatetoProps)(Write)
