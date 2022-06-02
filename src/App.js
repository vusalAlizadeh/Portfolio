import "./App.css";
import React from "react";
import SideBar from "./components/sidebar/SideBar";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <div className="container app-container">
          <div className="row app-row">
            <div className="col-lg-3">
              <SideBar />
            </div>
            <div className="col-lg-9">
              <div className="app-main-content">
                <Navbar />
                <Switch>
                  <Route path="/" exact>
                    <About />
                  </Route>

                  <Route path="/resume">
                    <Resume />
                  </Route>

                  <Route path="/projects">
                    <Projects />
                  </Route>

                  <Route path="/contact">
                    <Contact />
                  </Route>

                  <Route>
                    <Redirect to="/" />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
