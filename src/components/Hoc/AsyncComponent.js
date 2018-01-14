//code splitting high order components
import React, { Component } from 'react';
export default getComponent => class AsyncComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Comp: null
		};
	}
	componentWillMount() {
		getComponent().then(comp => {
			this.setState({
				Comp: comp
			});
		});
	}

	render() {
		const { Comp } = this.state;
		return Comp && <Comp {...this.props} />;
	}
};