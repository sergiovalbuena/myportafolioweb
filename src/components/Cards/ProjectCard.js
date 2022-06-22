import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { keyframes } from "styled-components"
import { Caption, H3 } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"

export default function ProjectCard(props) {
  return (
    <Wrapper src={props.image}>
      <Link>
        <Background src={props.image} />
        <WrapperText>
          <Title>{props.title}</Title>
          <Text>{props.text}</Text>
        </WrapperText>
      </Link>
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
  width: 360px;
  height: 420px;
  position: relative;
  overflow: hidden; //make a mask for the img
  margin: 0 15px 45px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  display: grid;
  animation: ${animation} 1s 0.5s forwards cubic-bezier(0.075, 0.82, 0.265, 1);
  opacity: 0;
  padding:0;

  :hover {
    //transform: scale(2, 2);
    transform: translateY(-20px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    animation: ${animation} 1s 0.5s forwards cubic-bezier(0.075, 0.82, 0.265, 1);
  }

`

const Background = styled.img`
  position: absolute;
  top: 50px;
  left: 0px;
  //height: 100%;
  width: 100%;
  z-index: -1;
  background: url(${props => props.image});
  background-size: cover;
  animation: ${animation} 1s 0.5s forwards cubic-bezier(0.075, 0.82, 0.265, 1);

  :hover {
    transform: scale(2, 2);
    //transform: translateY(-20px);
  }
`

const WrapperText = styled.div`
    position: absolute ;
    left: 0;
    top:0;
  background-color: ${themes.light.backgroundColor} ;
  @media(prefers-color-scheme: dark){
    background-color:${themes.dark.backgroundColor} ;
  }
  width: 100% ;
  border-radius:20px ;
  height: 100px;


  :hover{
  }
`

const Title = styled(H3)`
  width: 190px;
  text-align:left ;
  margin-left: 10px;
  margin-top: 10px;
  color: ${themes.dark.text1};
  @media (prefers-color-scheme: light) {
    color: ${themes.light.text1};
  }
`

const Text = styled(Caption)`
  color: ${themes.dark.text1};
  text-align:left ;
  margin-left: 10px;
  @media (prefers-color-scheme: light) {
    color: ${themes.light.text1};
  }
`
