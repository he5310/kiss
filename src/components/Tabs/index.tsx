import { NavLink } from 'react-router-dom';
import * as React from 'react';
import { Component } from 'react';

import './style.less';
// import { Home, Search, Bell, MessageSquare, User } from 'react-feather';

var { Home, Search, Bell, MessageSquare, User } = require('react-feather');

interface TabPropsTypes {
	direction?: string
}

export const Tabs = (props: TabPropsTypes) => {
	return (<div className={props.direction == 'down' ? 'header' : 'header-hide-title'}>
		<div className='header-title'>
			<User />
		</div>
		<nav className='nav-header'>
			<NavLink to='/home' activeClassName='nav-tab-selected' >
				<Home />
			</NavLink>
			<NavLink to='/explore' replace activeClassName='nav-tab-selected' >
				<Search />
			</NavLink>
			<NavLink to='/notifications' activeClassName='nav-tab-selected' >
				<Bell />
			</NavLink>
			<NavLink to='/messages' activeClassName='nav-tab-selected' >
				<MessageSquare />
			</NavLink>
		</nav>

	</div>);
};

class MainPage extends React.Component {
	state = {
		Y: 0,
		direction: 'down'
	};

	render() {
		return <div>
			<Tabs direction={this.state.direction} />
		</div>;
	}

	componentWillUnMount() {
		console.log('xxxx');
	}

	componentDidMount() {
		let _this = this;
		document.body.addEventListener('touchmove', function (e) {
			//比较当前得y坐标与前一个y
			if (e.changedTouches[0].clientY > _this.state.Y) {
				_this.setState({
					direction: 'down'
				});
			}
			if (e.changedTouches[0].clientY < _this.state.Y) {
				_this.setState({
					direction: 'up'
				});
			}
			_this.setState({
				Y: e.changedTouches[0].clientY
			});
		}, false);

		document.body.addEventListener('touchstart', function (e) {
			_this.setState({
				Y: e.touches[0].clientY
			});
		}, false);
	}



}

export default MainPage;
