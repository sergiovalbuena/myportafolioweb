import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import ContactButton from "../buttons/ContactButton"
import MockupAnimation from "../animations/MockupAnimation"
import WaveGround from "../backgrounds/WaveGround"
import { keyframes } from "styled-components"

//const HeroSection = () => {return(<div></div>)}
function HeroSection() {
  return (
    <Wrapper>
      <WaveGround />
      <ContentWrapper>
        <TextWrapper>
          <Title>Hi, I'm <span>Sergio</span> </Title>
                  <Description>Happy Hacking </Description>
          <ContactButton 
            //title='Contactame ahora'
            //subtitle='Codificando el mundo'
                  />
          <Link to="/page-2">Go To Page 2</Link>
        </TextWrapper>
        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const animation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px) ;
    filter: blur(10px);
  }
  100%{
    opacity: 1 ;
    transform: translateY(0px) ;
    filter: blur(0px);
  }
`

const Wrapper = styled.div`
  //background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  overflow: hidden ;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  height: 950px;
  margin: 0 auto;
  padding: 200px 30px;
  display:grid ;
  grid-template-columns: 360px auto ;

  //change columns per row in mobile size:
  @media (max-width: 450px) {
    grid-template-columns: auto ;
    gap: 60px;
    padding: 150px 20px 250px;
  }

`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
  //only children not subchildrens
  > * {
    opacity: 0 ;
    animation: ${animation} 1s forwards; 

    :nth-child(1){
      animation-delay: 0.1s ;
    }
    :nth-child(2){
      animation-delay: 0.2s ;
    }
    :nth-child(3){
      animation-delay: 0.4s ;
    }
  }
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%) ;
  background-clip: text ;
  -webkit-background-clip: text;
  color: transparent;

  span{
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%) ;
  background-clip: text ;
  -webkit-background-clip: text;
  color: transparent;
  }

  @media (max-width: 450px) {
    font-size: 48px ;
  }

`
const Description = styled(MediumText)``
