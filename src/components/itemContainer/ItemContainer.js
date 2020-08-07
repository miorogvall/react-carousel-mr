import React from 'react';
import './_itemContainer.scss';
import Item from './Item/Item'
class ItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            leftInteractable: false,
            rightInteractable: true
    }
}

    handleClick = (event) => {
        let currentTransform = event.target.parentNode.childNodes[0].style.transform.replace(/[^0-9\-]/g,'');
        if(event.target.classList.contains('right')) {
            if(this.state.count !== event.target.parentNode.childNodes[0].childNodes.length) {
                this.setState({
                    count : this.state.count + 1
                })
                event.target.parentNode.childNodes[0].style = `transform: translate(${parseInt(currentTransform) - 90}%)`
            }
        } else {
            if(this.state.count > 1) {
                event.target.parentNode.childNodes[0].style = `transform: translate(${parseInt(currentTransform) + 90}%)`
                this.setState({
                    count : this.state.count - 1
                })
            }
        }
    }

    render() {
        return <div className="item-container">
        <div className="items" style={{transform: 'translate(0%)'}}>
        {this.props.children.map((data) => {
            return <Item
                filename={data.filename}
                description={data.description}
                dimensions={data.dimensions}
                name={data.name}
                bathrooms={data.bathrooms}
                rooms={data.rooms}
                key={data.id}
                activeNr={data.activeNr}
                activeSlide={this.state.count}/>
            })
        }
        </div>
          <div className='fas fa-arrow-left arrow left' onClick={this.handleClick}></div>
          <div className='fas fa-arrow-right arrow right' onClick={this.handleClick}></div>
        </div>
    }
}
export default ItemContainer;