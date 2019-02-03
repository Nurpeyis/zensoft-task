import React, { Component } from 'react'

import Layout from '../components/partials/Layout'
import SEO from '../components/Seo'
import Intro from '../components/Intro'
import Devider from '../components/partials/Devider'
import DevSteps from '../components/DevSteps'
import CompanyInfo from '../components/CompanyInfo'
import SLoganDevider from '../components/SLoganDevider'
import DevServices from '../components/DevServices'
import DevCycles from '../components/DevCycles'
import StartProject from '../components/StartProject';

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`task`, `zensoft`, `gatsby`, `react`]} />
        <Intro />
        <Devider />
        <DevSteps />
        <CompanyInfo />
        <SLoganDevider />
        <DevServices />
        <DevCycles />
        <StartProject />
      </Layout>
    )
  }
}

export default IndexPage;
