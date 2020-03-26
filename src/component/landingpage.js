import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import profilepic from "../0.jpeg";
class Landingpage extends Component {
  render() {
    return (
      <div className="landing-grid" style={{ width: "100%", margin: "auto" }}>
        <Grid />
        <Cell col={12}>
          <img src={profilepic} alt="avtar" className="avtarimage" />
          <div className="banener-text">
            <h1>Front End Web Developer</h1>
            <hr />
            <p>
              HTML | CSS | BOOTSTRAP | MATERIALIZE | SEMANTIC UI | REACT JS |
              JAVASCRIPT | JQUERY | NODE JS | PHP | MONGO DB
            </p>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/ankit-darji/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-square" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/Darjiankit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github-square" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com/ankitdarji7813"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Cell>
        <Grid />
      </div>
    );
  }
}

export default Landingpage;
