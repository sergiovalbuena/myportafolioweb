import { Link } from "gatsby"
import * as React from "react"


import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="Home"/>
    <div>
      <h1>
        Hi, 
      </h1>
      <p>Happy Hacking</p>
    </div>
    <Link to = "/page-2">Go To Page 2</Link>
  </Layout>
)

export default IndexPage
