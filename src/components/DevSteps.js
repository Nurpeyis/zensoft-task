import React, { Component } from 'react'

import '../sass/pages/dev-steps.sass'

import DevStepItem from './DevStepItem'

import ProjectDiscoveryImg from '../images/project-discovery.svg'
import DevelopmentImg from '../images/development.svg'
import SupportImg from '../images/support.svg'

class DevSteps extends Component {
  state = {
    steps: [
      {
        img: ProjectDiscoveryImg,
        title: 'Project Discovery',
        content: 'Starting with discovery, we determine the project’s scope and goals, conduct requirements gathering and evaluation to deliver a project roadmap. Prior to a project’s kickoff, we offer technology consulting to implement the most suitable technology stack and well-thought out system architecture.'
      },
      {
        img: DevelopmentImg,
        title: 'Development',
        content: 'Our clients have complete visibility and control over each project throughout the development lifecycle. Our proprietary process reduces the cost and time involved in delivering software by supercharging Continuous Delivery, an approach to building software in short cycles, with machine learning. This leads to accurate timelines and predictable release cycles. We employ industry-leading best practices in Frontend and Backend development, DevOps, and software testing.'
      },
      {
        img: SupportImg,
        title: 'Support',
        content: 'To guarantee application uptime and performance following a product’s release, we provide ongoing maintenance and support services. This includes feature improvements, performance monitoring, security audits, and infrastructure upgrades.'
      },
    ]
  }

  render() {
    return (
      <div className="dev-steps">
        <div className="container">
          <div className="content">
            <div className="zs-title">Customized Approach</div>
            <div className="content-text">
              Zensoft creates custom software development solutions that respond to the unique needs of our clients. We harness our extensive experience across multiple business industries combined with a deep knowledge of technical architecture to create best-fit solutions for each project.
            </div>
          </div>
        </div>
        <div className="dev-steps-list">
          <div className="container">
            {
              this.state.steps.map((el, key) => {
                return(
                  <DevStepItem key={key} data={el} />
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
export default DevSteps
