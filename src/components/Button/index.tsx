import * as React from 'react';
import { LoadingIcon } from '../Loading';

interface ButtonProps {
	disabled?:boolean,
	loading?:boolean,
	handleClick?: React.MouseEventHandler<any>;
}

export default class Button extends React.Component<ButtonProps,{}> {

	render() {
		const { disabled, loading, handleClick } = this.props;
		return (
			<button onClick={handleClick} disabled={loading || disabled}>
				{loading && <LoadingIcon size={20} />}
				{
					this.props.children
				}
			</button>
		);
	}
}
