import { BrowserRouter, Route, Routes } from "react-router-dom";

import Html from "./components/Html";
import HomePage from "./components/HomePage";
import Javascript from "./components/Javascript";
import ReactPage from "./components/ReactPage";
import PageNotFound from "./components/PageNotFound";

import Css from "./components/Css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="html" element={<Html />} />
          <Route path="css" element={<Css />} />
          <Route path="javascript" element={<Javascript />} />
          <Route path="react" element={<ReactPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
