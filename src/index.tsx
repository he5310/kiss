import { Router, Route, Switch, Redirect } from "react-router-dom";

import * as React from "react";

import { render } from "react-dom";

import "normalize.css";

import "./style.less";

import AsyncCompHoc from "./components/Hoc/AsyncComponent";

import CommonComp from "./views/index";

import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();
history.listen((location, action) => {
	console.log(location, action);
	document.title = location.key;
});

import Tabs from "./components/Tabs/index";
// 新增了一行测试test分支merge的时候会不会丢失
// 测试只提交有冲突的文件，看是否会丢失代码

const Home = AsyncCompHoc(() =>
	import("./views/main/home").then((module: any) => module.default)
);

const Explore = AsyncCompHoc(() =>
	import("./views/main/explore").then((module: any) => module.default)
);

const User = AsyncCompHoc(() =>
	import("./views/user/route").then((module: any) => module.default)
);

const InvalidRoute = AsyncCompHoc(() =>
	import("./views/main/invalidRoute").then((module: any) => module.default)
);

const Test = AsyncCompHoc(() =>
	import("./views/main/test").then((module: any) => module.default)
);

const App = (props: any) => {
	return (
		<Router history={history}>
			<main>
				<CommonComp />
				<Tabs />
				<Switch>
					<Route exact path="/" render={() => <Redirect to="/home" />} />
					<Route path="/home" component={Home} />
					<Route path="/explore" component={Explore} />
					<Route path="/user" component={User} />
					<Route path="/test" component={Test} />
					<Route component={InvalidRoute} />
				</Switch>
			</main>
		</Router>
	);
};

render(<App />, document.getElementById("root"));
