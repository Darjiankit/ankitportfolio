import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import "./App.css";
import { Link } from "react-router-dom";
import Main from "./component/main";
class App extends Component {
  render() {
    return (
      <div className="demo-big-content ">
        <Layout>
          <Header
            className="headercolor "
            title={
              <Link
                style={{
                  textDecoration: "none",
                  color: "white"
                }}
                to="/"
              >
                My Portfolio
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/project">Project</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer
            className="bg-primary"
            title={
              <Link
                className="text-white"
                style={{ textDecoration: "none", color: "black" }}
                to="/"
              >
                My Portfolio
              </Link>
            }
          >
            <Navigation>
              <Link to="/resume" className="text-white">
                Resume
              </Link>
              <Link to="/aboutme" className="text-white">
                About Me
              </Link>
              <Link to="/project" className="text-white">
                Project
              </Link>
              <Link to="/contact" className="text-white">
                Contact
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
