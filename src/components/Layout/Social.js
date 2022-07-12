import React, { useState, useEffect } from "react";
import { SocialStyles2, SocialBtn } from "./styles/socialStyles.js";
import { FaGithubSquare, FaTwitterSquare, FaLinkedin, FaEnvelopeSquare} from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";


export function Social() {
  const theme = useTheme()

  return (
    <SocialStyles2 linkedin={"#0e76a8"} github={"#171515"} twitter={"#00acee"} >
      <ul style={{    listStyleType: "none", display: "flex", alignItems: "center", justifyContent: "space-around", width: "100%"
    }}>
        <li>
          <a href="https://www.linkedin.com/in/sfabara/" style={{ color: "inherit" }} target="_blank">
            <IconContainer hoverColor={"#123456"} >
              <FaLinkedin size={50} color="#0077B5" />
            </IconContainer>
          </a>

        </li>

        {/* <li>
          <a href="https://twitter.com/de_central_dan" style={{ color: "inherit" }} target="_blank">
            <IconContainer hoverColor={"#0e76a8"}>
              <FaTwitterSquare size={50} color="#1DA1F2" />

            </IconContainer>
          </a>
        </li> */}
        <li>
          <a href="https://github.com/sfabara/" style={{ color: "inherit" }} target="_blank">
            <IconContainer>
              <FaGithubSquare size={50} color="#5b5959" />

            </IconContainer>
          </a>


        </li>
        <li>
          <a href="mailto:sfabaraa@gmail.com" style={{ color: "inherit" }} target="_blank">
            <IconContainer>
              {/* <div style={{backgroundColor: "#fefefe", padding: 10,borderRadius: "5px", width: "25px", height: "25px", display: "flex", alignItems: "center", justifyContent: "center"}}> */}
                <FaEnvelopeSquare size={50} color={"#fefefe"}/>

              {/* </div> */}
            </IconContainer>
          </a>


        </li>
      </ul>
    </SocialStyles2>
  );
}

export const IconContainer = ({ children, hoverColor }) => {
  return (
    <motion.div
      className={hoverColor}
      style={{ borderRadius: "10px", display: "flex", justifyContent: "space-around", alignItems: "center" }}
      whileHover={{
        scale: 1.25,
        transition: { duration: .5 },

      }}
      whileTap={{ scale: .9 }}
    >
      {children}
    </motion.div>

  )
}