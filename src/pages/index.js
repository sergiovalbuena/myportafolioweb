import * as React from "react"
//import Card from "../components/Card"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import CardSection from "../components/sections/CardSection"
import HeroSection from "../components/sections/HeroSection"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <CardSection />

  
  
  </Layout>


)

export default IndexPage
