import React from 'react';

import Notification from '../components/Notification'

export default class CommonComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillMount() {
    this.initWebSocket()
  }

  initWebSocket() {
    let _this = this;
    var ws = new WebSocket('ws://127.0.0.1:81/private');
    ws.onopen = function () {
      ws.send(JSON.stringify({ id: 1 }))
      ws.onmessage = function (evt) {
        _this.setState({
          hasNotification: true
        })
      }
    }
  }

  render() {
    const { hasNotification } = this.state;
    return (
      <div>
        {/* {hasNotification && <Notification />} */}
      </div>
    )
  }
}