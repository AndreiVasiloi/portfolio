import React from "react";
import "../../css/_projects.scss";
import ProjectsItem from "./ProjectsItem";
import reverto from "../../img/reverto.png";
import kronstadtFood from "../../img/kronstadtFood.JPG";

export default function Projects() {
  const revertoText = "Business Management App";
  const revertoLink = "https://managementapp-d440e.firebaseapp.com/";
  const kronstadtFoodText = "Restaurant App";
  const kronstadtFoodLink = "https://kronstadtfood.netlify.app/";
  const projectsTitle = `My Projects`;
  const projectsTitleChars = projectsTitle.split("");
  return (
    <section className="section__projects" id="projects">
      <h3 className="projects__title">
        {projectsTitleChars.map((char, index) => (
          <span key={index} className="projects__title-char">
            {char}
          </span>
        ))}
      </h3>
      <ProjectsItem
        itemClass={"revertoLink"}
        title="Reverto"
        image={reverto}
        text={revertoText}
        route={"reverto"}
        websiteLink={revertoLink}
      />
      <ProjectsItem
        itemClass={"kronstadtFoodLink"}
        title="Kronstadt Food"
        image={kronstadtFood}
        text={kronstadtFoodText}
        route={"kronstadtFood"}
        websiteLink={kronstadtFoodLink}
      />
    </section>
  );
}
