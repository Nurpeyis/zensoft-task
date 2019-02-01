import React, { Component } from 'react'

import Breadcrumbs from '../components/partials/Breadcrumbs'

import devImg from '../images/dev.png'
import mouseImg from '../images/mouse.svg'

import '../sass/pages/intro.sass'

class Intro extends Component {
  render() {
    return (
      <div className="first-row">
        <div className="container">
          <div className="content">

            <Breadcrumbs />

            <h2 className="zs-title">Custom Software Development</h2>
            <div className="title-description">
              Innovative solutions tailored to your business need
            </div>
            <div className="content-text">
              Custom software can be a powerful tool for companies to optimize
              their operations or gain competitive advantage in the market. When
              built properly, it can fulfill needs where off-the-shelf tools fall
              short. For custom software to scale with your company, it’s critical
              to have a partner who will implement the right technology solutions
              from the start.
            </div>
          </div>
          <img src={devImg} alt="devImg" className="side-image" />
        </div>
        <img src={mouseImg} alt="devImg" className="mouse-image" />
      </div>
    )
  }
}

export default Intro
