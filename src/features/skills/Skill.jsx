import React from "react";

export default function Skill({ icon, text }) {
  return (
    <div className="skills__icons-icon">
      <span className="iconify" data-icon={icon} data-inline="false"></span>
      <h5 className="skills__icons-icon-text">{text}</h5>
    </div>
  );
}
