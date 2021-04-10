import React from "react";
import resume from "../../resume/Andrei Vasiloi.pdf";
import "../../css/_downloadResume.scss";

export default function DownloadResume() {
  return (
    <div className="resume">
      <h3 className="resume__title">If you like my work, here is my Resume.</h3>
      <a href={resume} download className="resume__btn">
        download
      </a>
    </div>
  );
}
