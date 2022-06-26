import React from "react"
import styled from "styled-components"

import TrickCard from "../Cards/TrickCard"

export default function SmallCardSection() {
  return (
    <CardWrapper>
      <div>
        <TrickCard
          link="https://www.figma.com/file/59v2NJa11Uxckhz6WA5BHA/API-REST.-Javascript?node-id=0%3A1"
          image="/images/logos/js-logo.svg"
          text="API and DOM Manipulation"

          //image={require("")}
        />
      </div>
      <div>
        <TrickCard
          link="https://dx7v7y.csb.app"
          image="/images/logos/js-logo.svg"
          text="Object Oriented. JavaScript"
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
          link="https://2t70zu.csb.app"
          image="/images/logos/nodejs-logo.svg"
          text="Node JS. Theory"
          //image={require("")}
        />
      </div>
      <div>
        <TrickCard
          link="https://2t70zu.csb.app"
          image="/images/logos/nodejs-logo.svg"
          text="DOM Manipulation"
          //image={require("")}
        />
      </div>
      <div>
        <TrickCard
          image="/images/logos/react-logo.svg"
          text="Frontend Web3.0"
          //image={require("")}
        />
      </div>
      <div>
        <TrickCard
          image="/images/logos/js-logo.svg"
          text="FakeStore"
          //image={require("")}
        />
      </div>
      <div>
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
    padding: 15px;
    text-decoration: none;
  }
  div:hover {
    //background-color:yellow ;
  }
`
