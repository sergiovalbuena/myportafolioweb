import React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import HeroPages from "../components/sections/HeroPages"




function SecondPage() {
  return (
    <Layout>
      <Seo title="Page two" />
        <HeroPages />
    </Layout>
  )
}

export default SecondPage