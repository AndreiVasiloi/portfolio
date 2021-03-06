import React from "react";
import "react-slideshow-image/dist/styles.css";
import "../../css/_gallery.scss";
import { Zoom } from "react-slideshow-image";

export default function Gallery({ color, project, images }) {
  const zoomInProperties = {
    indicators: (i) => (
      <div className={`indicator ${project}__indicator`}>{i + 1}</div>
    ),
    scale: 1.4,
    prevArrow: (
      <div className="arrow arrow__left">
        <i className="fas fa-chevron-circle-left"></i>
      </div>
    ),
    nextArrow: (
      <div className="arrow arrow__right">
        <i className="fas fa-chevron-circle-right"></i>
      </div>
    ),
  };
  return (
    <>
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className="gallery__item">
            <img
              src={each}
              alt=""
              className={`gallery__item-img ${project}__img`}
            />
          </div>
        ))}
      </Zoom>
    </>
  );
}
