import styled from 'styled-components';
import styles from '../../../globalStyles/variables'

const PopupStyled = styled.div`
  color: black;
  h3 {
    margin: 0.3rem 0
  }
  .data-row {
    h4 {
      display: inline-block;
      margin:0 5px 0 0;
    }
    margin-bottom: 0.2rem;
  }
  button {
    float:right;
    border:none;
    margin-top: 0.3rem;
    background: white;
    color: ${styles.fontColorDarker4};
    padding: 0;
    text-decoration: underline;
  }
`;

export default PopupStyled;