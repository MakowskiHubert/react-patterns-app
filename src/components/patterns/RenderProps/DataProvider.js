import { Component } from 'react';

export class DataProvider extends Component {
	state = {
		data: 'something'
	};

	componentDidMount() {
		this.setState({ data: this.props.action });
	}

	render() {
		const { data } = this.state;
		console.log('DataProvider render');

		return this.props.children(data);
	}
}