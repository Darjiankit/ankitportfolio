import React from "react";
import { Switch, Route } from "react-router-dom";
import Landingpage from "./landingpage";
import Contact from "./contact";
import Project from "./project";
import Resume from "./resume";
import AboutMe from "./AboutMe";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landingpage} />
    <Route path="/contact" component={Contact} />
    <Route path="/project" component={Project} />
    <Route path="/resume" component={Resume} />
    <Route path="/aboutme" component={AboutMe} />
  </Switch>
);

export default Main;
