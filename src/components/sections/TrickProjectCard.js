import React from "react"
import styled from "styled-components"
import ProjectCard from "../Cards/ProjectCard"

import TrickCard from "../Cards/TrickCard"

export default function SmallCardSection() {
  return (
    <CardWrapper>
      <div>
        <TrickCard
          image="/images/logos/js-logo.svg"
          text="API and DOM Manipulation"


          //image={require("")}
        />
   
      </div>
      <div>
        <TrickCard
          image="/images/logos/js-logo.svg"
          text = "Object Oriented. JavaScript"
          //image={require("")}
        />
      </div>
      <div>
        <TrickCard
          image="/images/logos/react-logo.svg"
          text="React HandBook"
          //image={require("")}
        />
      </div>
      <div>
        <TrickCard
          image="/images/logos/nodejs-logo.svg"
          text="Node JS. Theory"
          //image={require("")}
        />
      </div>
      <div>
        <TrickCard
          image="/images/logos/react-logo.svg"
          text="Frontend Web3.0"
          //image={require("")}
        />
        <TrickCard
          image="/images/logos/js-logo.svg"
          text="FakeStore"
          //image={require("")}
        />
        <TrickCard
          image="/images/logos/terminal-logo.svg"
          text="Terminal"
          //image={require("")}
        />
      </div>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  //display: grid;
  padding: 10px 20px;
  overflow: auto;
  white-space: nowrap;

  div {
    display: inline-block;
    text-align: center;
    padding: 14px;
    text-decoration: none;
  }
  div:hover {
    //background-color:yellow ;
  }
`
