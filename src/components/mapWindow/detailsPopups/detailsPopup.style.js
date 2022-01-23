import styled from "styled-components";

const DetailsPopupStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: fit-content;
  height: fit-content;
  background: whitesmoke;
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 2px solid gray;
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

export default DetailsPopupStyled;