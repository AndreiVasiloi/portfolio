import React from 'react';
import "../../css/_projects.scss";
import ProjectsItem from './ProjectsItem';
import reverto from "../../img/reverto.png";
import kronstadtFood from "../../img/kronstadtFood.JPG";

export default function Projects() {
    return (
        <section className="section__projects">
           <h3 className="projects__title">My Projects</h3>
           <ProjectsItem itemClass={"reverto"} title="Reverto" image={reverto}/>
           <ProjectsItem itemClass={"kronstadtFood"} title="Kronstadt Food" image={kronstadtFood}/>
           {/* <div className="projects__list">
           <ProjectsItem itemClass={"reverto"} title="Reverto" image={reverto}/>
           <ProjectsItem itemClass={"kronstadtFood"} title="Kronstadt Food" image={kronstadtFood}/>
           </div> */}
        </section>
    )
}
