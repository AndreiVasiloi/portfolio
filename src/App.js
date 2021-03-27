import "./css/_base.scss";
import { Route } from "react-router-dom";
import Main from "./features/main/Main";
import Reverto from "./features/projects/reverto/Reverto";
import KronstadtFood from "./features/projects/kronstadtFood/KronstadtFood";

function App() {
  return (
    <>
      <Route path="/" exact component={Main} />

      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <Route path="/reverto" component={Reverto} />
            <Route path="/kronstadtFood" component={KronstadtFood} />
          </>
        )}
      />
    </>
  );
}

export default App;
