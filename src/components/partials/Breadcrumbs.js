import React, { Component } from 'react'
import { Link } from 'gatsby'

import '../../sass/partials/breadcrumbs.sass'

class Breadcrumbs extends Component {
  render() {
    return (
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <span>Custom Software Development</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default Breadcrumbs
