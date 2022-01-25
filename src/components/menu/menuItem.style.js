import styled from "styled-components";
import styles from "../../globalStyles/variables";

const MenuItemStyled = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin:0 1rem;
  padding: 0 10px;
  h3 {
    position: relative;
    margin: 0;
    padding: 1px 8px;
    cursor: pointer;
    overflow: hidden;
    :after{
      content: "";
      position: absolute;
      left:0;
      bottom: 0;
      width: 100%;
      padding-top: 10px;
      border-bottom: 2px solid ${styles.secondaryColor};
      transform: translateX(-100%);
    }
    &.active {
      :after{
        transition: .4s;
        transform: translateX(0);
      }
    }
  }
  ul {
    transition: .3s;
    max-height: 0px;
    width: 100%;
    overflow: hidden;
    position: absolute;
    top: 3rem;
    left: 0;
    background: ${styles.mainColorTransparent2};
    z-index: 2;
    list-style: none;
    padding: 0 2px;
    input, select {
      width: 100%;
      background: ${styles.mainColorTransparent};
      color: ${styles.fontColor};
      border: 1px solid ${styles.secondaryColor};
      border-radius: 3px;
      font-size: 1.05rem;
      margin-bottom: 2px;
      padding-bottom: 3px;
    }
    label{
      margin-left: 2px;
    }
    box-shadow: 1px 1px 3px 0 ${styles.mainColorTransparent};
    &.show {
      transition: .8s;
      max-height: 300px;
    }
  }
`;



export default MenuItemStyled;