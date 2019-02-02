import React, { Component } from 'react'

import '../sass/pages/dev-service-item.sass'

class DevServiceItem extends Component {
  render() {
    return (
      <div className="dev-service-item">
        <h3 className="item-title">Advisory and consulting service</h3>
        <ul>
          <li>Technical Consulting Service</li>
          <li>Technology Adoption</li>
          <li>Technology Strategy Development</li>
        </ul>
      </div>
    )
  }
}

export default  DevServiceItem
