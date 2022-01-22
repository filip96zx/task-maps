import styled from "styled-components";

const LayoutStyled = styled.div`
  height: 100vh;
  background: lightyellow;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  aside {
    width:30%;
    height:80%;
    background: white;
    border: 2px solid gray;
  }
  main {
    height: 80%;
    width: 60%;
    background: green;
  }
`;

export default LayoutStyled;