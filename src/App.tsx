import React, { createContext, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

import Router from "./components/Router";
import Footer from "./components/Footer";
import Header from "./components/Header";

import './App.css';
import "./theming/Variables.css";
import Loading from "./components/Loading";

interface SiteController {
  nav: NavigateFunction,
  activePage: string,
  setActivePage: React.Dispatch<React.SetStateAction<string>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}
const Controller = createContext<SiteController>(null);

const App: React.FC = () => {
  const nav = useNavigate();
  const [active, setActive] = useState<string>("/");
  const [loading, setLoading] = useState<boolean>(false);

  const controller = {
    nav: nav,
    activePage: active,
    setActivePage: setActive,
    setLoading: setLoading
  }

  return (
    <Controller.Provider value={controller}>
        <div className="app">
          <Loading open={loading} />
          <Header />
          <Router />
          <Footer />
        </div>
    </Controller.Provider>
  );
}

export default App;
export {
  Controller
}