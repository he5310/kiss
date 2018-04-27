import * as React from 'react';
import { Link } from 'react-router-dom';
export default class InvalidRoute extends React.Component {
	render() {
		return (
			<div>
				<h1>404 页面</h1>
				<Link to="/home">主页</Link>
			</div>
		);
	}
}
