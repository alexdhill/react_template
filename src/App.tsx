import React, { createContext, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

import Router from "./components/Router";
import Footer from "./components/Footer";
import Header from "./components/Header";

import './App.css';
import "./theming/Variables.css";

const NavContext = createContext<[NavigateFunction, string, React.Dispatch<React.SetStateAction<string>>]>(null);

const App: React.FC = () => {
  const nav = useNavigate();
  const [active, setActive] = useState<string>("/");

  return (
    <NavContext.Provider value={[nav, active, setActive]}>
      <div className="app">
        <Header />
        <Router />
        <Footer />
      </div>
    </NavContext.Provider>
  );
}

export default App;
export {
  NavContext
}