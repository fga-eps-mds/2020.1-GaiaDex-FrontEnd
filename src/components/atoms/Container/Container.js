import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  border: solid #5B6DCD 1px;
  padding: 8.5%;
  background-color: ${(props) => props.color};
`;

export default Container;
