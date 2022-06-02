import React from "react";
import "./about.css";
import SkillCard from "./SkillCard";

import { motion } from "framer-motion";

import skills from "./About_data";

function About() {
  const about_variant = {
    hidden: {
      opacity: 0,
      y: "50vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
  };
  return (
    <motion.div
      className="about"
      variants={about_variant}
      initial="hidden"
      animate="visible"
    >
      <h6 className="about-title">
        I describe my self as someone who's persistent, a quick learner and
        loves problem solving by using simple and scalable solutions.
      </h6>
      <div className="container about-container">
        <h5 className="container-title">What i offer</h5>
        <div className="row">
          {skills.map((skill, index) => (
            <SkillCard skill={skill} key={index * Math.random * 1000} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default About;
