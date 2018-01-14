import React from 'react';

import { Link } from 'react-router-dom';

import Button from '../../../components/Button';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	handleLogin() {
		let _this = this;
		this.setState({
			logining: true
		});
    
		//请求服务器,在规定的时间内没有返回结果弹出提示，让用户手动刷新或者取消
    

		//loading超时的时候。将loading的状态置为false
		setTimeout(
			function(){
				_this.setState({
					logining:false
				});
			}  
			,2000);
	}
	render() {
		return (
			<div style={{ padding: '.5rem' }}>
				<h1>注册kiss</h1>
				<div>
					<input type="email" placeholder="邮箱" />
				</div>
				<div>
					<input type="text" placeholder="邮箱验证码"/>
				</div>
				<div>
					<input type="password" placeholder="密 码" />
				</div>
				<div>
					<Button loading={this.state.logining} onClick={() => { this.handleLogin(); }}>
            注册
					</Button>
				</div>
				<div style={{ display: 'flex', justifyContent: 'flex-end', margin: '10px 0' }}>
					<div style={{ marginLeft: 20 }}>
						<Link to="/user/login">已有账号?立即登陆</Link>
					</div>
				</div>
			</div>
		);
	}
}
