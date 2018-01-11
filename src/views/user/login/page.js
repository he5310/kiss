import React from 'react';

export default class Login  extends React.Component{
  render(){
    return <div>
      <div>
        <input type="text"/>
      </div>
      <div>
        <input type="password"/>
      </div>
      <div>
        <button>登陆</button>
      </div>
    </div>
  }
}
