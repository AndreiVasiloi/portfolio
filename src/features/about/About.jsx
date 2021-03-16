import React from "react";
import "../../css/_about.scss";
//import about__img from "../../img/about.jpg";

export default function About() {
  return (
    <section className="section__about">
      <h3 className="about__title">My Story</h3>
      {/* <div className="about__img">
        <img src={about__img} alt="Andrei" />
      </div> */}
      <p className="about__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
  );
}
