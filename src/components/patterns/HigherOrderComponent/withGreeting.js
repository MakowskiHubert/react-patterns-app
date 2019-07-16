import React from 'react';

export const withGreeting = Component =>
	class extends React.Component {
		state = {
			name: 'Welcome'
		};

		render() {
			const { name } = this.state;

			return <Component name={name}/>;
		}
	};