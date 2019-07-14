import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
  background-color: black;
`;

export const Toolbar = props => {
	const children = React.Children.map(props.children, child =>
		React.cloneElement(child, {
			filter: props.opacity
		})
	);

	return (
		<Wrapper>{children}</Wrapper>
	);
};