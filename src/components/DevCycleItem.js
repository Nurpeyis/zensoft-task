import React, { Component } from 'react'

import '../sass/pages/dev-cycle-item.sass'

import ClockImg from "../images/clock.svg"
import PersonImg from "../images/person.svg"
import BoxImg from "../images/box.svg"

class DevCycleItem extends Component {
  render() {
    const { title, process, team, deliverable} = this.props.data

    return (
      <div className="dev-cycle-item">
        <div className="cycle-title">
          <div className="cycle-number">{this.props.number < 9 ? ("0" + (Number(this.props.number) + 1)) : (Number(this.props.number) + 1) }</div>
          <h3>{title}</h3>
        </div>
        <div className="cycle-sections-list">
          <div className="cycle-section">
            <h4>
              <img src={ClockImg} alt="clock"/>
              Process</h4>
            <ul>
              {
                process.map((el, key) => {
                  return(
                    <li key={key}>{el}</li>
                  )
                })
              }
            </ul>
          </div>
          <div className="cycle-section">
            <h4>
              <img src={PersonImg} alt="person"/>
              Team</h4>
            <ul>
              {
                team.map((el, key) => {
                  return (
                    <li key={key}>{el}</li>
                  )
                })
              }
            </ul>
          </div>
          <div className="cycle-section">
            <h4>
              <img src={BoxImg} alt="box"/>
              Deliverable</h4>
            <ul>
              {
                deliverable.map((el, key) => {
                  return (
                    <li key={key}>{el}</li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default DevCycleItem
