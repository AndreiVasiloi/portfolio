import React from "react";
import resume from "../../resume/Andrei Vasiloi.pdf";
import "../../css/_downloadResume.scss";

export default function DownloadResume() {
  const resumeTitle = `If you like my work, here is my Resume.`;
  const resumeTitleChars = resumeTitle.split("");
  return (
    <div className="resume">
      <h3 className="resume__title">
        {/* {resumeTitleChars.map((char, index) => (
          <span key={index} className="resume__title-char">
            {char}
          </span>
        ))} */}
        If you like my work, here is my Resume.
      </h3>
      <a href={resume} download className="resume__btn">
        download
      </a>
    </div>
  );
}
