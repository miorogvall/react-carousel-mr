import React from 'react';
import './_itemContainer.scss';
import Item from './Item/Item'
class ItemContainer extends React.Component {
    constructor(props) {
      super(props);
    }
    handleClick() {
        console.log('hej')
    }
  render() {
      return <div className="item-container">
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>

          <div className="fas fa-arrow-left arrow left" onClick={this.handleClick}></div>
          <div className="fas fa-arrow-right arrow right" onClick={this.handleClick}></div>
      </div>
}
}
export default ItemContainer;