import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to='/home'>主页</Link>
        </h1>
        <h1>
          <Link to='/user/login'>登陆</Link>
        </h1>
        <h1>
          <Link to='/user/register'>注册</Link>
        </h1>
        <h1>
          <Link to='/test'>测试</Link>
        </h1>
      </div>
    )
  }
}