import React from "react";
import "../../css/_home.scss";
// import home__img from "../../img/about.jpg";

export default function HomePage() {
  return (
    <section className="section__home">
      <h1 className="home__header">
        <div className="home__header-fr">
          <span className="home__header-char home__header-char-fr">H</span>
          <span className="home__header-char home__header-char-fr">i</span>
          <span className="home__header-char home__header-char-fr">,</span>
        </div>
        <div className="home__header-sr">
          <span className="home__header-char home__header-char-sr">I</span>
          <span className="home__header-char home__header-char-sr">`</span>
          <span className="home__header-char home__header-char-sr">
            m&nbsp;
          </span>
          <span className="home__header-char home__header-char-sr">A</span>
          <span className="home__header-char home__header-char-sr">n</span>
          <span className="home__header-char home__header-char-sr">d</span>
          <span className="home__header-char home__header-char-sr">r</span>
          <span className="home__header-char home__header-char-sr">e</span>
          <span className="home__header-char home__header-char-sr">i</span>
          <span className="home__header-char home__header-char-sr">,</span>
        </div>
      </h1>
      <h3 className="home__header-3">a self-taught web developer</h3>
      {/* <div className="home__img">
        <img src={home__img} alt="" />
      </div> */}
      <a href="#projects" className="home__btn">
        my projects
      </a>
    </section>
  );
}
