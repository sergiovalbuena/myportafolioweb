import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"


function HeroSection() {
  return (
    <Wrapper>
          <ContentWrapper>
              <TextWrapper>
        <Title>Hi,</Title>
        <Description>Happy Hacking</Description>
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
    max-width:360px;
    display: grid ;
    gap: 30px ;
`

const Title = styled.h1`
    font-weight:bold ;
    font-size:60px;
    color: white;
`
const Description = styled.h1`
    font-size: 17px;
    line-height: 130%;
`