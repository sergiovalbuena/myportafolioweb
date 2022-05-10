import React from 'react'
import styled from 'styled-components'

export default function MockupAnimation() {
  return (
      <Wrapper>
          <div className='mockup1' />
          <div className='mockup2' />
          <div className='mockup3' />
          <div className='mockup4' />
          <div className='mockup5' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position: relative;
    perspective: 5000;

    div{
        transform: rotateY(-20deg) rotateX(20deg);
        transform-origin: bottom left ;
    }

    *{
        transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1) ;
    }

    :hover div{
        transform: rotateY(0deg) rotateX(0deg) ;
        &.mockup1{
            transition-delay: .2s;
            transform: translate(-30px, -30px) ;
        }
        &.mockup2{
            transition-delay: .4s;
            transform: translate(0px, -30px) ;
        }
        &.mockup3{
            transition-delay: 0s;
        }
        &.mockup4{
            transition-delay: .1s;
            transform: translate(-120px, 30px) ;
        }
        &.mockup5{
            transition-delay: .3s;
            transform: translate(-90px, 30px) ;
        }
            
        :hover{
            filter: brightness(150%) saturate(120%);
        }
    }

    .mockup1{
        position:absolute ;
        width: 183px ;
        height: 120px ;
        left: 0px;
        top: 0px;

        background: url('images/animations/mockup1.svg') ,radial-gradient(
            218.51% 281.09% at 100% 100%, 
            rgba(235,63,51,0.6) 0%,
            rgba(76,0,200,.6) 45.83%,
            rgba(76,0,200,.6) 100%
        ) ;
        box-shadow:0px 16.38px 32.77px rgba(99,30,187,.5), inset 0px 0px 0px .5px rgba(255,255,255,.2) ;
        backdrop-filter: blur(21.85px) ;  //minimal browser support
        border-radius: 16px;

    }

    .mockup2{
        position:absolute ;
        width: 183px ;
        height: 120px ;
        left: 214px;
        top: 0px;

        background: url('images/animations/mockup2.svg'),linear-gradient(
            198.51deg,
            #4315db 12.72%,
            #9076e7 54.49%,
            #a2eeff 100.01%
        ) ;
        box-shadow:0px 8.38px 16.77px rgba(0,0,0,.1),
        0px 16px 32px rgba(0,0,0,.15), 
        inset 0px 0px 0px .5px rgba(255,255,255,.2) ;
        backdrop-filter: blur(21.85px) ;  //minimal browser support
        border-radius: 16px;
    }
    .mockup3{
        position: absolute;
        width: 701px ;
        height:428px ;
        left: 37px;
        top: 60px;

        background: url('images/animations/mockup3.svg'), rgba(23, 12, 61, .5);
        box-shadow: inset 0px 0px 0px .5px rgba(255, 255, 255, .2) ;
        backdrop-filter: blur(20px) ;

        border-radius: 8px ;
    }

    .mockup4{
        position:absolute ;
        width: 399px ;
        height: 274px ;
        left: 194px;
        top: 262px;

        background: url('images/animations/mockup4.svg'), rgba(39,20,62,.3) ;
        box-shadow: inset 0px 0px 0px .5px rgba(255,255,255,.2) ;
        backdrop-filter: blur(20px) ;

        border-radius:10px ;
    }

    .mockup5{
        position:absolute ;
        width:412px ;
        height:274px ;
        left: 616px;
        top: 262px;

        background: url('images/animations/mockup5.svg'), rgba(39,20,62,.2);
        box-shadow:inset 0 0 0 .5px rgba(255,255,255,.2);
        backdrop-filter: blur(20px) ;

        border-radius:10px ;
    }
`
