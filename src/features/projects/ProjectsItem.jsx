import React from 'react';
import "../../css/_projects.scss";

export default function ProjectsItem({itemClass, title}) {
    return (
        <div className={`projects__list-item ${itemClass}`}>
          <span className="projects__list-item-text">{title}</span>
        </div>
    )
}
