import React from "react";
import About from "../about/About";
import Footer from "../footer/Footer";
import HomePage from "../home/HomePage";
import NavBar from "../navigation/NavBar";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";

export default function Main() {
  const navLinks = [
    { title: "Home", id: "home" },
    { title: "About", id: "about" },
    { title: "Skills", id: "skills" },
    { title: "Projects", id: "projects" },
    { title: "Contact", id: "footer" },
  ];

  return (
    <div className="App">
      <NavBar navLinks={navLinks} />
      <HomePage />
      <About />
      <Skills />
      <Projects />
      <Footer navLinks={navLinks} />
    </div>
  );
}
