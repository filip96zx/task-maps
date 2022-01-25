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
  @media (max-width: 800px){
    position: relative;
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
    menu {
      background: red;
      flex-direction: column;
      height: fit-content;
      width: 100wv;
      li {
        background: ${styles.mainColor};
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
            padding: 0 2px !important;
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