import React, { Component } from 'react'

import '../sass/pages/company-info.sass'

import LaptopImg from '../images/laptop.svg'
import ArrowDown from '../images/arrow-down.svg'

class CompanyInfo extends Component {
  state = {
    more: false
  }

  seeMore = e => {
    e.preventDefault()

    console.log('click');

    this.setState({
      more: !this.state.more
    })
  }

  render() {
    return (
      <div className="company-info">
        <div className="container">
          <h2 className="zs-title">We’re <span>Different</span></h2>
          <div className="content">
            <div className={"content-text" + (this.state.more ? " opened" : "")}>
              <p>Custom software solutions can be a powerful tool as your business grows, but the process of creating them is challenging. We get it. Visibility into the status of your project and reliable delivery on milestones is key for meeting business goals. We get that too. </p>
              <p>At Zensoft, we're different. With our Continuous Delivery platform, you can easily monitor development progress, resolve blocking issues, and immediately take the pulse of a project. Shareholders are on the same page about the progress and deliverables of a project at all times.</p> <p>Whether you need a prototype in a month or help scaling an existing solution, our Continuous Delivery platform matches your project with a talented team of experts who build your software on time and on budget. Guaranteed. And if the plan changes?. With Zensoft’s platform, you can log in and adjust your speed, spend and monthly capacity as needed.</p>
              <div className="read-more">
                <a href="/" onClick={this.seeMore}>Read More <img src={ArrowDown} alt=""/></a>
              </div>
            </div>
            <div className="content-image">
              <img src={LaptopImg} alt="devImg" className="side-image" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CompanyInfo
