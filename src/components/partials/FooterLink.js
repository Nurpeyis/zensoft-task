import React, { Component } from 'react'
import { Link } from 'gatsby'

class FooterLink extends Component {
  render() {
    const {title, links} = this.props.links
    
    return (
      <div className="section">
        <div className="section-title">{ title }</div>
        <ul>
          {links.map((el, key) => {
            return (
              <li key={key}>
                <Link to="/">{el}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default FooterLink;
