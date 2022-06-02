import React from "react";
import "./resume.css";
import Bar from "../Bar/Bar";
import { motion } from "framer-motion";
import { tools, languages } from "./Resume_data";

function Resume() {
  const resume_variant = {
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
      className="container resume"
      variants={resume_variant}
      initial="hidden"
      animate="visible"
    >
      <div className="row">
        <div className="col-lg-6">
          <div className="resume-card">
            <h4 className="resume-card-heading">Education</h4>
            <div className="resume-card-body">
              <h5 className="resume-card-body-title">Computer Engineer</h5>
              <p className="resume-card-name">
                Azerbaijan Technical University (2016-2020)
              </p>
              <p className="resume-card-name">
                University Land of Fire (2020-present)
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="resume-card">
            <h4 className="resume-card-heading">Experience</h4>
            <div className="resume-card-body">
              <h5 className="resume-card-body-title">
                Freelancer Front End developer
              </h5>
              <h5 className="resume-card-body-sub-title">
                Upwork, Fiver, Toptal,PeoplePerHour
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h5 className="resume-languages-heading">Language & Framework</h5>
        <div className="row mt-3">
          <div className="col-lg-6 resume-languages">
            <div className="resume-languages-body">
              {languages.map((language) => (
                <Bar value={language} />
              ))}
            </div>
          </div>

          <div className="col-lg-6 resume-languages">
            <div className="resume-languages-body">
              {tools.map((tool) => (
                <Bar value={tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;
