import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import * as React from 'react';
import { render } from 'react-dom';

import Tabs from './components/Tabs/index';

import 'normalize.css';

import './style.less';

import AsyncCompHoc from './components/Hoc/AsyncComponent';

import CommonComp from './views/index';

const Home = AsyncCompHoc(() => System.import('./views/main/home').then((module: any) => module.default));

const Explore = AsyncCompHoc(() => System.import('./views/main/explore').then((module: any) => module.default));

const User = AsyncCompHoc(() => System.import('./views/user/route').then((module: any) => module.default));

const InvalidRoute = AsyncCompHoc(() => System.import('./views/main/invalidRoute').then((module: any) => module.default));

const Test = AsyncCompHoc(() => System.import('./views/main/test').then((module: any) => module.default));


const App = (props: any) => {
	return (
		<BrowserRouter>
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
					{/* <Route path='/explore' component={Explore}></Route>
        <Route path='/notifications' component={Notifications}></Route>
        <Route path='/messages' component={Messages}></Route> */}
				</Switch>
			</main>
		</BrowserRouter>);
};


render(<App />, document.getElementById('root'));
