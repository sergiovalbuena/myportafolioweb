import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { keyframes } from "styled-components"
import { Caption, H3 } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"

export default function SmallProjectCard(props) {
  return (
    <Wrapper src={props.image}>
        <Background src={props.image} />
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
  width: 120px;
  height: 120px;
  margin: 20px 15px;
  overflow: hidden; //make a mask for the img
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  display: grid;
  justify-content: center ;
  align-items: center;
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
  justify-content: center ;
  //height: 100%;
  height: 100%;
  z-index: -1;
  background: url(${props => props.image});
  background-size: cover;
  animation: ${animation} 1s 0.5s forwards cubic-bezier(0.075, 0.82, 0.265, 1);

.img{
  justify-self:center ;
}

  :hover {
    transform: scale(2, 2);
    //transform: translateY(-20px);
  }

  
`
