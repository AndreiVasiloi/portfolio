import React, { useState } from "react";
import "../../css/_navigation.scss";
import { Link } from "react-scroll";

export default function NavBar({ navLinks }) {
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
            {navLinks.map((link, index) => (
              <li className="navigation__item" key={index}>
                <Link
                  to={`${link.id}`}
                  className="navigation__link"
                  smooth={true}
                  duration={1000}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
