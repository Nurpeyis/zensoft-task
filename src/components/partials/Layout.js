import React, { Component } from 'react'

import Header from './Header'
import Footer from './Footer'
import '../../sass/common.sass'

// window.addEventListener('scroll', () => {
//   const headerRight = document.getElementsByClassName('header-right')[0]

//   if (!headerRight.classList.contains('on')) {
//     if (window.scrollY) {
//       document.getElementById('header').classList.add('scrolled')
//     } else {
//       document.getElementById('header').classList.remove('scrolled')
//     }
//   }
// })

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
