import React, { Component } from 'react';

import { Wrapper } from '../../Wrapper';
import { Toolbar } from './Toolbar';
import { Icon } from './Icon';

export class CompoundComponents extends Component {
	render() {
		return (
			<Wrapper width={320} height={568}>
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