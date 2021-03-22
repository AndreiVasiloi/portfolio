import React from 'react';
import "../../css/_projects.scss";
import ProjectsItem from './ProjectsItem';

export default function Projects() {
    return (
        <section className="section__projects">
           <h3 className="projects__title">My Projects</h3>
           <div className="projects__list">
               <ProjectsItem itemClass={"reverto"} title="Reverto"/>
               <ProjectsItem itemClass={"kronstadtFood"} title="Kronstadt Food" />
           </div>
        </section>
    )
}
