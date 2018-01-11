import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return <div>这是主页
      <Link to="/explore">搜索页面</Link>
      <Link to="/user/login">登陆页面</Link>
    </div>
  }
}