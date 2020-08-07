import React from 'react';
import './_Item.scss';

class Item extends React.Component {

  render() {
    console.log(this.props.filename)
    let classList;
  if(this.props.activeNr === this.props.activeSlide) {
     classList = 'item active'
  } else {
      classList = 'item'
  }
return <div className={classList}>
  <img src={this.props.filename} alt="stort hus"></img>
  <div className="texts">
    <div class="name">{this.props.name}</div>
    <div class="desc">{this.props.description}</div>
    <div class="rooms"><span className="bold">Antal rum: </span>{this.props.rooms} st</div>
    <div class="bathrooms"><span className="bold">Antal badrum: </span>{this.props.bathrooms} st</div>
  </div>
</div>

  }
}

export default Item;