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
          image='/images/screenShots/yogaPage.png'
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
          image='/images/screenShots/moviesAPI.png'
          link="https://google.com"
          logo2 = "/images/logos/js-logo.svg"
          logo3 = "/images/logos/figma-logo.svg"
          //image={require("")}
        />
      </div>
      <div>
        <ProjectCard
          title="Movies API"
          text="Aca seria la descripcion"
          image='/images/screenShots/moviesAPI.png'
          link="https://google.com"
          logo1 = "/images/logos/react-logo.svg"
          logo2 = "/images/logos/js-logo.svg"
          logo3 = "/images/logos/figma-logo.svg"
          //image={require("")}
        />
      </div>
      <div>
        <ProjectCard
          title="La Taqueria"
          text="A BOH App. Make tasks easier"
          image='/images/screenShots/LaTaqueria.png'
          link="https://lataqueria-admin.netlify.app/signin"
          logo1 = "/images/logos/react-logo.svg"
          logo2 = "/images/logos/js-logo.svg"
          logo3 = "/images/logos/figma-logo.svg"
          //image={require("")}
        />
      </div>
      <div>
        <ProjectCard
          title="Prep List"
          text="Digitalizing steps to earn time."
          link="https://rjsy23.csb.app"
          image='/images/screenShots/preplist.png'
          logo1 = "/images/logos/react-logo.svg"
          logo2 = "/images/logos/js-logo.svg"
          logo3 = "/images/logos/figma-logo.svg"
          //image={require("")}
        />
      </div>
      <div>
        <ProjectCard
          title="RabbitLand"
          text="Learning animation on CSS"
          link="https://rabbitland.netlify.app"
          image='/images/screenShots/rabbitLand.png'
          logo2 = "/images/logos/js-logo.svg"
          logo3 = "/images/logos/figma-logo.svg"
          
        />
      </div>
      <div>
        <ProjectCard
          title="Lego-Super Man"
          text="Learning and applying CSS transitions"
          link="https://animationcsssuperman.netlify.app"
          image='/images/screenShots/superMan.png'
          logo2 = "/images/logos/js-logo.svg"
          logo3 = "/images/logos/figma-logo.svg"
          //image={require("")}
        />
      </div>
      <div>
        <ProjectCard
          title="Batatabit"
          text="Learning and applying CSS resposive"
          link="https://batatabit-responsive.netlify.app"
          image='/images/screenShots/batata.png'
          logo2 = "/images/logos/js-logo.svg"
          logo3 = "/images/logos/figma-logo.svg"
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
