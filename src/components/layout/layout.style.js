import styled from "styled-components";

const LayoutStyled = styled.div`
  height: 100vh;
  background: lightyellow;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  aside {
    min-width:300px;
    margin: 0 0.5rem;
    height:80%;
    background: white;
    border: 2px solid gray;
  }
  main {
    flex-grow: 1;
    margin: 0 0.5rem;
    height: 80%;
    width: 60%;
  }
`;

export default LayoutStyled;