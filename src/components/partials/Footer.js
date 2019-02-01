import React, { Component } from 'react'
import { Link } from 'gatsby'

import FooterLink from './FooterLink';

import "../../sass/partials/footer.sass";

import logoWhite from '../../images/logo-white.svg'

class Footer extends Component {
  state = {
    linkSections: [
      {
        title: 'About Us',
        links: ['Home', 'Clients', 'Platform', 'Company', 'Enterprise', 'Startups']
      },
      {
        title: 'Services',
        links: ['Development', 'Design', 'Testing', 'PM', 'Data Proccessing']
      },
      {
        title: 'Technologies',
        links: ['Mobile', 'Blockchain', 'Java', 'Python', 'JavaScript']
      }
    ]
  }

  render() {
    return(
      <footer>
        <div className="container">
          <div className="footer-links">
            {
              this.state.linkSections.map((el, key) => {
                return (
                  <FooterLink key={key} links={el} />
                )
              })
            }
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
  }
}

export default Footer
