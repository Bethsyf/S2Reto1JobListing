import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import View from "../components/View";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<View />} />
      </Routes>
    </HashRouter>
  );
}

export default App;