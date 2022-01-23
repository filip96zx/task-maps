import styled from 'styled-components';
import styles from '../../../globalStyles/variables';

const DetailsPopupStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: fit-content;
  height: fit-content;
  background: ${styles.mainColorTransparent2};
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 2px solid ${styles.secondaryColor};
  box-shadow: 0 0 3px 1px ${styles.mainColorTransparent2}, 2px 2px 3px 0px ${styles.mainColorTransparent2};
  h2 {
    text-align: center;
    border-bottom: 1px solid ${styles.secondaryColor};
    margin-top: 1.7rem;
    margin-bottom: 0.8rem;
    color:${styles.fontColor};
  }
  h3 {
    color:${styles.fontColorDarker3};
    font-weight: 600;
    margin: 0;
  }
  span {
    font-size: 1.2rem;
  }
  button {
    position: absolute;
    margin: 0.35rem;
    top: 0;
    right: 0;
  }
  .data-row {
    margin:5px 0;
    h3{
      display:inline-block;
      margin-right:5px;
    }
    &--important {
      font-size: calc(110%);
      text-align: center;
      margin-top: 0.5rem;
      h3{
        display:inline-block;
        margin-right:5px;
      }
    }
  }
`;

export default DetailsPopupStyled;