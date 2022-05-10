import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import ContactButton from "../buttons/ContactButton"

//const HeroSection = () => {return(<div></div>)}
function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>Hi,</Title>
                  <Description>Happy Hacking</Description>
                  <ContactButton/>
          <Link to="/page-2">Go To Page 2</Link>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
`
const Description = styled(MediumText)``
