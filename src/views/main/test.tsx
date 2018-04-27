import * as React from 'react';

// import { X } from 'react-feather';

var X = require('react-feather').X;

var request = require('../../services/request.js').default;

/* request('/login',{
	account:'724494205@qq.com'
}); */
// 测试git
// 测试分支push到dev111

import Notification from '../../components/Notification/index';

import Loading from '../../components/Loading/index'

export default class Test extends React.Component {
	render() {
		return (
			// <Notification />
			<Loading isLoading={true} />
		);
	}
}
