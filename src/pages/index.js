import * as React from "react"
//import Card from "../components/Card"

import styled from "styled-components"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import CardSection from "../components/sections/CardSection"
import SmallCardSection from "../components/sections/SmallCardSection"
import HeroSection from "../components/sections/HeroSection"
import { H2, H3 } from "../components/styles/TextStyles"
import TrickProjectCard from "../components/sections/TrickProjectCard"
import { themes } from "../components/styles/ColorStyles"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <SectionsTitle>Some projects</SectionsTitle>
    <CardSection />
    <SectionsSubtitle>I've worked with ...</SectionsSubtitle>
    <SmallCardSection />
    <SectionsTitle>Tips, Trick, and more</SectionsTitle>
    <TrickProjectCard />
  </Layout>
)

export default IndexPage

const SectionsTitle = styled(H2)`
  color: ${themes.light.text1};
  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
  }
  margin-left: 40px;
`
const SectionsSubtitle = styled(H3)`
  margin-left: 40px;
  color: ${themes.light.text1};
  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
  }
`
