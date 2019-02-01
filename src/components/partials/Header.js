import React, {Component} from 'react'
import { Link } from 'gatsby'

import Navbar from './navbar/Navbar'

import logo from '../../images/logo.svg'

import "../../sass/partials/header.sass"


class Header extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({
      navbarOpen: !this.state.navbarOpen
    })
  }

  render() {
    return(
      <header id="header">
        <div className={ "header-content" + (this.state.navbarOpen ? ' on' : '') }>
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <Navbar handleNavbar={this.handleNavbar} navbarOpen={this.state.navbarOpen} />
        </div>
      </header>
    )
  }
}

export default Header;