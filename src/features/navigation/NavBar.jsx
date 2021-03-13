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
              <a href="link" className="navigation__link">
                Work
              </a>
            </li>
            <li className="navigation__item">
              <a href="link" className="navigation__link">
                Biography
              </a>
            </li>
            <li className="navigation__item">
              <a href="link" className="navigation__link">
                Experience
              </a>
            </li>
            <li className="navigation__item">
              <a href="link" className="navigation__link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
