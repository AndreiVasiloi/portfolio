import React from "react";
import "../../css/_about.scss";
// import about__img from "../../img/about2.jpg";

export default function About() {
  return (
    <section className="section__about">
      {/* <div className="about__img">
        <img src={about__img} alt="Andrei" />
      </div> */}
      <div className="about__skills">
      <h3 className="about__skills-title">My Skills</h3>
        <ul className="about__skills-list">
          <li className="about__skills-list-item">HTML</li>
          <li className="about__skills-list-item">CSS</li>
          <li className="about__skills-list-item">JS</li>
        </ul>
      </div>
      <div className="about__story">
        <h3 className="about__story-title">My Story</h3>
        <p className="about__story-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
}
