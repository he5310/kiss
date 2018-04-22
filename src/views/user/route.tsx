import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import AsyncComponentHoc from '../../components/Hoc/AsyncComponent';

const UserIndex = AsyncComponentHoc(() => import('./page').then((module: any) => module.default));
const UserLogin = AsyncComponentHoc(() => import('./login/page').then((module: any) => module.default));
const UserReg = AsyncComponentHoc(() => import('./reg/page').then((module: any) => module.default));


export default () => {
	return (
				<Switch>
					<Route path='/user' exact component={UserIndex}></Route>
					<Route path='/user/login' component={UserLogin}></Route>
					<Route path='/user/register' component={UserReg}></Route>
				</Switch>
	);
};
