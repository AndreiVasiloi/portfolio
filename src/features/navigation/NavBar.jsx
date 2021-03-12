import React from "react";
import "../../css/_navigation.scss";
import HamburgerIcon from "./HamburgerIcon";

export default function NavBar() {
  return (
    <>
      <ul className="nav">
        <HamburgerIcon />
        <li>Work</li>
        <li>Biography</li>
        <li>Experience</li>
        <li>Contact</li>
      </ul>
    </>
  );
}
