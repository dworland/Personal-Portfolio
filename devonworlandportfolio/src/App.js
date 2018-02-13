import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import KYW from "./pages/kyw";
import Contact from "./pages/contact";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/know-your-worth" component={KYW} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  </Router>;

export default App;
