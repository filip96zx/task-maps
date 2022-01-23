import styled from "styled-components";
import styles from "../../globalStyles/variables";

const MenuItemStyled = styled.li`
  position: relative;
  width: auto;
  padding: 0.7rem 15px;
  h3 {
    margin: 0;
  }
  form {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    z-index: 1;
    background: ${styles.mainColorTransparent};
    .form-control {
      border-bottom: 1px solid ${styles.secondaryColor};
      border-top: none;
      padding: 1px;
    }
    input, select {
      width: 100%;
    }

    label{
      margin-left: 2px;
    }
    box-shadow: 1px 1px 3px 0 ${styles.mainColorTransparent};
  }
`;

export default MenuItemStyled;