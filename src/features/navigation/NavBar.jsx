import React, { useState } from "react";
import "../../css/_navigation.scss";

export default function NavBar() {
  let [showNav, setShowNav] = useState(true);
  return (
    <>
      <div className="navigation">
        <div
          className="navigation__button"
          onClick={() => setShowNav(!showNav)}
        >
          <span
            className={
              showNav
                ? "navigation__icon"
                : "navigation__icon navigation__icon-toggle"
            }
          >
            &nbsp;
          </span>
        </div>
        <div
          className={
            showNav
              ? "navigation__background"
              : "navigation__background navigation__toggle"
          }
        >
          &nbsp;
        </div>
        <nav
          className={
            showNav
              ? "navigation__nav"
              : "navigation__nav navigation__nav-active"
          }
        >
          <ul className="navigation__list">
          <li className="navigation__item">
              <a href="#home" className="navigation__link">
                Home
              </a>
            </li>
            <li className="navigation__item">
              <a href="#about" className="navigation__link">
                About
              </a>
            </li>
            <li className="navigation__item">
              <a href="#skills" className="navigation__link">
                Skills
              </a>
            </li>
            <li className="navigation__item">
              <a href="#projects" className="navigation__link">
                Projects
              </a>
            </li>
            <li className="navigation__item">
              <a href="#footer" className="navigation__link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
