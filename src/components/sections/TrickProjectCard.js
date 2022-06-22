import React from "react"
import styled from "styled-components"
import ProjectCard from "../Cards/ProjectCard"

import TrickCard from "../Cards/TrickCard"

export default function SmallCardSection() {
  return (
    <CardWrapper>
      <div>
        <TrickCard
          image="/images/logos/ae-logo.svg"

          //image={require("")}
        />
      </div>
      <div>
        <TrickCard
          image="/images/logos/ae-logo.svg"
          //image={require("")}
        />
      </div>
      <div>
        <TrickCard
          image="/images/logos/ae-logo.svg"
          //image={require("")}
        />
      </div>
      <div>
        <TrickCard
          image="/images/logos/ae-logo.svg"
          //image={require("")}
        />
      </div>
      <div>
        <TrickCard
          image="/images/logos/ae-logo.svg"
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
