import React from 'react';
import LayoutStyled from './layout.style';

export default function Layout(props) {
  return <LayoutStyled>{props.children}</LayoutStyled>;
}
