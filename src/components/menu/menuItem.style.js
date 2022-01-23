import styled from "styled-components";

const MenuItemStyled = styled.li`
  position: relative;
  width: auto;
  padding: 0 10px;
  form {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    z-index: 1;
    background: whitesmoke;
    .form-control {
      border: 1px solid gray;
      border-top: none;
      padding: 1px;
      
    }
    input, select {
      width: 100%;
    }

    label{
      margin-left: 2px;
    }
    box-shadow: 1px 1px 3px 0 gray;
  }
`;

export default MenuItemStyled;