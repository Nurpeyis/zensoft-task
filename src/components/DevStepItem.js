import React, { Component } from 'react'

import '../sass/pages/dev-step-item.sass'

class DevStepItem extends Component {
  render() {
    const {img, title, content} = this.props.data
    return (
      <div className="dev-step-item">
        <div className="item-thumbnail">
          <img src={img} alt={title}/>
        </div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    )
  }
}

export default DevStepItem
