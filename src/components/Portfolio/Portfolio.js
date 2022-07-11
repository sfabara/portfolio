import React, { useState } from "react";
import { ProjectImage, ProjectCard, PortfolioHeaderContainer, PortfolioContent, Header, SubHeader, Description, Button, ProjectContent, ProjectImageContainer, ProjectTitle, ProjectDescription, Tag, TagContainer } from "../Portfolio/styles/portfolioStyles";
import content from "../../content/portfolio.json"
import { experimentalStyled } from "@mui/material";
import { maxHeight } from "@mui/system";


export function Portfolio() {

  const Card = ({ title, description, technologies, img }) => {
    return (
      <ProjectCard>
        <ProjectContent>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectDescription>
            {description}
          </ProjectDescription>
          <TagContainer>
            {/* <Tag>Meow</Tag>
            <Tag>Meow</Tag>
            <Tag>Meow</Tag>
            <Tag>Meow</Tag> */}
            {technologies && technologies.map(tech => {
              return <Tag>{tech}</Tag>
            })}


          </TagContainer>


          <Button>
            <h2>
              View Project
            </h2>
          </Button>
        </ProjectContent>

        {/* <div style={{ width: "50rem", minHeight: "30rem", maxHeight: "45rem", display: "flex", justifyContent: "center", backgroundColor: "grey", borderRadius: 10 }}>

          <ProjectImage src={img} />


        </div> */}
        <ProjectImageContainer>
          <ProjectImage src={img} />

        </ProjectImageContainer>

      </ProjectCard>
    )
  }

  const renderCards = () => {

    return content.map(exp => {
      return <Card title={exp.title} description={exp.description} key={exp.id} technologies={exp.technologies} img={exp.img} />
    })


  }



  return (
    <body>

      <PortfolioHeaderContainer>

        <Header>
          <h1 >Portfolio</h1>
        </Header>
        {/* <SubHeader>
          <h3>DevOps</h3>
          <h3>Fullstack</h3>
          <h3>Design</h3>
        </SubHeader> */}
        <Description>
          <p style={{ textAlign: "center" }}>
            Welome to the part where I show off all my skills applied to real world problems :D
          </p>
        </Description>

      </PortfolioHeaderContainer>

      <PortfolioContent>

        {renderCards()}

        {/* <Card dir="left" />
        <Card dir="right" />
        <Card dir="left" />
        <Card dir="right" /> */}

      </PortfolioContent>

    </body>

  );
}
