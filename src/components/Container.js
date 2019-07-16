import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2vmin;
  color: white;
  font-size: 2rem;
  padding: 2vmin;
`;

const Box = styled(Link)`
  width: 25vmin;
  height: 25vmin;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid black;
  padding: 2vmin;
  margin: auto;
  text-decoration: none;
  outline: none;
  color: white;
  
  :hover {
    filter: blur(2px) invert(50%);
    cursor: pointer;
  }
`;

export default class Container extends Component {
	render() {
		return (
			<Wrapper>
				<Box to='/other'>Other Pattern</Box>
				<Box to='/layout-component'>Layout Component</Box>
				<Box to='/other'>Other Pattern</Box>
				<Box to='/hoc'>Higher-order component</Box>
				<Box to='/render-props'>Render Props</Box>
				<Box to='/compound-components'>Compound Components</Box>
				<Box to='/other'>Other Pattern</Box>
				<Box to='/other'>Other Pattern</Box>
				<Box to='/other'>Other Pattern</Box>
			</Wrapper>
		);
	}
}