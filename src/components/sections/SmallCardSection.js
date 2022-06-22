import React from "react"
import styled from "styled-components"
import ProjectCard from "../Cards/ProjectCard"
import SmallProjectCard from "../Cards/SmallProjectCard"

export default function SmallCardSection() {
  return (
    <CardWrapper>
      <div>
        <SmallProjectCard
          image="/images/logos/js-logo.svg"

          //image={require("")}
        />
      </div>
      <div>
        <SmallProjectCard
          image="/images/logos/react-logo.svg"
          //image={require("")}
        />
      </div>
      <div>
        <SmallProjectCard
          image="/images/logos/figma-logo.svg"
          //image={require("")}
        />
      </div>
      <div>
        <SmallProjectCard
          image="/images/logos/xd-logo.svg"
          //image={require("")}
        />
      </div>
      <div>
        <SmallProjectCard
          image="/images/logos/terminal-logo.svg"
          //image={require("")}
        />
      </div>
      <div>
        <SmallProjectCard
          image="/images/logos/firebase-logo.svg"
          //image={require("")}
        />
      </div>
      <div>
        <SmallProjectCard
          image="/images/logos/mongo-logo.svg"
          //image={require("")}
        />
      </div>
      <div>
        <SmallProjectCard
          image="/images/logos/arduino-logo.svg"
          //image={require("")}
        />
      </div>
      <div>
        <SmallProjectCard
          image="/images/logos/csharp-logo.svg"
          //image={require("")}
        />
      </div>
      <div>
        <SmallProjectCard
          image="/images/logos/unity-logo.svg"
          //image={require("")}
        />
      </div>
      <div>
        <SmallProjectCard
          image="/images/logos/nodejs-logo.svg"
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
  margin-bottom:50px ;

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
