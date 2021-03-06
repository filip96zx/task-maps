import styled from 'styled-components';

const ItemsCountStyled = styled.li`
  display: flex;
  padding: 4px 0;
  width: 100%;
  span {
    width: 100%;
    text-align: right;
    margin-right: 3px;
  }
  @media (max-width: 800px){
    display: inline-block !important;
    text-align: center;
  }
`;

export default ItemsCountStyled;