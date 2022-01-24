import styled from "styled-components";
import styles from "../../globalStyles/variables";


const MenuItemStyled = styled.li`
  position: relative;
  width: auto;
  padding: 0.7rem 15px;
  display: flex;
  justify-content: center;
  h3 {
    margin: 0;
    margin-top: 1rem;
    cursor: pointer;
    &.active {
      border-bottom: 2px solid ${styles.secondaryColor};
    }
  }
  ul {
    max-height: 0;
    overflow: hidden;
    position: absolute;
    top: 4rem;
    left: 0;
    background: ${styles.mainColorTransparent2};
    z-index: 2;
    transition: .5s max-height;
    list-style: none;
    padding: 2px;
    opacity: 0;
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
    &.show {
      transition: .5s max-height;
      opacity:1;
      max-height: 300px;
    }
  }
`;



export default MenuItemStyled;