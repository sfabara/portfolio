import React, { useState, useEffect } from "react";
import { SocialStyles, SocialBtn } from "../styles/socialStyles.js";
import { FaGithubSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

export function Social() {
  return (
    <SocialStyles linkedin={"#0e76a8"} github={"#171515"} twitter={"#00acee"} >
      <ul>
        <li>
          <IconContainer hoverColor={"#123456"} >
            <FaLinkedin size={50} />
          </IconContainer>
        </li>
        <li>
          <IconContainer>
            <FaGithubSquare size={50} />

          </IconContainer>

        </li>
        <li>
          <IconContainer hoverColor={"#0e76a8"}>
            <FaTwitterSquare size={50} style={{}}/>

          </IconContainer>

        </li>
      </ul>
    </SocialStyles>
  );
}

export const IconContainer = ({ children, hoverColor}) => {
  return (
    <motion.div
      className={hoverColor}
      style={{borderRadius: "10px"}}
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