//code splitting high order components
import * as React from 'react';

import { Component } from 'react';

export default (getComponent: Function) => class AsyncComponent extends Component<{}, { Comp: any }> {
	constructor(props: any) {
		super(props);
		this.state = {
			Comp: null
		}
		getComponent().then((comp: any) => {
			this.setState({
				Comp: comp
			});
		});
	}
	componentWillMount() {
	}

	render() {
		const { Comp } = this.state;
		return Comp && <Comp {...this.props} />;
	}
};
