import React, { useState } from "react";
import { BiRightArrow } from 'react-icons/bi'
import { Routes, Route, Link } from "react-router-dom";
import { HomeContainer, Banner, Header, SubHeader, Description, Button, Toolbox, Floater } from "./styles/homeStyles";
import Face from '../../img/self-portrait.jpg';
import Tilted from "./Tilted"
import { FaReact, FaRust, FaNodeJs, FaPython, FaCss3, FaHtml5, FaNode } from "react-icons/fa"
import "./styles/home.css"
import ReactTooltip from 'react-tooltip';

export function Home() {
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
          <h3>Full Stack | Web 3.0 | Design</h3>
        </SubHeader>
        <Description>
          <p>
            I do all sorts of stuff at work and at home please be impressed by this page and hire me I promise to do good, always.
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
