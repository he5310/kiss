import React from 'react';
import { LoadingIcon } from '../Loading';

export default class Button extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		const { disabled, loading,onClick } = this.props;
		return (
			<button onClick={onClick} disabled={loading || disabled}>
				{loading && <LoadingIcon size={20} />}
				{
					this.props.children
				}
			</button>
		);
	}
}
