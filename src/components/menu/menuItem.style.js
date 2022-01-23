import styled from "styled-components";
import styles from "../../globalStyles/variables";

const MenuItemStyled = styled.li`
  position: relative;
  width: auto;
  padding: 0.7rem 15px;
  h3 {
    margin: 0;
    border-bottom: 2px solid ${styles.secondaryColor};
  }
  form {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    z-index: 1;
    background: ${styles.mainColorTransparent2};
    .form-control {
      padding: 1px;
    }
    input, select {
      width: 100%;
      background: ${styles.mainColorTransparent};
      color: ${styles.fontColor};
      border: 1px solid ${styles.secondaryColor};
      border-radius: 3px;
      font-size: 1.05rem;
    }

    label{
      margin-left: 2px;
    }
    box-shadow: 1px 1px 3px 0 ${styles.mainColorTransparent};
  }
`;

export default MenuItemStyled;