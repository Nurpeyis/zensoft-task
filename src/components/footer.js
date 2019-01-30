import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import logoWhite from '../images/logo-white.svg'

const Footer = ({ about, services, technologies }) => (
  <footer>
    <div className="container">
      <div className="footer-links">
        <div className="section">
          <div className="section-title">About Us</div>
          <ul>
            {about.map((el, key) => {
              return (
                <li key={key}>
                  <Link to="/">{el}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="section">
          <div className="section-title">Services</div>
          <ul>
            {services.map((el, key) => {
              return (
                <li key={key}>
                  <Link to="/">{el}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="section">
          <div className="section-title">Technologies</div>
          <ul>
            {technologies.map((el, key) => {
              return (
                <li key={key}>
                  <Link to="/">{el}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="footer-right">
        <Link to="/">
          <img src={logoWhite} alt="logo" />
        </Link>
        <p className="description">
          Zensoft is scalable, software development service that uses machine
          learning to provide a 100% on-time and on-budget quarantee.
        </p>

        <div className="footer-contacts">
          <p className="section-title">Contact Us</p>
          <p>
            <a href="mailto:contact@zensoft.io">contact@zensoft.io</a>
          </p>
          <p>
            <a href="tel:1 (415) 895-0555">1 (415) 895-0555</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  about: PropTypes.array,
  services: PropTypes.array,
  technologies: PropTypes.array,
}

Footer.defaultProps = {
  about: ['Home', 'Clients', 'Platform', 'Company', 'Enterprise', 'Startups'],
  services: ['Development', 'Design', 'Testing', 'PM', 'Data Proccessing'],
  technologies: ['Mobile', 'Blockchain', 'Java', 'Python', 'JavaScript'],
}

export default Footer
