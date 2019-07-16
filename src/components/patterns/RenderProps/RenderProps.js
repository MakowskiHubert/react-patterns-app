import React, { Component } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../Wrapper';
import { DataProvider } from './DataProvider';

const TextCenter = styled.div`
  text-align: center;
`;

export class RenderProps extends Component {
	render() {
		return (
			<Wrapper>
				<DataProvider action='provider sync/async action'>
					{data => (
						<TextCenter>
							Render Props
							<p>{data}</p>
						</TextCenter>
					)}
				</DataProvider>
			</Wrapper>
		);
	}
}