/**
 * 文件说明： 样式布局
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/18.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import AlertModel from '../components/AlertModel/AlertModel.jsx'

import Login from '../components/Login/Login'


// const Header = require('../components/Header/Header')

import layoutStyle from './scss/layout.scss'


class Layout extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
  }

  render() {
    const layout = this.props.layout.toJS();
    return (
      <div>
        <div className={layoutStyle.header}>
          <Header/>
        </div>
        <div className={layoutStyle.content}>
          {this.props.children}
        </div>
        <div className={layoutStyle.footer}>
          <Footer/>
        </div>
        {
          layout.showAlert ?
            <AlertModel logined={this.props.login.get('logined')}/> :
            null
        }
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    layout: store.layout,
    login: store.login
  }
}

export default connect(mapStateToProps)(Layout);
