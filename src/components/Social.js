import React, { useState, useEffect } from "react";
import { SocialStyles, SocialBtn } from "../styles/socialStyles.js";
import { FaGithubSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";

export function Social() {
  return (
    <SocialStyles linkedin={"#0e76a8"} github={"#171515"} twitter={"#00acee"} >
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/sfabara/" style={{ color: "inherit" }} target="_blank">
            <IconContainer hoverColor={"#123456"} >
              <FaLinkedin size={50} />
            </IconContainer>
          </a>

        </li>
        <li>
          <a href="https://github.com/sfabara/" style={{ color: "inherit" }} target="_blank">
            <IconContainer>
              <FaGithubSquare size={50} />

            </IconContainer>
          </a>


        </li>
        <li>
          <a href="https://twitter.com/de_central_dan" style={{ color: "inherit" }} target="_blank">
            <IconContainer hoverColor={"#0e76a8"}>
              <FaTwitterSquare size={50} style={{}} />

            </IconContainer>
          </a>
        </li>
      </ul>
    </SocialStyles>
  );
}

export const IconContainer = ({ children, hoverColor }) => {
  return (
    <motion.div
      className={hoverColor}
      style={{ borderRadius: "10px" }}
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