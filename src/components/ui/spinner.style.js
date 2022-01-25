import styled, { keyframes } from 'styled-components';
import styles from '../../globalStyles/variables';

const rotate = keyframes`
  form{
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }

`;

const show = keyframes`
form{
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const Spinner = styled.div`
  opacity: 0;
  width: ${(props) => props.size ? props.size + 'px' : '30px'};
  height: ${(props) => props.size ? props.size + 'px' : '30px'};
  border-radius: 50%;
  border:${(props) => props.size ? Math.floor(props.size / 7) + 'px' : '4px'} solid ${styles.mainColorLight};
  border-bottom:${(props) => props.size ? Math.floor(props.size / 7) + 'px' : '4px'} solid ${styles.secondaryColorTransparent};
  border-top:${(props) => props.size ? Math.floor(props.size / 7) + 'px' : '4px'} solid ${styles.secondaryColorTransparent};
  box-shadow: inset 0 ${(props) => props.size ? '-' + Math.floor(props.size / 15) + 'px' : '-2px'}  ${(props) => props.size ? Math.floor(props.size / 15) + 'px' : '2px'} ${styles.secondaryColorTransparent2},
  inset 0 ${(props) => props.size ? Math.floor(props.size / 15) + 'px' : '2px'}  ${(props) => props.size ? Math.floor(props.size / 15) + 'px' : '2px'} ${styles.secondaryColorTransparent2},
  0 ${(props) => props.size ? Math.floor(props.size / 10) + 'px' : '3px'}  ${(props) => props.size ? Math.floor(props.size / 7) + 'px' : '4px'} ${styles.secondaryColorTransparent2},
  0 ${(props) => props.size ? '-' + Math.floor(props.size / 10) + 'px' : '-3px'}  ${(props) => props.size ? Math.floor(props.size / 7) + 'px' : '4px'} ${styles.secondaryColorTransparent2};
  animation: ${rotate} 2s linear infinite, ${show} .2s linear forwards ;
`;

export default Spinner;