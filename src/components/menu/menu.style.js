import styled, { keyframes } from "styled-components";
import styles from "../../globalStyles/variables";

const setOvfVisible = keyframes`
  from {
    overflow: hidden;
  }
  to {
    overflow: visible;
  }
`;

const MenuStyled = styled.header`
  display: flex;
  font-size: 1.2rem;
  width:100vw;
  align-items: center;
  background: ${styles.mainColorTransparent};
  margin: 0;
  padding: 0;
  height: 3rem;
  .mobile-btn-wrapper {
    display: none;
  }
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
  @media (max-width: 800px){
    -webkit-tap-highlight-color: transparent;
    -webkit-focus-ring-color:  transparent;
    background: ${styles.mainColorTransparent2};
    height: fit-content;
    flex-direction: column;
    justify-items: center;
    .loader-container{
      position: absolute;
      width: auto;
      height: auto;
      top: 0;
      left: 0;
      margin: 15px;
      z-index: 3;
    }
    .mobile-btn-wrapper{
      display: flex;
      justify-content: flex-end;
      width: 100%;
      height: 3rem;
      padding: 3px 10px;
    }
    menu {
      max-height: 0;
      overflow: hidden;
      transition: 0.3s;
      position: fixed;
      top: 3rem;
      &.show {
        transition: 0.3s;
        max-height: 300px;
        animation: ${setOvfVisible} 0s 0.3s linear forwards;
      }

      z-index: 1;
      flex-direction: column;
      height: fit-content;
      width: 100wv;
      li {
        background: ${styles.mainColorTransparent2};
        padding: 10px;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        h3 {
          margin: 0 auto;
        }
        ul {
          li {
            padding: 5px 0px !important;
          }
          label, select {
            width: 200px;
          }
          span{
            text-align: center;
          }
        }
      }
    }
  }
  
`;

export default MenuStyled;