import React from "react";
import "../../../css/_project.scss";
import "../../../css/_gallery.scss";
import "../../../css/_reverto.scss";
import Gallery from "../../gallery/Gallery";
import ProjectsNavBar from "../../navigation/ProjectsNavBar";
import img1 from "../../../img/reverto/img1.PNG";
import img2 from "../../../img/reverto/img2.PNG";

export default function Reverto() {
  const images = [img1, img2];
  return (
    <div className="project">
      <ProjectsNavBar />
      <div className="project__header-container">
        <div className="project__header">
          <h1 className="project__header-big reverto__header">Reverto</h1>
          <h5 className="project__header-small">
            This website was created with the intention of helping the small
            businessess with their management.
          </h5>
        </div>
        <div className="project__links">
          <a href="aa" className="project__link reverto__link">
            go to website
          </a>
          <a href="aa" className="project__link reverto__link">
            github repository
          </a>
          <a href="aa" className="project__link reverto__link">
            youtube video
          </a>
        </div>
        <div className="project__gallery">
          <Gallery project="reverto" images={images} />
        </div>
      </div>
      <div className="project__text">
        <div className="project__about">
          <h3 className="project__about-header reverto__header">
            About this project
          </h3>
          <p className="project__about-text">
            This was the first app build by me, and I am very proud of this.
            With the help of Reverto you can take care of your business
            management. My tool can help you to know what products you have in
            your inventory, and send you a notification if one of your product
            has expired. You can use it as an agenda for your appointments,
            calculate your profit and alot more.
          </p>
        </div>
        <div className="project__technologies">
          <h3 className="project__technologies-header reverto__header">
            Technologies used
          </h3>
          <ul className="project__technologies-list">
            <li className="project__technologies-list-item">HTML</li>
            <li className="project__technologies-list-item">CSS</li>
            <li className="project__technologies-list-item">JavaScript</li>
            <li className="project__technologies-list-item">React</li>
            <li className="project__technologies-list-item">React-Router</li>
            <li className="project__technologies-list-item">Redux</li>
            <li className="project__technologies-list-item">Firestore</li>
            <li className="project__technologies-list-item">Firebase</li>
            <li className="project__technologies-list-item">Bootstrap</li>
            <li className="project__technologies-list-item">Semantic UI</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
