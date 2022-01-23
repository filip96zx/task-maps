import styled from "styled-components";

const LayoutStyled = styled.div`
  height: 100vh;
  background: lightyellow;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  header {
    width:100vw;
    margin: 0 0.5rem;
    background: white;
    border: 2px solid gray;
  }
  main {
    position: relative;
    flex-grow: 1;
    margin: 0 0.5rem;
    height: 80%;
    width: 60%;
  }
`;

export default LayoutStyled;