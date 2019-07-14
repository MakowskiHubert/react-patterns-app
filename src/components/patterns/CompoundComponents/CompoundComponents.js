import React, { Component } from 'react';
import styled from 'styled-components';

import { Toolbar } from './Toolbar';
import { Icon } from './Icon';

const Wrapper = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: center;
	font-size: 3rem;
  background-color: white;
  height: 568px;
  width: 320px;
  margin: 5vmin auto;
`;

export class CompoundComponents extends Component {
	render() {
		return (
			<Wrapper>
				<Toolbar opacity={0.3}>
					<Icon color='red'/>
					<Icon/>
					<Icon color='green'/>
					<Icon/>
					<Icon/>
					<Icon color='#32fa52'/>
				</Toolbar>
			</Wrapper>
		);
	}
}