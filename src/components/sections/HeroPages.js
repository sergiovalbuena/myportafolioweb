import React from "react"
import styled from "styled-components"
import { keyframes } from "styled-components"
import { themes } from "../styles/ColorStyles"
import { BodyIntro, H2 } from "../styles/TextStyles"

export default function HeroPages() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>El Gran Titulo</Title>
        <Description>Aca es la descripcion de cada coso</Description>
      </ContentWrapper>
    </Wrapper>
  )
}

const animation = keyframes`
    0%{
        opacity: 0;
        transform: translateY(20px) ;
    }
    100%{
        opacity: 1;
        transform: translateY(0px) ;
    }
`

const Wrapper = styled.div`
  height: 620px;
  overflow: hidden;
  bottom: 100px;
`
const ContentWrapper = styled.div`
  margin: 0;
  //max-width: 500px ;
  padding: 150px 50px;
  text-align: center;
  background: url("/images/waves/tutorial-wave5.svg");
  background-size: cover;
  background-position: center;
  width: 100%;
`
const Title = styled(H2)`
  color: ${themes.dark.text1};
  @media (prefers-color-scheme: light) {
    color: ${themes.light.text1};
  }
  opacity: 0;

  
  //animation-duration: ;
  //animation-delay: ;
  //animation-fill-mode: ;
  //animation-timing-function: ;
`
const Description = styled(BodyIntro)`
  color: ${themes.dark.text2};
  @media (prefers-color-scheme: light) {
    color: ${themes.light.text2};
  }
  animation: ${animation} 1s  .6s forwards cubic-bezier(0.075, 0.82, 0.265, 1);
  opacity: 0;
`
