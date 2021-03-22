import "./css/_base.scss";
import About from "./features/about/About";
import HomePage from "./features/home/HomePage";
import NavBar from "./features/navigation/NavBar";
import Projects from "./features/projects/Projects";
import Skills from "./features/skills/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <About />
      <Skills />
      <Projects/>
    </div>
  );
}

export default App;
