import React from 'react';
import './_navArrow.scss';

class NavArrow extends React.Component {
    render() {
    let classList = `arrow ${this.props.dir}`;
    let faClass = `fas fa-arrow-${this.props.dir}`

    return <div className={classList}>
        <i class={faClass}></i>
    </div>
    }
  }

export default NavArrow;