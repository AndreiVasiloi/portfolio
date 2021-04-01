import React from "react";
import "../../css/_home.scss";
import avatar from "../../img/home_avatar.svg";
import { Link } from "react-scroll";

export default function HomePage() {
  return (
    <section className="section__home" id="home">
      <h1 className="home__header">
        <div className="home__header-fr">
          <span className="home__header-char home__header-char-fr">S</span>
          <span className="home__header-char home__header-char-fr">e</span>
          <span className="home__header-char home__header-char-fr">l</span>
          <span className="home__header-char home__header-char-fr">f</span>
          <span className="home__header-char home__header-char-fr">-</span>
          <span className="home__header-char home__header-char-fr">T</span>
          <span className="home__header-char home__header-char-fr">a</span>
          <span className="home__header-char home__header-char-fr">u</span>
          <span className="home__header-char home__header-char-fr">g</span>
          <span className="home__header-char home__header-char-fr">h</span>
          <span className="home__header-char home__header-char-fr">t</span>
        </div>
        <div className="home__header-sr">
          <span className="home__header-char home__header-char-sr">F</span>
          <span className="home__header-char home__header-char-sr">r</span>
          <span className="home__header-char home__header-char-sr">o</span>
          <span className="home__header-char home__header-char-sr">n</span>
          <span className="home__header-char home__header-char-sr">t</span>
          <span className="home__header-char home__header-char-sr">-</span>
          <span className="home__header-char home__header-char-sr">E</span>
          <span className="home__header-char home__header-char-sr">n</span>
          <span className="home__header-char home__header-char-sr">d</span>
          <span className="home__header-char home__header-char-sr">&nbsp;</span>
          <span className="home__header-char home__header-char-sr">D</span>
          <span className="home__header-char home__header-char-sr">e</span>
          <span className="home__header-char home__header-char-sr">v</span>
          <span className="home__header-char home__header-char-sr">e</span>
          <span className="home__header-char home__header-char-sr">l</span>
          <span className="home__header-char home__header-char-sr">o</span>
          <span className="home__header-char home__header-char-sr">p</span>
          <span className="home__header-char home__header-char-sr">e</span>
          <span className="home__header-char home__header-char-sr">r</span>
        </div>
      </h1>
      <div className="home__avatar">
        <img src={avatar} alt="avatar" className="home__avatar-img" />
      </div>
      <Link to="projects" className="home__btn" smooth={true} duration={1000}>
        my projects
      </Link>
    </section>
  );
}
