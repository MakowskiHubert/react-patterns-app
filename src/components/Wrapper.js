import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: center;
	font-size: 3rem;
  background-color: white;
  margin: 5vmin auto;
  height: ${({ height }) => height && `${height}px`};
  width: ${({ width }) => width && `${width}px`};
`;