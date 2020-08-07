import React from 'react';
import './_Item.scss';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  return <div className="item">{this.props.filename}</div>
  }
  }

export default Item;