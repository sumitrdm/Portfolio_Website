import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import About from "../About/About";
import Home from "../Home/Home";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import GoHome from "../GoHome/GoHome";

const App = () => {
  return (
    <div>
      <HashRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contact" component={Contact} />
          <GoHome />
        </div>
      </HashRouter>
    </div>
  );
};
export default App;
