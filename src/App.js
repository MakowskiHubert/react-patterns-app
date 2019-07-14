import React from 'react';
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

const Box = styled.div`
  width: 25vmin;
  height: 25vmin;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid black;
  padding: 2vmin;
  margin: auto;
  
  :hover {
    filter: blur(2px) invert(50%);
    cursor: pointer;
  }
`;

const App = () => (
	<Wrapper>
		<Box>Other Pattern</Box>
		<Box>Other Pattern</Box>
		<Box>Other Pattern</Box>
		<Box>Higher-order component</Box>
		<Box>Render Props</Box>
		<Box>Compound Components</Box>
		<Box>Other Pattern</Box>
		<Box>Other Pattern</Box>
		<Box>Other Pattern</Box>
	</Wrapper>
);

export default App;
