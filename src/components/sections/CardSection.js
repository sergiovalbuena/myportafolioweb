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
          image='/images/screenShots/asanas.png'
          link="https://yogananda.netlify.app"
          logo1 = "/images/logos/react-logo.svg"
          logo2 = "/images/logos/js-logo.svg"
          logo3 = "/images/logos/figma-logo.svg"
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
          title="La Taqueria"
          text="A BOH App. Make tasks easier"
          link =""
          //image={require("")}
        />
      </div>
      <div>
        <ProjectCard
          title="Prep List"
          text="https://lataqueria-admin.netlify.app/signin"
          link =""
          //image={require("")}
        />
      </div>
      <div>
        <ProjectCard
          title="RabbitLand"
          text="Learning animation on CSS"
          link="https://rabbitland.netlify.app"
          //image={require("")}
        />
      </div>
      <div>
        <ProjectCard
          title="Lego-Super Man"
          text="Learning and applying CSS transitions"
          link="https://animationcsssuperman.netlify.app"
          //image={require("")}
        />
      </div>
      <div>
        <ProjectCard
          title="Batatabit"
          text="Learning and applying CSS resposive"
          link="https://batatabit-responsive.netlify.app/#plans"
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
