import React from 'react';
import ButtonStyled from './button.style';

export default function Button(props) {
  return <ButtonStyled onClick={props.onClick}>{props.children}</ButtonStyled>;
}
