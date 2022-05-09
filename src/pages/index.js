import * as React from "react"


import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="Home"/>
    <div>
      <h1>
        Welcome to <b>my new Site!</b>
      </h1>
    </div>
  </Layout>
)

export default IndexPage
