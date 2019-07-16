import React, { Component } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../Wrapper';
import { DataProvider } from './DataProvider';
import Fetcher from './Hooks/Fetcher';


const TextComponent = styled.div`
  text-align: center;
  padding: 20px;
`;

export class RenderProps extends Component {
	fetchProfile = name => async () => {
		console.log('fetchProfile');
		const response = await fetch(`https://api.github.com/users/${name}`);
		return await response.json();
	};

	render() {
		return (
			<Wrapper>
				{/*standard render props*/}
				<DataProvider action='provider sync/async action'>
					{data => (
						<TextComponent>{data}</TextComponent>
					)}
				</DataProvider>

				{/*with hooks*/}
				<Fetcher action={this.fetchProfile('MakowskiHubert')}>
					{data => {
						console.log(data);
						return <TextComponent>{data.login}</TextComponent>;
					}}
				</Fetcher>
			</Wrapper>
		);
	}
}