import React from 'react';

import { X } from 'react-feather';

import request from '../../services/request';


request('/login',{
	account:'724494205@qq.com',
	pass:'He911215'
});

import Notification from '../../components/Notification';

export default class Test extends React.Component {
	render() {
		return (
		// <Notification />
			<ul>
				<li>
					<div></div>
				</li>
			</ul>
		);
	}
}
