import React, { Component } from 'react'
import { Link } from 'gatsby'

import '../sass/pages/start-project.sass'

class StartProject extends Component {
  render() {
    return (
      <div className="start-project">
        <div className="container">
          <div className="content">
            <h2 className="zs-title"><span>Scale</span> your team today</h2>
            <div className="content-text">
              <p>Our Continuous Delivery process has helped us deliver results for over 100 companies, from Y-Combinator backed startups to the Fortune </p>
            </div>
            <div className="start-project-link">
              <Link to="/">Start Your Project</Link>
            </div>
          </div>
        </div>
        <div className="dots"></div>
        <div className="dots-continue"></div>
      </div>
    )
  }
}

export default StartProject
