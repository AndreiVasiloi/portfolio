import React from "react";
import About from "../about/About";
import Footer from "../footer/Footer";
import HomePage from "../home/HomePage";
import NavBar from "../navigation/NavBar";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";

export default function Main() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
