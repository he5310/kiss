import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AsyncComponentHoc from '../../components/Hoc/AsyncComponent'
const UserIndex = AsyncComponentHoc(()=>System.import('./page.js').then(module=>module.default));
const UserLogin = AsyncComponentHoc(()=>System.import('./login/page.js').then(module=>module.default));

export default () => {
  return <Switch>
    <Route exact path='/user' component={UserIndex}></Route>
    <Route path='/user/login' component={UserLogin}></Route>
  </Switch>
}