import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import View from "../components/View";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;