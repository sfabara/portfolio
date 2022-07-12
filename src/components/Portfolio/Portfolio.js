import React, { useState } from "react";
import { ProjectImage, ProjectCard, PortfolioHeaderContainer, PortfolioContent, Header, SubHeader, Description, Button, ProjectContent, ProjectImageContainer, ProjectTitle, ProjectDescription, Tag, TagContainer } from "../Portfolio/styles/portfolioStyles";
import content from "../../content/portfolio.json"
import { experimentalStyled } from "@mui/material";
import { maxHeight } from "@mui/system";
import { FaExternalLinkSquareAlt } from "react-icons/fa"
import { useTheme } from "styled-components";
export function Portfolio() {


  const Card = ({ title, description, technologies, img, link }) => {
    const theme = useTheme()

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

          <a href={link}  target="_blank" style={{ textDecoration: "none", color: theme.textColor, display: "flex", alignItems: "center", justifyContent: "center"}} >
            <Button >
              <h2>
                View Project

              </h2>
              <FaExternalLinkSquareAlt size={26} />

            </Button>


          </a>


        </ProjectContent>

        <ProjectImageContainer>
          <ProjectImage src={img} />

        </ProjectImageContainer>

      </ProjectCard>
    )
  }

  const renderCards = () => {

    return content.map(exp => {
      return <Card title={exp.title} description={exp.description} key={exp.id} technologies={exp.technologies} img={exp.img} link={exp.link} />
    })


  }



  return (
    <body>

      <PortfolioHeaderContainer>

        <Header>
          <h1 >Portfolio</h1>
        </Header>

        <Description>
          <p style={{ textAlign: "center" }}>
            Includes open source and private projects
          </p>
        </Description>

      </PortfolioHeaderContainer>

      <PortfolioContent>

        {renderCards()}


      </PortfolioContent>

    </body>

  );
}
