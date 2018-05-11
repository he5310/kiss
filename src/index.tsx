import { Router, Route, Switch, Redirect } from 'react-router-dom';

import * as React from 'react';

import { render } from 'react-dom';


import 'normalize.css';

import './style.less';

import AsyncCompHoc from './components/Hoc/AsyncComponent';

import CommonComp from './views/index';


import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();
history.listen((location, action) => {
	console.log(location, action);
	document.title = location.key;
})

const Home = AsyncCompHoc(() => import('./views/main/home').then((module: any) => module.default));

const Explore = AsyncCompHoc(() => import('./views/main/explore').then((module: any) => module.default));

const User = AsyncCompHoc(() => import('./views/user/route').then((module: any) => module.default));

const InvalidRoute = AsyncCompHoc(() => import('./views/main/invalidRoute').then((module: any) => module.default));

const Test = AsyncCompHoc(() => import('./views/main/test').then((module: any) => module.default));


const App = (props: any) => {
	return (
		<Router history={history}>
			<main>
				<CommonComp />
				<Switch>
					<Route exact path='/' render={() =>
						<Redirect to='/home' />
					}></Route>
					<Route path='/home' component={Home}></Route>
					<Route path='/explore' component={Explore}></Route>
					<Route path='/user' component={User}></Route>
					<Route path='/test' component={Test}></Route>
					<Route component={InvalidRoute}></Route>
				</Switch>
			</main>
		</Router>);
};


render(<App />, document.getElementById('root'));
