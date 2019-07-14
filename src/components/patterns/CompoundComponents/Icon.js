import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  width: 48px;
  height: 48px;
  margin: 2px;
  background-color: ${({ color }) => color ? color : 'deepskyblue'};
  text-align: center;
  
  ${({ filter }) => filter && css`
		filter: opacity(${filter});
	`}
`;

export const Icon = props => {
	return (
		<Wrapper {...props}>
			^
		</Wrapper>
	);
};