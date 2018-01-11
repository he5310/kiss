import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import styles from './index.less';
import { Home, Search, Bell, MessageSquare, User } from 'react-feather';

const Tabs = (props) => {
  return (<div className={props.direction == 'down' ? styles['header'] : styles['header-hide-title']}>
    <div className={styles['header-title']}>
      <User />
    </div>
    <nav className={styles['nav-header']}>
      <NavLink to='/home' activeClassName={styles['nav-tab-selected']}>
        <Home />
      </NavLink>
      <NavLink to='/explore' activeClassName={styles['nav-tab-selected']}>
        <Search />
      </NavLink>
      <NavLink to='/notifications' activeClassName={styles['nav-tab-selected']}>
        <Bell />
      </NavLink>
      <NavLink to='/messages' activeClassName={styles['nav-tab-selected']}>
        <MessageSquare />
      </NavLink>
    </nav>

  </div>)
}

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Y: 0,
      direction:'down'
    }
  }

  render() {
    return <div>
      <Tabs direction={this.state.direction} />
    </div>
  }

  componentWillUnMount(){
    console.log('xxxx')
  }

  componentDidMount() {
    let _this = this;
    document.body.addEventListener('touchmove', function (e) {
      //比较当前得y坐标与前一个y
      if (e.changedTouches[0].clientY > _this.state.Y) {
        _this.setState({
          direction: 'down'
        })
      } 
      if (e.changedTouches[0].clientY < _this.state.Y) {
        _this.setState({
          direction: 'up'
        })
      }
      _this.setState({
        Y:e.changedTouches[0].clientY
      })
    }, false)

    document.body.addEventListener('touchstart', function (e) {
      _this.setState({
        Y: e.touches[0].clientY
      })
    }, false)
  }



}

export default MainPage;