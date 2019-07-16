import React, { Component } from 'react';

import { Wrapper } from '../../Wrapper';
import { withGreeting } from './withGreeting';

class HOC extends Component {
	render() {
		const { name } = this.props;
		console.log(this.props);

		return (
			<Wrapper>{name}</Wrapper>
		);
	}
}

export default withGreeting(HOC);