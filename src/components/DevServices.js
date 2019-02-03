import React, { Component } from 'react'
import Glide, { Swipe, Controls, Breakpoints } from "@glidejs/glide/dist/glide.modular.esm";

import DevServiceItem from './DevServiceItem'

import "@glidejs/glide/src/assets/sass/glide.core.scss";
import '../sass/pages/dev-services.sass'

class DevServices extends Component {

  state = {
    services: [
      {
        title: "Advisory and consulting service",
        items: ["Technical Consulting Service", "Technology Adoption", "Technology Strategy Development"]
      },
      {
        title: "Visual and technical design",
        items: ["Flow Diagram", "Graphics", "Design Assets", "User Stories"]
      },
      {
        title: "Front end development",
        items: ["iOS", "Android", "Desktop", "Web Apps"]
      },
      {
        title: "Deployment",
        items: ["Upgrade for Updates", "Technical and Operational", "Support", "Web Server Monitoring"]
      },
      {
        title: "Maintenance",
        items: ["AWS", "Google Cloud", "Microsoft Azure"]
      },
      {
        title: "Back end development",
        items: ["Microservices", "Blockchain", "Java", "Python"]
      },
    ]
  }

  componentDidMount() {
    new Glide('.dev-services-list', {
      type: 'carousel',
      perView: 3,
      perTouch: 3,
      breakpoints: {
        800: {
          perView: 2,
          perTouch: 2
        },
        575: {
          perView: 1,
          perTouch: 1
        }
      }
    }).mount({ Swipe, Controls, Breakpoints })
  }

  render() {
    return (
      <div className="dev-services">
        <div className="container">
          <h2 className="zs-title">Custom Software Development <br/><span>Services</span></h2>
          <div className="dev-services-list">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {
                  this.state.services.map((el, key) => {
                    return(
                      <li key={key} className="glide__slide">
                        <DevServiceItem data={el} />
                      </li>
                    )
                  })
                }
              </ul>
            </div>

            <div className="glide__arrows" data-glide-el="controls">
              <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                <svg width="50" height="50" x="0px" y="0px" viewBox="0 0 40 40">
                  <circle cx="60" cy="20" r="19" transform="rotate(90 40 0)" className="circle-svg"></circle>
                </svg>
              </button>
              <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                <svg width="50" height="50" x="0px" y="0px" viewBox="0 0 40 40">
                  <circle cx="60" cy="20" r="19" transform="rotate(-90 40 40)" className="circle-svg"></circle>
                </svg>
              </button>
            </div>

            {/* <div className="slider__bullets glide__bullets" data-glide-el="controls[nav]">
              <button className="slider__bullet glide__bullet glide__bullet--active" data-glide-dir="=0"></button>
              <button className="slider__bullet glide__bullet" data-glide-dir="=1"></button>
              <button className="slider__bullet glide__bullet" data-glide-dir="=2"></button>
              <button className="slider__bullet glide__bullet" data-glide-dir="=3"></button>
              <button className="slider__bullet glide__bullet" data-glide-dir="=4"></button>
              <button className="slider__bullet glide__bullet" data-glide-dir="=5"></button>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default DevServices
