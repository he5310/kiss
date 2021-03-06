import * as React from 'react';

import { Link } from 'react-router-dom';
// import { hot } from 'react-hot-loader';

import Button from '../../../components/Button/index';

interface LoginStateTypes {
	logining?: boolean
}

// @hot(module)
export default class Login extends React.Component<{}, LoginStateTypes>{
	state = {
		logining: false
	}
	handleLogin() {
		this.setState({
			logining: true
		});
	}
	render() {
		return (
			<div style={{ padding: '.5rem' }}>
				<h1 className="tc">
					<span style={{ color:'#1da1f2'}}>k</span>
					<span style={{ color: 'red' }}>i</span>
					<span style={{ color: 'green' }}>s</span>
				</h1>
				<div>
					<input type="text" placeholder="账 号" />
				</div>
				<div>
					<input type="password" placeholder="密 码" />
				</div>
				<div>
					<Button loading={this.state.logining} handleClick={this.handleLogin}>
						登陆
					</Button>
				</div>
				<div style={{ display: 'flex', justifyContent: 'flex-end', margin: '10px 0' }}>
					<div>
						<Link to="/account/reset_pass">忘记密码?</Link>
					</div>
					<div style={{ marginLeft: 20 }}>
						<Link to="/user/register">注册</Link>
					</div>
				</div>
			</div>
		);
	}
}
