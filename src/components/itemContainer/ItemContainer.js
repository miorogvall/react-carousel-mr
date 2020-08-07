import React from 'react';
import './_itemContainer.scss';
import Item from './Item/Item'
class ItemContainer extends React.Component {
    constructor(props) {
      super(props);
    }
    handleClick = (event) => {
        let itemScroll = 0;
        let getCurrentTransform = event.target.parentNode.childNodes[0].style.color
        console.log(getCurrentTransform)
        /*  if(event.target.classList.contains('right')) {
             event.target.parentNode.childNodes[0].style = 'transform: translate(100%, 0)'
            } else {
            } */
    }
    render() {
        return <div className="item-container">

        <div className="items">
            {this.props.children.map((data) => {
                return <Item
                    filename={data.filename}
                    description={data.description}
                    dimensions={data.dimensions}
                    key={data.id}
                    active={data.active}/>
                })
            }
        </div>
          <div className="fas fa-arrow-left arrow left" onClick={this.handleClick}></div>
          <div className="fas fa-arrow-right arrow right" onClick={this.handleClick}></div>

      </div>
    }
}
export default ItemContainer;