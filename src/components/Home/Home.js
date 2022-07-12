import React, { useState, useEffect, useContext } from "react";
import { BiRightArrow } from 'react-icons/bi'
import { FaDocker, FaDownload, FaJava, FaLinux } from 'react-icons/fa'
import { Routes, Route, Link } from "react-router-dom";
import { HomeContainer, Banner, Header, SubHeader, Description, Button, Toolbox, Floater, ButtonsContainer } from "./styles/homeStyles";
import Face from '../../img/self-portrait.jpg';
import Tilted from "./Tilted"
import { FaReact, FaRust, FaNodeJs, FaPython, FaCss3, FaHtml5, FaNode } from "react-icons/fa"
import { SiTypescript } from "react-icons/si"
import { MdContactPage } from "react-icons/md"
import "./styles/home.css"
import ReactTooltip from 'react-tooltip';
import { setGlobal, useGlobal } from "reactn";
import { useTheme } from "styled-components";
import { Social } from "../Layout/Social";
import Pdf from '../../content/Sebastian_Fabara_Resume.pdf'

export function Home(props) {

  const theme = useTheme()


  return (
    <body>

      <HomeContainer>

        <Banner>
          <h3>Hello! Im a software engineer based in the U.S 🇺🇸</h3>
        </Banner>
        <Tilted image={Face} />


        <Header>
          <h1 style={{}}>Sebastian Fabara</h1>
        </Header>
        <SubHeader>
          <h3>Software Engineer</h3>
        </SubHeader>
        <Description>
          <p>
            Fascinated with all things technology. I love to learn new tools and I'm passionate about making systems as efficient as possible.
          </p>
        </Description>

        <ButtonsContainer>

          <Link to="/portfolio" style={{ color: theme.textColor, textDecoration: "none" }}>
            <Button>
              <h3 >Portfolio</h3><BiRightArrow size={25} style={{ marginLeft: 8 }} />
            </Button>
          </Link>

          <a href={Pdf} target="_blank" style={{ textDecoration: "none", color: theme.textColor}}>
            <Button >
              <h3>Resume</h3><MdContactPage size={27} style={{ marginLeft: 10 }} />
            </Button>
          </a>
        </ButtonsContainer>

        {/* <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-evenly", backgroundColor: "red", width: "40%" }}>

        </div> */}


      </HomeContainer>


      <HomeContainer>
        <Header>
          <h1>My Toolbox</h1>
        </Header>
        {/* <Description>
          <p >
              
          </p>
        </Description> */}
        <Toolbox className="toolbox" >

          <Floater  >
            <FaReact data-tip="React.js" size={70} className="react" />
          </Floater>

          <Floater>
            <FaNode data-tip="Node.js" size={70} className="node" />

          </Floater>
          <Floater>
            <FaPython data-tip="Python" size={70} className="python" />

          </Floater>
          <Floater>
            <FaRust data-tip="Rust" size={70} className="rust" />

          </Floater>

          <Floater>
            <SiTypescript data-tip="Typescript" size={70} className="ts" />


          </Floater>

          <Floater>
            <FaHtml5 data-tip="HTML" size={70} className="html5" />
          </Floater>

          <Floater>
            <FaCss3 data-tip="Css" size={70} className="css" />

          </Floater>


          <Floater>
            <FaDocker data-tip="Docker" size={70} className="docker" />
          </Floater>

          <Floater>
            <FaLinux data-tip="Linux" size={70} className="linux" />
          </Floater>


          <ReactTooltip place="bottom" className="tooltip" />

        </Toolbox>

        {/* <Toolbox className="toolbox" >

        </Toolbox> */}


      </HomeContainer>

      <HomeContainer>
        <Header>
          <h1>Contact Me</h1>
        </Header>

        <Social />


      </HomeContainer>



    </body>

  );
}
