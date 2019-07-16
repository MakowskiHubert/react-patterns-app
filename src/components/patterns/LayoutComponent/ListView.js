import React, { Component } from 'react';

export class ListView extends Component {
	// tell it to never update, without interrupting the lifecycle of the components inside.
	shouldComponentUpdate() {
		return false;
	}

	render() {
		const { Component } = this.props;

		return (
			<div>
				<Component/>
				<Component/>
				<Component/>
				<Component/>
			</div>
		);
	}
}