import { BrowserRouter, Route, Routes } from "react-router-dom";

import Html from "./components/Html";
import HomePage from "./components/HomePage";
import Javascript from "./components/Javascript";
import ReactPage from "./components/ReactPage";
import PageNotFound from "./components/PageNotFound";

import Css from "./components/Css";
// import Home from "./test/Home";
// import Room from "./test/Room";
// import PageNotFound from "./test/PageNotFound";
// import Bed from "./test/Bed";
// import Chair from "./test/Chair";
// import Form from "./test/Form";

function App() {
  return (
    // <div>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route index element={<Home />} />
    //       <Route path="room" element={<Room />}>
    //         <Route path="bed" element={<Bed />} />
    //         <Route path="chair" element={<Chair />} />
    //       </Route>
    //       <Route path="*" element={<PageNotFound />} />
    //       <Route to="form" element={<Form />} />
    //     </Routes>
    //   </BrowserRouter>
    // </div>

    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="html" element={<Html />} />
        <Route path="css" element={<Css />} />
        <Route path="javascript" element={<Javascript />} />
        <Route path="react" element={<ReactPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
