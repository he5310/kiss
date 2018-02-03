import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import AsyncComponentHoc from '../../components/Hoc/AsyncComponent';
const UserIndex = AsyncComponentHoc(() => import('./page').then(module => module.default));
const UserLogin = AsyncComponentHoc(() => import('./login/page').then(module => module.default));
const UserReg = AsyncComponentHoc(() => import('./reg/page').then(module => module.default));

export default () => {
	return (
		<div>
			<div>用户页面</div>
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
