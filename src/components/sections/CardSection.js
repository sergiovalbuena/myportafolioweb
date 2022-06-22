import React from "react"
import styled from "styled-components"
import ProjectCard from "../Cards/ProjectCard"

export default function CardSection() {
  return (
    <CardWrapper>
      
      <div>
        <ProjectCard
          title="Yoga Site"
          text="Yoga first project for a Colombian Yoguini"
          image='/images/logos/ae-logo.svg'
          //image={require("")}
        />
      </div>
      <div>
        <ProjectCard
          title="Cats API"
          text="Playing with API and lovely kitties"
          //image={require("")}
        />
      </div>
      <div>
        <ProjectCard
          title="Movies API"
          text="Aca seria la descripcion"
          //image={require("")}
        />
      </div>
      <div>
        <ProjectCard
          title="Prep List"
          text="https://lataqueria-admin.netlify.app/signin"
          //image={require("")}
        />
      </div>
      <div>
        <ProjectCard
          title="RabbitLand"
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
      //background-color:yellow ;
  }
`
