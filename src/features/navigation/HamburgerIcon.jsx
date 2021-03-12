import React from "react";
import "../../css/_navigation.scss";

export default function HamburgerIcon() {
  return (
    <div class="hamburgerIcon">
      <input type="checkbox" class="checkbox" id="navi-toggle" />
      <label for="navi-toggle" class="button">
        <span class="icon">&nbsp;</span>
      </label>
    </div>
  );
}
