import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/_projects.scss";

export default function ProjectsItem({
  itemClass,
  title,
  image,
  text,
  route,
  websiteLink,
}) {
  return (
    <>
      <figure className={`projects__item ${itemClass}`}>
        <img src={image} alt={title} className="projects__item-image" />
        <h3 className="projects__item-title">{title}</h3>
        <figcaption className="projects__item-caption">
          <div className="projects__item-caption-text">{text}</div>
          <div className="projects__item-caption-buttons">
            <NavLink to={`/${route}`} className="projects__item-caption-btn">
              more details
            </NavLink>
            <a href={websiteLink} className="projects__item-caption-btn" target="_blank" rel='noreferrer'>
              visit website
            </a>
          </div>
        </figcaption>
      </figure>
    </>
  );
}
