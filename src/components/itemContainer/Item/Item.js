import React from 'react';
import './_Item.scss';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classList;
  if(this.props.activeNr === this.props.activeSlide) {
     classList = 'item active'
  } else {
      classList = 'item'
  }
return <div className={classList}>{this.props.filename}</div>
  }
  }

export default Item;