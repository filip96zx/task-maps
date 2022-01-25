import styled from "styled-components";
import styles from "../../globalStyles/variables";

const ButtonStyled = styled.button`
  background: ${styles.mainColorTransparent2};
  color: ${styles.fontColorDarker2};
  border: 2px solid ${styles.secondaryColor};
  border-radius: 0.3rem;
  padding: 0 0.3rem;
  font-size: 1.2rem;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;;
  :hover {
    color:${styles.fontColorDarker};
    background: ${styles.mainColorTransparent};
    box-shadow: 0 0 3px 0 ${styles.secondaryColor};
  }
`;

export default ButtonStyled;