import React from "react";
import "../../css/_projects.scss";

export default function ProjectsItem({ itemClass, title, image }) {
  return (
    <>
      <figure className={`projects__item ${itemClass}`}>
        <img src={image} alt={title} className="projects__item-image" />
        <h3 className="projects__item-title">{title}</h3>
        <figcaption className="projects__item-caption">
          <div className="projects__item-caption-text">
            Designed to help small businesses.
          </div>
          <div className="projects__item-caption-buttons">
            <a href="link" className="projects__item-caption-btn">more details</a>
            <a href="link" className="projects__item-caption-btn">visit website</a>
          </div>
        </figcaption>
      </figure>
    </>
  );
}
