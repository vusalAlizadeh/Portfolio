import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ga8mlqc",
        "contact_form",
        form.current,
        "IQ1bOmkD73qKaBtPO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  const contact_variant = {
    hidden: {
      opacity: 0,
      y: "40vh",
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
      className="container contact"
      variants={contact_variant}
      initial="hidden"
      animate="visible"
    >
      <div className="row contact-row">
        <h1 className="mb-1 contact-title">CONTACT ME</h1>
        <h4 className="mb-5 contact-sub-title">
          I'LL BE GLAD TO ANSWER YOUR QUESTION
        </h4>
        <div className="col-lg-12">
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              className="contact-form-input"
              placeholder="Your name"
              name="from_name"
            ></input>
            <input
              type="email"
              className="contact-form-input"
              placeholder="Your email"
              name="user_email"
            ></input>
            <input
              type="text"
              className="contact-form-input"
              placeholder="Subject"
              name="from_name"
            ></input>
            <textarea
              placeholder="Message"
              className="contact-form-text"
              name="message"
            ></textarea>

            <button type="submit" className="contact-button">
              Send
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
