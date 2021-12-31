import React, { useState } from "react";
import { BiRightArrow } from 'react-icons/bi'
import { Routes, Route, Link } from "react-router-dom";
import { HomeContainer, Banner, Header, SubHeader, Description, Button, Toolbox, Floater } from "../styles/homeStyles";
import Face from '../img/self-portrait.jpg';
import Tilted from "./Tilted"
import { motion, AnimatePresence } from "framer-motion"
import { FaReact, FaRust, FaNodeJs, FaPython, FaCss3, FaHtml5, FaNode } from "react-icons/fa"
import { SiTypescript, SiJavascript, SiPostgresql } from "react-icons/si"
import "../styles/home.css"
import ReactTooltip from 'react-tooltip';

export function Home() {
  return (
    <body>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{position: "relative", width: "100%", height: "100%"}}>
          <path fill="#123456" fill-opacity="1" d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,80C672,85,768,139,864,165.3C960,192,1056,192,1152,160C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg> */}

      <HomeContainer>

        <Banner>
          <h3>Hello! Im a software engineer based in the U.S</h3>
        </Banner>
        <Tilted image={Face} />
        {/* <div style={{ width: "20rem", height: "20rem", backgroundColor: "transparent", borderRadius: "0px", display: "flex", alignItems: "center", justifyContent: "center" }}>

          <img src={Face} style={{ boxShadow: "2px 2px 15px #00000090", width: "100%", borderRadius: "20px", filter: "brightness(60%) contrast(95%)" }}></img>
        </div> */}

        <Header>
          <h1 style={{}}>Sebastian Fabara</h1>
        </Header>
        <SubHeader>
          <h3> Full Stack | Web 3.0 | Design</h3>
        </SubHeader>
        <Description>
          <p >
            I do all sort of stuff at work and at home please be impressed by this page and hire me I promise to do good, always.
          </p>
        </Description>

        <Link to="/portfolio" style={{ color: "inherit", textDecoration: "none" }}>
          <Button>
            <h3>My Portfolio</h3><BiRightArrow size={25} />
          </Button>

        </Link>


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
            <FaNodeJs data-tip="Javascript" size={70} className="js" />


          </Floater>
          <Floater>
            <FaCss3 data-tip="Css" size={70} className="css" />

          </Floater>
          <Floater>
            <FaHtml5 data-tip="HTML" size={70} className="html5" />
          </Floater>

          <ReactTooltip place="bottom" className="tooltip" />

        </Toolbox>
      </HomeContainer>



    </body>

  );
}
