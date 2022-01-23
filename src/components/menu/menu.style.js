import styled from "styled-components";
import styles from "../../globalStyles/variables";

const MenuStyled = styled.header`
  display: flex;
  width:100vw;
  height: 3rem;
  align-items:center;
  background: ${styles.mainColorTransparent};
  menu {
    display: flex;
    list-style: none;
    margin: 0;
  }
`;

export default MenuStyled;