import "./css/_base.scss";
import HomePage from "./features/home/HomePage";
import NavBar from "./features/navigation/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage/>
    </div>
  );
}

export default App;
