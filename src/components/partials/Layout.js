import React, { Component } from 'react'

import Header from './Header'
import Footer from './Footer'
import '../../sass/common.sass'

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <div>{this.props.children}</div>
        <Footer />
      </>
    )
  }
}

export default Layout
