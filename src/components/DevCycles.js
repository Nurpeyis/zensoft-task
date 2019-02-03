import React, { Component } from 'react'

import DevCycleItem from "./DevCycleItem";

import '../sass/pages/dev-cycles.sass'

class DevCycles extends Component {
  state = {
    cycles: [
      {
        title: "Dicovery",
        process: ["Dicsovery Call", "Defining Components", "Defining User Roles", "Defining Epics", "Defining System Blueprint"],
        team: ["Solution Architect", "Software Architect", "UX Lead", "Business Analyst"],
        deliverable: ["NDA", "Design Sample", "Presentations", "Use Case", "Proposal for POC"]
      },
      {
        title: "Visual and Technical designs",
        process: ["Competitive Analysis", "Wireframes", "High Fidelity Screens", "Technical Architecture", "Database Design", "Web Services Definition", "Microservices"],
        team: ["Software Architect", "Business Analyst", "Solutions Specialist", "UX Lead", "Product Manager"],
        deliverable: ["Flow Diagram", "Graphics", "Design Assets", "Marvel Prototype", "User Stories", "System Blueprint", "Database Schema"]
      },
      {
        title: "Development",
        process: ["Staging", "Demo", "Production", "Release Candidate", "Production"],
        team: ["Developers", "Quality Assurance", "Software Architect"],
        deliverable: ["Source Code", "Builds"]
      },
      {
        title: "Deployment",
        process: ["Provisioning", "Submission", "App Store Testing", "Rollout Planing"],
        team: ["DevOps", "Quality Assurance", "Delivery Manager"],
        deliverable: ["App Store Release", "Play Spore Release", "Internal Distribution", "Rollout Execution"]
      },
      {
        title: "Maintenance",
        process: ["App Upgrades Testing", "Internal Team Support"],
        team: ["Technical Support", "Developers", "Release Manager"],
        deliverable: ["Bug Fixes", "Ticket Response"]
      },
      {
        title: "Upgrades",
        process: ["Requirements Gathering", "Backlog Prioritization"],
        team: ["Developers", "Quality Assurance", "Team Leads", "Technical Architect"],
        deliverable: ["Upgrades to apps and Services"]
      },
    ],
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      let leftLine = document.getElementById('left-line')

      let cyclesItems = document.getElementsByClassName('dev-cycle-item')
      let lastCycleItemHeight = cyclesItems[cyclesItems.length - 1].offsetHeight
      
      let cyclesItemsWrapHeight = document.getElementsByClassName('cycles-list')[0].offsetHeight

      if (window.screen.height / 2 > leftLine.getBoundingClientRect().top) {
        let lineHeight = -1 * (leftLine.getBoundingClientRect().top - (window.screen.height / 2))
        
        if (lineHeight < cyclesItemsWrapHeight - lastCycleItemHeight) {
          leftLine.style.height = lineHeight + "px"
        } else {
          leftLine.style.height = cyclesItemsWrapHeight - lastCycleItemHeight + "px";
        }
      } else {
        leftLine.style.height = "0px"
      }

      for (let i = 0; i < cyclesItems.length; i++) {
        if (window.screen.height / 2 > cyclesItems[i].getBoundingClientRect().top) {
          cyclesItems[i].classList.add('active')
        } else {
          cyclesItems[i].classList.remove('active')
        }
      }
    })
  }

  render() {
    return (
      <div className="dev-cycles">
        <div className="container">
          <h2 className="zs-title"><span>Our Custom</span> Software<br/>Development Cycle</h2>
          <div className="cycles-list">
            <div id="left-line"></div>
            {
              this.state.cycles.map((el, key) => {
                return(
                  <DevCycleItem key={key} number={key} data={el} />
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default DevCycles
