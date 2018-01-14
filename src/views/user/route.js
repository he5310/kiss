import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AsyncComponentHoc from '../../components/Hoc/AsyncComponent';
const UserIndex = AsyncComponentHoc(() => System.import('./page.js').then(module => module.default));
const UserLogin = AsyncComponentHoc(() => System.import('./login/page.js').then(module => module.default));
const UserReg = AsyncComponentHoc(() => System.import('./reg/page.js').then(module => module.default));

export default () => {
	return (
		<div>
			<div>用户首页</div>
			<div>
				<Switch>
					<Route exact path='/user' component={UserIndex}></Route>
					<Route path='/user/login' component={UserLogin}></Route>
					<Route path='/user/register' component={UserReg}></Route>
				</Switch>
			</div>
		</div>
	);
};