import React from "react";
import Gallery from "../../gallery/Gallery";
import ProjectsNavBar from "../../navigation/ProjectsNavBar";
import "../../../css/_project.scss";
import img1 from "../../../img/kronstadtFood/img1.PNG";
import img2 from "../../../img/kronstadtFood/img2.PNG";

export default function KronstadtFood() {
  const images = [img1, img2];
  return (
    <div className="project">
      <ProjectsNavBar />
      <div className="project__header-container">
        <div className="project__header">
          <h1 className="project__header-big kronstadtFood__header">
            Kronstadt Food
          </h1>
          <h5 className="project__header-small">
            This website was created as a fictional restaurant page.
          </h5>
        </div>
        <div className="project__links">
          <a href="aa" className="project__link kronstadtFood__link">
            go to website
          </a>
          <a href="aa" className="project__link kronstadtFood__link">
            github repository
          </a>
          <a href="aa" className="project__link kronstadtFood__link">
            youtube video
          </a>
        </div>
        <div className="project__gallery">
          <Gallery project="kronstadtFood" images={images} />
        </div>
      </div>
      <div className="project__text">
        <div className="project__about">
          <h3 className="project__about-header kronstadtFood__header">
            About this project
          </h3>
          <p className="project__about-text">
            I wanted to take my CSS skills to the next level and to add another
            app to my portfolio, so I decided to make a website for a fictional
            restaurant. This website has been created only with CSS and
            Bootstrap.
          </p>
        </div>
        <div className="project__technologies">
          <h3 className="project__technologies-header kronstadtFood__header">
            Technologies used
          </h3>
          <ul className="project__technologies-list">
            <li className="project__technologies-list-item">HTML</li>
            <li className="project__technologies-list-item">CSS</li>
            <li className="project__technologies-list-item">SASS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
