import React from "react";
import "../../css/_skills.scss";
import Skill from "./Skill";

export default function Skills() {
  const skillsTitle = `My Skills`;
  const skillsTitleChars = skillsTitle.split("");
  return (
    <section className="section__skills" id="skills">
      <h3 className="skills__title">
        {skillsTitleChars.map((char, index) => (
          <span key={index} className="skills__title-char">
            {char}
          </span>
        ))}
      </h3>
      <div className="skills__icons">
        <Skill icon={"vscode-icons:file-type-html"} text="HTML" />
        <Skill icon={"vscode-icons:file-type-css"} text="CSS" />
        <Skill icon={"logos:sass"} text="SASS" />
        <Skill icon={"logos:bootstrap"} text="Bootstrap" />
        <Skill icon={"logos:semantic-ui"} text="Semantic UI" />
        <Skill icon={"logos:javascript"} text="JavaScript" />
        <Skill icon={"logos:react"} text="React" />
        <Skill icon={"logos:react-router"} text="React Router" />
        <Skill icon={"logos-redux"} text="Redux" />
        <Skill icon={"vscode-icons:file-type-firestore"} text="Firestore" />
        <Skill icon={"logos:firebase"} text="Firebase" />
        <Skill icon={"logos:git-icon"} text="Git" />
        <Skill icon={"logos:github-icon"} text="GitHub" />
        <Skill icon={"logos:git-icon"} text="NPM" />
        <Skill icon={"logos:json"} text="JSON" />
        <Skill icon={"whh:ajax"} text="AJAX" />
        <Skill icon={"vscode-icons:file-type-vscode"} text="VS Code" />
        <Skill icon={"logos:terminal"} text="Terminal" />
      </div>
    </section>
  );
}
