import styled from "styled-components";
import styles from "../../globalStyles/variables";

const MenuStyled = styled.header`
  display: flex;
  font-size: 1.2rem;
  width:100vw;
  align-items: center;
  background: ${styles.mainColorTransparent};
  margin: 0;
  padding: 0;
  height: 3rem;
  .loader-container{
    width: 65px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 3rem;
  }
`;

export default MenuStyled;