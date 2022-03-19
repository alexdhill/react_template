import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from "../pages/Home";
import About from "../pages/About";

import Error404 from "../pages/404";

interface RouterProps {}

const Router: React.FC<RouterProps> = (props) => {
  //const getBase = (url: string) => url.substring(url.lastIndexOf('/'));

  return(
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
  );
}

export default Router;