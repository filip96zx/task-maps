import styled from "styled-components";
import styles from "../../globalStyles/variables";

const LayoutStyled = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=PT+Serif&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap');
  font-family: Roboto !important;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  overflow: hidden;
  color: ${styles.fontColor};
  :before {
    content: "";
    position: absolute;
    bottom: -40%;
    left:-20%;
    background-color: ${styles.mainColor};
    background-image: radial-gradient(circle, ${styles.secondaryColor} -15%, ${styles.mainColor} 47%);
    width: 200%;
    height: 200%;
    z-index: -1;
  }
  main {
    position: relative;
    flex-grow: 1;
    margin: 1rem;
    .spinner-container{
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default LayoutStyled;