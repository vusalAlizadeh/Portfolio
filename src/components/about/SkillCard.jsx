import React from "react";

function SkillCard({ skill: { icon, title, about } }) {
  return (
    <div className="col-lg-6">
      <div className="skill-card">
        <img src={icon} alt="icon" className="skill-card-icon"></img>
        <div className="skill-card-body">
          <h6 className="skill-card-title">{title}</h6>
          <p className="skill-card-description">{about}</p>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
