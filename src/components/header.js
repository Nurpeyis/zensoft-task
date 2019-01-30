import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import logo from '../images/logo.svg'

const Header = ({ siteTitle, nav }) => (
  <header>
    <Link to="/" className="logo">
      <img src={logo} alt="logo" />
    </Link>
    <div className="header-right">
      <nav>
        <ul>
          {nav.map((e, key) => {
            return (
              <li key={key}>
                <Link to="/">{e}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className="auth-link">
        <Link to="/">Sign In</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  nav: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
  nav: [
    'Solutions',
    'Platform',
    'Services',
    'Technologies',
    'Client',
    'Company',
  ],
}

export default Header
