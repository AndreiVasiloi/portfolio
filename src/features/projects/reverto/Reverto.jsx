import React from "react";
import "../../../css/_reverto.scss";

export default function Reverto() {
  return (
    <div className="reverto">
      <div className="reverto__header">
        <h1 className="reverto__header-big">Reverto</h1>
        <h5 className="reverto__header-small">
          This website was created with the intention of helping the small
          businessess with their management.
        </h5>
      </div>
      <div className="reverto__gallery">gallery</div>
      <div className="reverto__about">
        <h3 className="reverto__about-header">Story</h3>
        <p className="reverto__about-text">text</p>
      </div>
      <div className="reverto__technologies">
        <h3 className="reverto__technologies-header">technologies</h3>
        <h3 className="reverto__technologies-text">text</h3>
      </div>
      <div className="reverto__video">video</div>
    </div>
  );
}
