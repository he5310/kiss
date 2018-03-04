import * as React from 'react';

import * as Notification from '../components/Notification/index';


interface stateTypes {
	hasNotification: boolean
}
export default class CommonComponents extends React.Component<{}, stateTypes> {
	state = {
		hasNotification: false
	}
	componentWillMount() {
		this.initWebSocket();
	}

	initWebSocket() {
		let _this = this;
		var ws = new WebSocket('ws://127.0.0.1:81/private');
		ws.onopen = function () {
			ws.send(JSON.stringify({ id: 1 }));
			ws.onmessage = function (evt) {
				_this.setState({
					hasNotification: true
				});
			};
		};
	}

	render() {
		const { hasNotification } = this.state;
		return (
			<div>
				{/* {hasNotification && <Notification />} */}
			</div>
		);
	}
}
