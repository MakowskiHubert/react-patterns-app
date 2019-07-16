import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 3rem;
	margin-top: 5vmin;
  color: red;
`;

export const Error = error => {
	console.log(error);

	return (
		<Wrapper>An error occurred, please try again later</Wrapper>
	);
};