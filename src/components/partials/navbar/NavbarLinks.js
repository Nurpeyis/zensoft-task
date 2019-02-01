import React, { Component } from 'react'
import { Link } from 'gatsby'

class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: '/solutions',
        name: 'Solutions'
      },
      {
        id: 1,
        path: '/platform',
        name: 'Platform'
      },
      {
        id: 2,
        path: '/services',
        name: 'Services'
      },
      {
        id: 3,
        path: '/technologies',
        name: 'Technologies'
      },
      {
        id: 4,
        path: '/client',
        name: 'Client'
      },
      {
        id: 5,
        path: '/company',
        name: 'Company'
      }
    ]
  }

  render() {
    const { handleNavbar, navbarOpen } = this.props

    return (
      <nav className={navbarOpen ? 'on' : ''} onBlur={handleNavbar}>
        <ul>
          {this.state.links.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            )
          })}
        </ul>
        <div className="auth-link">
          <Link to="/">Sign In</Link>
        </div>
      </nav>
    )
  }
}

export default NavbarLinks;
