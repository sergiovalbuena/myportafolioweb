import React from "react"
import styled from "styled-components"
import Card from "../Card"

export default function CardSection() {
  return (
    <CardWrapper>
      <div>
        <Card
          title="Proyecto # 1"
          text="Aca seria la descripcion"
          //image={require("")}
        />
      </div>
      <div>
        <Card
          title="Proyecto # 2"
          text="Aca seria la descripcion"
          //image={require("")}
        />
      </div>
      <div>
        <Card
          title="Proyecto # 2"
          text="Aca seria la descripcion"
          //image={require("")}
        />
      </div>
      <div>
        <Card
          title="Proyecto # 2"
          text="Aca seria la descripcion"
          //image={require("")}
        />
      </div>
      <div>
        <Card
          title="Proyecto # 2"
          text="Aca seria la descripcion"
          //image={require("")}
        />
      </div>
      <div>
        <Card
          title="Proyecto # 2"
          text="Aca seria la descripcion"
          //image={require("")}
        />
      </div>
      <div>
        <Card
          title="Proyecto # 2"
          text="Aca seria la descripcion"
          //image={require("")}
        />
      </div>
      <div>
        <Card
          title="Proyecto # 2"
          text="Aca seria la descripcion"
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
  div:hover{
      background-color:yellow ;
  }
`
