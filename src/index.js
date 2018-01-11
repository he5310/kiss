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
import './index.less'

const App = (props) => {
  return (
    <BrowserRouter>
      <main>
        <Route exact path='/' render={() =>
          <Redirect to='/home' />
        }></Route>
        {/* <Redirect from='/' to='/home' /> */}
        <Route path='/home' render={(props) => {
          return (
            <div>
              <div style={{height:'7rem'}}></div>
              <Tabs />
              <div style={{ height: 1000 }}>主页</div>
            </div>
          )
        }}></Route>
        <Route path='/explore' render={(props) => {
          return (
            <div>
              <div style={{ height: '7rem' }}></div>
              <Tabs />
              <div style={{ height: 1000 }}>搜索</div>
            </div>
          )
        }}></Route>
        <Route path='/notifications' render={(props) => {
          return (
            <div>
              <div style={{height:'7rem'}}></div>
              <Tabs />
              <div style={{ height: 1000 }}>通知</div>
            </div>
          )
        }}></Route>
        <Route path='/messages' render={(props) => {
          return (
            <div>
              <div style={{ height: '7rem' }}></div>
              <Tabs />
              <div style={{ height: 1000 }}>私信</div>
            </div>
          )
        }}></Route>
      </main>
    </BrowserRouter>)
}


render(<App />, document.getElementById('root'))