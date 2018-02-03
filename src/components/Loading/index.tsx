import styled, { keyframes } from 'styled-components';

import * as React from 'react';

// import { Loader } from 'react-feather';
var Loader = require('react-feather').Loader

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  animation: ${rotate360} 1s linear infinite;
`;


const LoaderBox = styled.div`
  width:100px;
  height:100px;
  background-color:rgba(0,0,0,.5);
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  color:white;
  border-radius:5px;
`;

interface LoaderBoxPropTypes {
	isLoading?: boolean
}

const LoadingBox = (props: LoaderBoxPropTypes) => {
	return (
		props.isLoading ? <LoaderBox>
			<Rotate style={{ lineHeight: 0 }}>
				<Loader width="30" height="100%" />
			</Rotate>
			<div style={{ marginTop: '1rem' }}>数据请求中...</div>
		</LoaderBox> : null
	);
};

interface LoadingIconPropTypes {
	size?: string | number
}
export const LoadingIcon = (props: LoadingIconPropTypes) => {
	const { size } = props;
	return (
		<Rotate style={{ lineHeight: 0 }}>
			<Loader width={size || '30'} height="100%" />
		</Rotate>
	);
};

export default LoadingBox;
