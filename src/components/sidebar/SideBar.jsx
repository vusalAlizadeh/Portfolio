import React from "react";
import "./sidebar.css";
import photo from "../../assets/projects_images/photo.jpg";
import tie from "../../assets/icons/tie.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import github from "../../assets/icons/github.svg";
import pin from "../../assets/icons/pin.svg";
import resume from "../../assets/resume.pdf";
import { motion } from "framer-motion";
function SideBar() {
  const handleClickEmail = () => {
    window.open("mailto:alizadehhv@gmail.com");
  };

  const sideBar_variants = {
    hidden: {
      x: "-20vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.7,
        type: "spring",
      },
    },
  };
  return (
    <motion.div
      className="sidebar"
      variants={sideBar_variants}
      initial="hidden"
      animate="visible"
    >
      <img src={photo} alt="avatar" className="side_bar-avatar"></img>
      <div className="side_bar-name">
        Vusal <span> Alizadeh</span>
      </div>
      <div className="side_bar-item side_bar-title">Front End Developer</div>
      <a href={resume} download="resume.pdf">
        <div className="side_bar-item side_bar-resume">
          <img src={tie} alt="" className="side_bar-icon" />
          Download resume
        </div>
      </a>
      <figure className="side_bar-social-icons">
        <a
          href="https://www.facebook.com/vusal.alizadeh.99"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={facebook}
            alt="facebook"
            className="side_bar-icon icon-instagram mr-3"
          ></img>
        </a>
        <a
          href="https://instagram.com/alizadehv_?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={instagram}
            alt="instagram"
            className="side_bar-icon icon-facebook"
          ></img>
        </a>
      </figure>
      <div className="side_bar-contact">
        <div className="side_bar-location">
          <img src={pin} alt="location" className="side_bar-icon" />
          Baku, Azerbaijan
        </div>
        <div className="side_bar-item side_bar-github">
          <a
            href="https://github.com/vusalAlizadeh"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={github}
              alt="github"
              className="side_bar-icon icon-github"
            />
            github
          </a>
        </div>
        <div className="side_bar-item">
          <i className="fas fa-envelope"></i>alizadehhv@gmail.com
        </div>
        <div className="side_bar-item">
          <i className="fas fa-phone"></i>+994 77-511-46-51
        </div>
      </div>
      <div
        className="side_bar-item side_bar-email mt-5"
        onClick={handleClickEmail}
      >
        email me
      </div>
    </motion.div>
  );
}

export default SideBar;
