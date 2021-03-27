import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../css/_navigation.scss";

export default function ProjectsNavBar() {
  let [showNav, setShowNav] = useState(true);
  const navLinks = [
    { title: "Home", to: "" },
    { title: "Reverto", to: "reverto" },
    { title: "Kronstadt Food", to: "kronstadtFood" },
  ];

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
            {navLinks.map((link, index) => (
              <li className="navigation__item" key={index}>
                <NavLink to={`/${link.to}`} className="navigation__link">
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
