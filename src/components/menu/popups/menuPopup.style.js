import styled from "styled-components";

const MenuPopupStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: whitesmoke;
  h2 {
    text-align: center;
  }
  h3 {
    margin: 0;
  }
  span {
    font-size: 1.2rem;
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
      margin-top: 0.8rem;
      h3{
        display:inline-block;
        margin-right:5px;
      }
    }
  }
`;

export default MenuPopupStyled;