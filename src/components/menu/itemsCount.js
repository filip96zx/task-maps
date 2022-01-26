import React from 'react';
import ItemsCountStyled from './itemsCount.style';

export default function ItemsCount({ count }) {
  return (
    <ItemsCountStyled>
      <label>count: </label>
      <span>{count}</span>
    </ItemsCountStyled>
  );
}
