import React from 'react';
import './_itemContainer.scss';
import Item from './Item/Item'
import NavArrow from '../navArrow/navArrow'

function ItemContainer() {
  return (
      <div className="item-container">
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>


          <NavArrow dir="left"></NavArrow>
          <NavArrow dir="right"></NavArrow>
      </div>
  );
}

export default ItemContainer;