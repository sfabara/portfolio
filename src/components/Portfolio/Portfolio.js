import React, { useState } from "react";
import {ProjectImage, ProjectCard,PortfolioHeaderContainer, PortfolioContent, Header, SubHeader, Description, Button, ProjectContent, ProjectTitle, ProjectDescription } from "../Portfolio/styles/portfolioStyles";

export function Portfolio() {
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
          <p style={{textAlign: "left"}}>
                Welome to the part where I show off all my skills applied to real world problems :D
          </p>
        </Description>

      </PortfolioHeaderContainer>

      <PortfolioContent>
          <ProjectCard>
                <ProjectImage src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
                <ProjectContent>
                    <ProjectTitle>EXAMPLE PROJECT</ProjectTitle>
                    <ProjectDescription>
                        My app does so much cool stuff it cooks and cleans for you and never ever lets you down. It stays positive for you always.
                        It also does other things and features like baking.
                    </ProjectDescription>
                    <Button>
                        <h2>
                            View Project
                        </h2>
                    </Button>
                </ProjectContent>

          </ProjectCard>
         
      </PortfolioContent>

    </body>

  );
}
