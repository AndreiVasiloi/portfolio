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
  return (
    <section className="section__projects" id="projects">
      <h3 className="projects__title">My Projects</h3>
      <ProjectsItem
        itemClass={"reverto"}
        title="Reverto"
        image={reverto}
        text={revertoText}
        route={"reverto"}
        websiteLink={revertoLink}
      />
      <ProjectsItem
        itemClass={"kronstadtFood"}
        title="Kronstadt Food"
        image={kronstadtFood}
        text={kronstadtFoodText}
        route={"kronstadtFood"}
        websiteLink={kronstadtFoodLink}
      />
    </section>
  );
}
