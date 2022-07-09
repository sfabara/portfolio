import React, { useState, useEffect, useContext } from "react";
import { BiRightArrow } from 'react-icons/bi'
import { FaDocker, FaDownload, FaJava, FaLinux } from 'react-icons/fa'
import { Routes, Route, Link } from "react-router-dom";
import { HomeContainer, Banner, Header, SubHeader, Description, Button, Toolbox, Floater } from "./styles/homeStyles";
import Face from '../../img/self-portrait.jpg';
import Tilted from "./Tilted"
import { FaReact, FaRust, FaNodeJs, FaPython, FaCss3, FaHtml5, FaNode } from "react-icons/fa"
import "./styles/home.css"
import ReactTooltip from 'react-tooltip';
import { setGlobal, useGlobal } from "reactn";
import { useTheme } from "styled-components";

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
            Fascinated with all things technology. From mobile to web and from CI/CD to crypto and web 3.0.
          </p>
        </Description>

        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>

          <Link to="/portfolio" style={{ color: theme.textColor, textDecoration: "none" }}>
            <Button>
              <h3 >Portfolio</h3><BiRightArrow size={25} style={{ marginLeft: 5 }} />
            </Button>

          </Link>

          <Button >
            <h3>Resume</h3><FaDownload size={20} style={{ marginLeft: 5 }} />
          </Button>


        </div>


      </HomeContainer>


      <HomeContainer>
        <h1>My Toolbox</h1>
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
            <FaJava data-tip="Typescript" size={70} className="js" />


          </Floater>
          <Floater>
            <FaCss3 data-tip="Css" size={70} className="css" />

          </Floater>
          <Floater>
            <FaHtml5 data-tip="HTML" size={70} className="html5" />
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



    </body>

  );
}
