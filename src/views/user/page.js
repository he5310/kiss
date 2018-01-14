import React from 'react';

export default class User extends React.Component{
	render(){
		console.log(this.props);
		return (
			<div>
				<div>用户中心，需要判断用户是否已经登陆，如果已经登陆展示用户中心页面，如果没有登陆需要跳转到登陆页面</div>
				{this.props.children}
			</div>
		); 
	}
}
