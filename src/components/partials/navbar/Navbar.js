import React, { Component } from 'react'

import NavbarToggle from "./NavbarToggle";
import NavbarLinks from "./NavbarLinks";

import "../../../sass/partials/navbar.sass"

class Navbar extends Component {
  render() {
    const { handleNavbar, navbarOpen } = this.props

    return (
      <>
        <NavbarToggle handleNavbar={handleNavbar} navbarOpen={navbarOpen} />
        <NavbarLinks handleNavbar={handleNavbar} navbarOpen={navbarOpen} />
      </>
    )
  }
}

export default Navbar;
