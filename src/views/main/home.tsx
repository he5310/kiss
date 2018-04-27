import * as React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {Tabs} from '../../components/Tabs/index';

export default class Home extends Component {
	render() {
		return (
			<div>
				{/* <h1>
					<NavLink to='/home' >主页</NavLink>
				</h1>
				<h1>
					<NavLink to='/user/login'>登陆</NavLink>
				</h1>
				<h1>
					<NavLink to='/user/register'>注册</NavLink>
				</h1>
				<h1>
					<NavLink to='/test'>测试</NavLink>
				</h1> */}
				<Tabs />
			</div>
		);
	}
	componentDidMount() {
		console.log('didmount')
	}
}
