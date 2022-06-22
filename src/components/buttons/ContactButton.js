import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Caption2, SmallText } from "../styles/TextStyles"

export default function ContactButton(props) {
  const { title, subtitle } = props //deconstructing props

  return (
    <Link to="/page-2">
      <Wrapper>
        <IconWrapper>
          <Icon src="/images/icons/profile.svg" className="icon" />
          {/* <Ring src="images/icons/icon-ring.svg" /> */}
        </IconWrapper>
        <TextWrapper>
          <Title>{title || "Contact Me"}</Title>
          <Subtitle>{subtitle || "Let's make ux the world"} </Subtitle>
        </TextWrapper>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  width: 280px;
  height: 77px;
  padding: 12px;
  background: linear-gradient(180deg, #fff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: grid;
  grid-template-columns: 53px auto;
  align-items: center;
  gap: 20px;
  
  *, &{ //children, itself
    transition:1s cubic-bezier(0.075, 0.82, 0.165, 1); //duration, delay, timing
  }

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px) scale(1.1) rotate(1deg);

    .icon{
      transform: scale(1.2) ;
    }
  }
`

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;

  ${Wrapper}:hover &{
    background: green;
    filter: hue-rotate(30deg) brightness(120%) saturate(180%);
  }
`

const Icon = styled.img`
  width: 29px;
  height: 29px;
`
const Ring = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;

  ${Wrapper}:hover & {
    transform: rotate(30deg) scale(1.2) translate(1px,1px) ;
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`

const Title = styled(Caption2)`
  color: black;
`

const Subtitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
`
