import React, { Component } from 'react'

import '../sass/pages/dev-service-item.sass'

class DevServiceItem extends Component {
  render() {
    const {title, items} = this.props.data
    return (
      <div className="dev-service-item">
        <h3 className="item-title">{ title }</h3>
        <ul>
          {
            items.map((el, key) => {
              return(
                <li key={key}>{el}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default  DevServiceItem
