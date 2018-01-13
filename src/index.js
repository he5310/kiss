/* import React from 'react';
import MyImgae from './asset/5k-wallpapers-3840x2160-forest-osx-apple-lake-water-yosemite-169.jpg';
//创建imgae
let ImgDom = document.createElement('img');
ImgDom.style.width = '100%';

ImgDom.setAttribute('src', MyImgae);

document.getElementById('root').appendChild(ImgDom);
 */
/* import request from 'superagent';

let base = 'http://api.zely.cn';
let params = {
  cxbq: 10,
  isShow: 1,
  p: 1,
  per: 4
}

async function fetch() {
  try {

    const data = await request.post(`${base}/api/trip/search`).send(params).set('Content-Type', 'application/x-www-form-urlencoded')
    console.log(data)
  } catch (e) {
    alert(e.message)
  }
}

fetch() */

import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import React from 'react';
import { render } from 'react-dom';

import Tabs from './components/Tabs/index';

import 'normalize.css';
import './index.less';

import AsyncCompHoc from './components/Hoc/AsyncComponent';

import CommonComp from './views/index';

const Home = AsyncCompHoc(() => System.import('./views/main/home').then(module => module.default))

const Explore = AsyncCompHoc(() => System.import('./views/main/explore').then(module => module.default))

const User = AsyncCompHoc(() => System.import('./views/user/route').then(module => module.default));

const InvalidRoute = AsyncCompHoc(() => System.import('./views/main/invalidRoute').then(module => module.default));

const Test = AsyncCompHoc(() => System.import('./views/main/test').then(module => module.default));


const App = (props) => {
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
    </BrowserRouter>)
}


render(<App />, document.getElementById('root'))