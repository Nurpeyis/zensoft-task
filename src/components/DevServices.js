import React, { Component } from 'react'

import DevServiceItem from './DevServiceItem'

import '../sass/pages/dev-services.sass'

class DevServices extends Component {
  render() {
    return (
      <div className="dev-services">
        <h2 className="zs-title">Custom Software Development <br/><span>Services</span></h2>

        <div className="container">
          <div className="dev-services-list">
            <DevServiceItem />
          </div>
        </div>
      </div>
    )
  }
}

export default DevServices
