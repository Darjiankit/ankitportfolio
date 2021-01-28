import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="container">
          <div className="row pt-4 mt-4">
            <div className="col-md-6  ">
              <div
                id="demo"
                class="carousel slide border border-dark"
                data-ride="carousel"
              >
                <ul class="carousel-indicators ">
                  <li data-target="#demo" data-slide-to="0" class="active"></li>
                  <li data-target="#demo" data-slide-to="1"></li>
                  <li data-target="#demo" data-slide-to="2"></li>
                  <li data-target="#demo" data-slide-to="3"></li>
                </ul>

                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      className="img-fluid h-100 w-100 "
                      src={require("../Project Assets/Portfolio project/1.png")}
                      alt="Los Angeles"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      className="img-fluid h-100 w-100"
                      src={require("../Project Assets/Portfolio project/2.png")}
                      alt="resumepage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      className="img-fluid h-100 w-100 "
                      src={require("../Project Assets/Portfolio project/3.png")}
                      alt="contactpage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      className="img-fluid h-100 w-100"
                      src={require("../Project Assets/Portfolio project/4.png")}
                      alt="contactpage"
                    />
                  </div>
                </div>

                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                  <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                  <span class="carousel-control-next-icon"></span>
                </a>
              </div>
            </div>
            <div className=" text-justify col-md-6 order-2 order-md-1">
              <h3 className="text-center underline mt-0">
                <u>Portfolio Project</u>
              </h3>
              <ul>
                <li>
                  React Js Portfolio Website project using Html,CSS, Bootstrap,
                  React-Rounter, Font Awsome
                </li>
                <li>
                  Laning Page with Information and links for LinkedIn, GitHub &
                  twitter
                </li>
                <li>
                  Resume Page which describes my information related to my
                  experience , Projects and Educations
                </li>
                <li>
                  Project page which describes my project works and for design
                  used Bootstrap grid with HTML5 code to implement video feature
                </li>
              </ul>
              <div className="text-center">
                <a
                  href="https://github.com/Darjiankit/Ankit-Portfolio.git"
                  className="btn btn-outline-danger "
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="row pt-4 mt-4">
            <div className="col-md-6  ">
              <div id="demo1" class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators ">
                  <li
                    data-target="#demo1"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#demo1" data-slide-to="1"></li>
                  <li data-target="#demo1" data-slide-to="2"></li>
                </ul>

                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      className="img-fluid h-100 w-100"
                      src={require("../Project Assets/Youtube project/1.png")}
                      alt="landingpage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      className="img-fluid w-100 h-100"
                      src={require("../Project Assets/Youtube project/2.png")}
                      alt="resumepage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      className="img-fluid w-100 h-100"
                      src={require("../Project Assets/Youtube project/3.png")}
                      alt="aboutmepage"
                    />
                  </div>
                </div>

                <a
                  class="carousel-control-prev"
                  href="#demo1"
                  data-slide="prev"
                >
                  <span class="carousel-control-prev-icon"></span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#demo1"
                  data-slide="next"
                >
                  <span class="carousel-control-next-icon"></span>
                </a>
              </div>
            </div>
            <div className="text-justify col-md-6 order-2 order-md-1">
              <h3 className="text-center underline mt-0">
                <u>Youtube API Project</u>
              </h3>
              <ul>
                <li>
                  React App by the component based development using functional
                  and classed based components
                </li>
                <li>
                  Video Search based on your Interest and text entered in
                  searchbar
                </li>
                <li>Used Axios to fetch data and display in userside</li>
                <li>Used Youtube API and its property</li>
                <li>Developed through Async Await Method for API call</li>
                <li>Developed using props passing method in react</li>
              </ul>
              <div className="text-center">
                <a
                  href="https://github.com/Darjiankit/Youtube-Project.git"
                  className="btn btn-outline-danger "
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="row pt-2 mt-2">
            <div className="col-md-6  ">
              <div id="demo2" class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators ">
                  <li
                    data-target="#demo2"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#demo2" data-slide-to="1"></li>
                  <li data-target="#demo2" data-slide-to="2"></li>
                  <li data-target="#demo2" data-slide-to="3"></li>
                  <li data-target="#demo2" data-slide-to="4"></li>
                  <li data-target="#demo2" data-slide-to="5"></li>
                  <li data-target="#demo2" data-slide-to="6"></li>
                  <li data-target="#demo2" data-slide-to="7"></li>
                </ul>

                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="img-fluid h-100 w-100"
                      src={require("../Project Assets/Project Add & Notification/1.png")}
                      alt="landingpage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="img-fluid w-100 h-100"
                      src={require("../Project Assets/Project Add & Notification/2.png")}
                      alt="resumepage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="img-fluid w-100 h-100"
                      src={require("../Project Assets/Project Add & Notification/3.png")}
                      alt="aboutmepage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      className="img-fluid w-100 h-100"
                      src={require("../Project Assets/Project Add & Notification/4.png")}
                      alt="aboutmepage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="img-fluid w-100 h-100"
                      src={require("../Project Assets/Project Add & Notification/5.png")}
                      alt="aboutmepage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="img-fluid w-100 h-100"
                      src={require("../Project Assets/Project Add & Notification/6.png")}
                      alt="aboutmepage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="img-fluid w-100 h-100"
                      src={require("../Project Assets/Project Add & Notification/7.png")}
                      alt="aboutmepage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="img-fluid w-100 h-100"
                      src={require("../Project Assets/Project Add & Notification/8.png")}
                      alt="aboutmepage"
                    />
                  </div>
                </div>

                <a
                  class="carousel-control-prev"
                  href="#demo2"
                  data-slide="prev"
                >
                  <span class="carousel-control-prev-icon"></span>
                </a>
                <a
                  className="carousel-control-next "
                  href="#demo2"
                  data-slide="next"
                >
                  <span className="carousel-control-next-icon "></span>
                </a>
              </div>
            </div>
            <div className="text-justify col-md-6 order-2 order-md-1">
              <h3 className="text-center underline mt-0">
                <u>Project Add & Notification</u>
              </h3>
              <ul>
                <li>
                  Project Plan – React Js , Redux , Redux-thunk , Firebase with
                  Auth , Materialize CSS
                </li>
                <li>
                  User can register and login also add their project in system
                  using Firebase Auth
                </li>
                <li>
                  Fetching of user data using Axios and display in client side
                </li>
                <li>
                  Displays notification when new project added and if new user
                  join the team using React Js,Redux-thunk
                </li>
                <li>
                  Displays Who and When project created with moment.js for dates
                </li>
              </ul>
              <div className="text-center">
                <a
                  href="https://github.com/Darjiankit/Project-Management.git"
                  className="btn btn-outline-danger "
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="row pt-2 mt-2">
            <div className="col-md-6  ">
              <div id="demo3" class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators ">
                  <li
                    data-target="#demo2"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#demo3" data-slide-to="1"></li>
                  <li data-target="#demo3" data-slide-to="2"></li>
                  <li data-target="#demo3" data-slide-to="3"></li>
                  <li data-target="#demo3" data-slide-to="4"></li>
                  <li data-target="#demo3" data-slide-to="5"></li>
                  <li data-target="#demo3" data-slide-to="6"></li>
                </ul>

                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="img-fluid h-100 w-100"
                      src={require("../Project Assets/WeatherApp/1.png")}
                      alt="landingpage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="img-fluid w-100 h-100"
                      src={require("../Project Assets/WeatherApp/2.png")}
                      alt="resumepage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="img-fluid w-100 h-100"
                      src={require("../Project Assets/WeatherApp/3.png")}
                      alt="aboutmepage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      className="img-fluid w-100 h-100"
                      src={require("../Project Assets/WeatherApp/4.png")}
                      alt="aboutmepage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="img-fluid w-100 h-100"
                      src={require("../Project Assets/WeatherApp/5.png")}
                      alt="aboutmepage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="img-fluid w-100 h-100"
                      src={require("../Project Assets/WeatherApp/6.png")}
                      alt="aboutmepage"
                    />
                  </div>
                </div>

                <a
                  class="carousel-control-prev"
                  href="#demo3"
                  data-slide="prev"
                >
                  <span class="carousel-control-prev-icon"></span>
                </a>
                <a
                  className="carousel-control-next "
                  href="#demo3"
                  data-slide="next"
                >
                  <span className="carousel-control-next-icon "></span>
                </a>
              </div>
            </div>
            <div className="text-justify col-md-6 order-2 order-md-1">
              <h3 className="text-center underline mt-0">
                <u>Wether App</u>
              </h3>
              <ul>
                <li>
                  React Js App by the component based development using HTML ,
                  CSS by passing props through components
                </li>
                <li>Image Search based on your Interest</li>
                <li>Used Unsplash API and its property</li>
                <li>Use Async Await Method for API call</li>
              </ul>
              <div className="text-center">
                <a
                  href="https://github.com/Darjiankit/Weather-API.git"
                  className="btn btn-outline-danger "
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="row pt-2 mt-2">
            <div className="col-md-6  ">
              <div id="demo4" class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators ">
                  <li
                    data-target="#demo4"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#demo4" data-slide-to="1"></li>
                  <li data-target="#demo4" data-slide-to="2"></li>
                  <li data-target="#demo4" data-slide-to="3"></li>
                  <li data-target="#demo4" data-slide-to="4"></li>
                  <li data-target="#demo4" data-slide-to="5"></li>
                  <li data-target="#demo4" data-slide-to="6"></li>
                  <li data-target="#demo4" data-slide-to="7 "></li>
                </ul>

                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="img-fluid h-100 w-100"
                      src={require("../Project Assets/Food Website Project/1.png")}
                      alt="landingpage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="img-fluid w-100 h-100"
                      src={require("../Project Assets/Food Website Project/2.png")}
                      alt="resumepage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="img-fluid w-100 h-100"
                      src={require("../Project Assets/Food Website Project/3.png")}
                      alt="aboutmepage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      className="img-fluid w-100 h-100"
                      src={require("../Project Assets/Food Website Project/4.png")}
                      alt="aboutmepage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="img-fluid w-100 h-100"
                      src={require("../Project Assets/Food Website Project/5.png")}
                      alt="aboutmepage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="img-fluid w-100 h-100"
                      src={require("../Project Assets/Food Website Project/6.png")}
                      alt="aboutmepage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="img-fluid w-100 h-100"
                      src={require("../Project Assets/Food Website Project/7.png")}
                      alt="aboutmepage"
                    />
                  </div>
                </div>

                <a
                  class="carousel-control-prev"
                  href="#demo4"
                  data-slide="prev"
                >
                  <span class="carousel-control-prev-icon"></span>
                </a>
                <a
                  className="carousel-control-next "
                  href="#demo4"
                  data-slide="next"
                >
                  <span className="carousel-control-next-icon "></span>
                </a>
              </div>
            </div>
            <div className="text-justify col-md-6 order-2 order-md-1">
              <h3 className="text-center underline mt-0">
                <u>Food Website Landing Page</u>
              </h3>
              <ul>
                <li>
                  Developed Landing page reated to food website using HTML, CSS,
                  JavaScript
                </li>
                <li>Used Font Awesome for icons</li>
                <li>
                  Used JavaScript for develop add to cart feature with propt
                  message
                </li>
                <li>Use Async Await Method for API call</li>
              </ul>
              <div className="text-center">
                <a
                  href="https://github.com/Darjiankit/Food-Website-Landing-Page.git"
                  className="btn btn-outline-danger "
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <hr />
          <div className="row pt-2 mt-2">
            <div className="col-md-6  " width="100%" height="100%">
              <div id="demo5" class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators ">
                  <li
                    data-target="#demo5"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#demo4" data-slide-to="1"></li>
                  <li data-target="#demo4" data-slide-to="2"></li>
                  <li data-target="#demo4" data-slide-to="3"></li>
                  <li data-target="#demo4" data-slide-to="4"></li>
                  <li data-target="#demo4" data-slide-to="5"></li>
                  <li data-target="#demo4" data-slide-to="6"></li>
                </ul>

                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="img-fluid h-100 w-100"
                      src={require("../Project Assets/Unsplash Clone/1.png")}
                      alt="landingpage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="img-fluid w-100 h-100"
                      src={require("../Project Assets/Unsplash Clone/2.png")}
                      alt="resumepage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="img-fluid w-100 h-100"
                      src={require("../Project Assets/Unsplash Clone/3.png")}
                      alt="aboutmepage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      className="img-fluid w-100 h-100"
                      src={require("../Project Assets/Unsplash Clone/4.png")}
                      alt="aboutmepage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="img-fluid w-100 h-100"
                      src={require("../Project Assets/Unsplash Clone/5.png")}
                      alt="aboutmepage"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="img-fluid w-100 h-100"
                      src={require("../Project Assets/Unsplash Clone/6.png")}
                      alt="aboutmepage"
                    />
                  </div>
                </div>

                <a
                  class="carousel-control-prev"
                  href="#demo5"
                  data-slide="prev"
                >
                  <span class="carousel-control-prev-icon"></span>
                </a>
                <a
                  className="carousel-control-next "
                  href="#demo5"
                  data-slide="next"
                >
                  <span className="carousel-control-next-icon "></span>
                </a>
              </div>
            </div>
            <div className="text-justify col-md-6 order-2 order-md-1">
              <h3 className="text-center underline mt-0">
                <u>Unplash Clone</u>
              </h3>
              <ul>
                <li>
                  React Js App by the component based development using
                  functional and classed based components
                </li>
                <li>HTML, CSS , Bootstrap</li>
                <li>Image Search based on your Interest</li>
                <li>Used Unsplash API and its property</li>
                <li>Use Async Await Method for API call</li>
              </ul>
              <div className="text-center">
                <a
                  href="https://github.com/Darjiankit/Unsplash-Clone-Project"
                  className="btn btn-outline-danger "
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="row pt-2 mt-2">
            <div className="col-md-6  ">
              <video width="100%" height="100%" autoPlay>
                <source
                  src={require("../Project Assets/Socket Project/Socket Project .mov")}
                  type="video/mp4"
                />
                > type="video/ogg" />> Your browser does not support the video
                tag.
              </video>
            </div>
            <div className="text-justify col-md-6 order-2 order-md-1">
              <h3 className="text-center underline mt-0">
                <u>Web Socket Project</u>
              </h3>
              <ul>
                <li>
                  Web Socket Project using Node js, Express & Socket.io pakage
                </li>
                <li>
                  Multiple user can communicate using this web app with
                  environment setup
                </li>
                <li>Real time user typing notification</li>
                <li>We can send message to multiple user</li>
              </ul>
              <div className="text-center">
                <a
                  href="https://github.com/Darjiankit/Chat-App.git"
                  className="btn btn-outline-danger "
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="row pt-2 mt-4 bg-danger">
            <div className="social-links">
              <h4 className="align-self-center text-white font-weight-bolder">
                For more Projects Visit Github :
              </h4>
              <a
                href="https://github.com/Darjiankit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <section className="projects-grid">
          <Grid>
            <Cell col={12}>
              <div className="content-grid">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Project;
