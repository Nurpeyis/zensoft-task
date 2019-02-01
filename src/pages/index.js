import React, { Component } from 'react'

import Layout from '../components/partials/Layout'
import SEO from '../components/Seo'
import Intro from '../components/Intro'
import DevSteps from '../components/DevSteps'
import Devider from '../components/partials/Devider'

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Intro />
        <Devider />
        <DevSteps />
      </Layout>
    )
  }
}

export default IndexPage;
