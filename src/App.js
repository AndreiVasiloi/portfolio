import "./css/_base.scss";
import About from "./features/about/About";
import HomePage from "./features/home/HomePage";
import NavBar from "./features/navigation/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage/>
      <About/>
    </div>
  );
}

export default App;
