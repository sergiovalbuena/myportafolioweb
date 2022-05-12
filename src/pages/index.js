import * as React from "react"
import Card from "../components/Card"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection/>
    <Card 
      title='Proyecto # 1'
      text='Aca seria la descripcion'
      image={('images/waves/course-wave1.svg')}

    />
  
  
  </Layout>


)

export default IndexPage
