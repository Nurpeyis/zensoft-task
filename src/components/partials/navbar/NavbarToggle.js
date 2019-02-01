import React, { Component } from 'react'

class NavbarToggle extends Component {
  render() {
    const { handleNavbar, navbarOpen } = this.props
    return (
      <React.Fragment>
        <div className={"hamburger-tgl" + (navbarOpen ? ' on' : '')} onClick={handleNavbar}>
          <div className="hamburger-inner" />
        </div>
      </React.Fragment>
    )
  }
}

export default NavbarToggle;
