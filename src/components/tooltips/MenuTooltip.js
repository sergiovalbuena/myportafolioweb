import React, { useState } from 'react'
import styled from 'styled-components'
import { tooltipData } from '../../data/menuData'
import MenuButton from '../buttons/MenuButton'

export default function MenuTooltip() {
    const [isOpen, setIsOpen] = useState(false)
  return (
      <Wrapper isOpen={ isOpen}onClick={() => setIsOpen(!isOpen)}>
          {tooltipData.map((item, index) => (
              <MenuButton item={item}/>
          )) }
      </Wrapper>
        /* <Wrapper onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Open' : 'Closed'}
            //Button
        </Wrapper> */
  )
}

const Wrapper = styled.div`
    background: rgba(15,14,71,.3);
    box-shadow: 0px 50px 100px rgba(0,0,0,.25),
    inset 0 0 0 .5px rgba(255, 255, 255, .2) ;
    backdrop-filter: blur(40px) ;

    border-radius: 20px;
    padding: 20px;
    position: absolute ;
    top: 60px;
    right: 30px;
    opacity: ${props => (props.isOpen ? 1 : .5)} ;
    z-index:1 ;
    display: grid ;
    gap: 10px ;
    grid-template-columns: 150px ;
    

`
