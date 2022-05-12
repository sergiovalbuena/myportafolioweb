import React from "react"
import styled from "styled-components"
import { keyframes } from "styled-components"
import { Caption, H3 } from "./styles/TextStyles"

export default function Card(props) {
  return (
      <Wrapper src={props.image}>
          <Background src={props.image}/>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
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
  width: 260px;
  height: 420px;
  position: relative;
  overflow: hidden; //make a mask for the img
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  display: grid ;
  animation: ${animation} 1s  .5s forwards cubic-bezier(0.075, 0.82, 0.265, 1);
  opacity: 0 ;


  :hover{
      transform: scale(1.1, 1.1) ;
      box-shadow: 0 30px 60px rgba(0,0,0,.5) ;
  }

`

const Background = styled.img`
     position: absolute;
      top: 0px;
      height: 110%;
      z-index: -1;
      background: url(${props => props.image}) ;
      background-size:cover ;
      animation: ${animation} 1s  .5s forwards cubic-bezier(0.075, 0.82, 0.265, 1);


      :hover{
      transform: translateY(-20px) ;
  }
`

const Title = styled(H3)`
    margin: 20px 0 0 10px;
    width: 190px ;
`

const Text = styled(Caption)``
