import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import profilepic from "../0.jpeg";
import UdemyIcon from "../UdemyIcon.png";

import Skills from "../component/skills";
class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="resume-grid p-0 ">
          <Cell className="resume-left-col p-3 " col={4}>
            <div className="text-center mt-5 ">
              <img
                src={profilepic}
                alt="avtar"
                className="avtarimage border border-white shadow-lg mb-5"
              />
            </div>
            <h2 className="text-center mt-0">Ankit Darji</h2>

            <hr className=" my-1" />
            <p style={{ textAlign: "justify" }}>
              Self-motivated 4+ years of practical experienced IT professional
              looking for the opportunity as a Software Developer Position with
              good knowledge and proficiency in JavaScript, HTML, CSS, and
              Mobile responsive web and App development, as well as strong
              skills and ability in writing clean and efficient code.
            </p>
            <hr className=" my-1" />
            <div>
              <h5>
                <i className="fas fa-map-marker-alt"></i> Address
              </h5>
              <p>Unit-101,2301 Victoria Park Avenue,Toronto,ON,M1R1W5</p>
              <h5>
                <i className="fas fa-phone-square"></i> Phone
              </h5>
              <p>+1 (647)-916-2327</p>
              <h5>
                <i className="fas fa-at"></i> E-Mail
              </h5>
              <p>ankitdarji7813@gmail.com</p>
              <h5>
                <i className="fab fa-linkedin"></i> LinkedIn
              </h5>
              <p>https://www.linkedin.com/in/ankit-darji/</p>
            </div>

            <hr className=" my-1" />
            <div>
              <h4 className="p-0 m-0 text-center">Skills</h4>

              <Skills skills="html" progress={100} />
              <Skills skills="css" progress={100} />
              <Skills skills="javascript" progress={90} />
              <Skills skills="jQuery" progress={90} />
              <Skills skills="node.js" progress={70} />
              <Skills skills="Express.js" progress={70} />
              <Skills skills="React Js" progress={80} />
              <Skills skills="React-Redux" progress={75} />
              <Skills skills="Redux-thunk" progress={70} />
              <Skills skills="Google Chart" progress={90} />
              <Skills skills="Axios" progress={70} />
              <Skills skills="MongoDB" progress={60} />
              <Skills skills="MySql" progress={95} />
              <Skills skills="Php" progress={95} />
              <Skills skills="Rest API" progress={80} />
              <Skills skills="Materialize CSS" progress={95} />
              <Skills skills="SAAS" progress={70} />
            </div>
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h3 className=" text-center my-0 p-2">
              <i className="fas fa-project-diagram fa-xs"></i> Project
              Experience
            </h3>

            <table className="table table-borderless text-justify">
              <thead>
                <tr>
                  <th
                    scope="colspan-2"
                    className="d-flex align-self-start pr-0"
                  >
                    01/2019 - 04/2019
                  </th>
                  <th scope="col">
                    <p className="font-weight-bold mb-0 ml-0">
                      Beacon blast Website (Admin Panel) Bootstrap, HTML5, CSS3,
                      JavaScript , PHP , Json
                    </p>
                    <p className="font-weight-bold mb-0 ml-0">
                      using (Web App) HTML5 , CSS3 , Bootstrap , Php , Json
                    </p>

                    <ul className="pl-0 mb-0 ml-3">
                      <li>
                        Designed responsive Admin Panel for beacon blast project
                        of the company
                      </li>
                      <li>
                        Created Webservices in Php for getting data on the
                        dashboard of admin panel
                      </li>
                      <li>
                        Fetched data in website through web service using jSON
                        Fetch and also able for cross browser
                        <br /> compatibility
                      </li>
                      <li>
                        Increased ability to add more items and also register
                        new patron's data with history
                      </li>
                      <li>
                        Created Website with SSL and CTS (Content Type Security
                        from Cross-Site Scripting attack
                      </li>
                      <li>
                        The Customer was happy with security and designing work
                        and more interested to work with <br />
                        this company
                      </li>
                      <li>
                        Design different dashboard for different users as per
                        their request
                      </li>
                    </ul>
                  </th>
                </tr>
              </thead>
            </table>

            <h3 className="text-center my-0 p-2">
              <i className="fas fa-project-diagram fa-xs"></i> Other Project
              Experience
            </h3>

            <table
              className="table table-borderless text-justify"
              style={{ marginLeft: "15px" }}
            >
              <thead>
                <tr>
                  <th className="d-flex align-self-start mr-5">05/2019</th>
                  <th scope="col">
                    Project Management (React Js , Redux , Firebase with Auth ,
                    Materialize CSS)
                    <p className="mb-0 font-weight-bold ">
                      Project Link :
                      <a href="https://ankit-project-management.web.app/">
                        ankit-project-management.web.app
                      </a>
                    </p>
                    <ul className="pl-3 mb-0 ">
                      <li>
                        User can register and login also add their project in
                        system using Firebase Auth
                      </li>
                      <li>
                        Displays notification when new project added and if new
                        user join the team using React Js,Redux
                      </li>
                      <li>
                        Displays Who and When project created with moment.js for
                        dates
                      </li>
                    </ul>
                  </th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th
                    scope="colspan-2"
                    className="d-flex align-self-start text-justify"
                  >
                    02/2018
                  </th>
                  <th scope="col">
                    Lambton Transit : College Transit Project of web application
                    <p className="font-weight-bold">
                      using (Web App) HTML5 , CSS3 , Bootstrap , Php , Json
                    </p>
                    <ul className="pl-0 mb-0 ml-3">
                      <li>Displayed different timing of different routes</li>
                      <li>Detected arrival & next bus using JSON</li>
                      <li>
                        Ability to send SMS to the student about update using
                        Twilio
                      </li>
                      <li>
                        CRUD operation for bus schedule fetch and display as
                        well as store
                      </li>
                      <li>
                        Responsive website which runs in mobile phone perfectly
                      </li>
                    </ul>
                  </th>
                </tr>
              </thead>
            </table>

            <h3 className=" text-center my-0 p-2">
              <i className="fas fa-briefcase"></i> Professional Experience
            </h3>
            <table className="table table-borderless text-justify">
              <thead>
                <tr>
                  <th
                    scope="colspan-2"
                    className="d-flex align-self-start pr-0"
                  >
                  09/2020 – Present
                  </th>
                  <th scope="col">
                    <h5 className="font-weight-bold m-0 ml-1">
                    Field Service Technician 
                    </h5>

                    <p className="font-weight-bold mb-0 ml-1">
                    NCR Corporation, Toronto
                    </p>
                    <ul className="pl-0 mb-0 ml-4">
                      <li>
                      Service electromechanical equipment like ATMs and self-checkout systems within an assigned <br />territory—with the goal of keeping our customers completely assured and satisfied.
                      </li>
                      <li>
                      Oversee hardware maintenance, installation, network management, multi-vendor maintenance,and <br />software support
                      </li>
                      <li>Build great working relationships among colleagues and customers based on our customer Service Level <br />Agreements (SLAs). When issues come up, your job is to respond them by either handling them, <br /> or by pulling in the proper associate, team member, or territory manager who can
                       
                        
                      </li>
                      <li>
                      Perform maintenance repair and system overhauls as a matter of routine (like modularswaps and<br />  unit replacements). You’ll surely always be on the lookout for preventative measures you can take <br /> to correct any and all technical problems before they happen
                        
                      </li>
                     
                    </ul>
                  </th>
                </tr>
              </thead>
            </table>
            <table className="table table-borderless text-justify">
              <thead>
                <tr>
                  <th
                    scope="colspan-2"
                    className="d-flex align-self-start pr-0"
                  >
                    01/2019 - 04/2019
                  </th>
                  <th scope="col">
                    <h5 className="font-weight-bold m-0 ml-1">
                      Placement as Software Developer
                    </h5>

                    <p className="font-weight-bold mb-0 ml-1">
                      ScanIq ,Toronto
                    </p>
                    <ul className="pl-0 mb-0 ml-4">
                      <li>
                        Developed Admin Panel of Website using Bootstrap, HTML,
                        CSS, JavaScript, Json
                      </li>
                      <li>
                        Developed Mobile App in React Native Cross Platform for
                        Library management system with scan facility
                      </li>
                      <li>
                        Developed website for client using the Software
                        Development Lifecycle (SDLC), <br />
                        software development methodologies, core web principals
                        (HTTP, DOM, SSL, Web Severs)
                        <br /> with verification
                      </li>
                      <li>
                        Contributed in testing process including unit,
                        integration and function testing
                      </li>
                      <li>
                        Participated in complete Software Development Life Cycle
                        (SDLC) for proper analysis
                      </li>
                      <li>
                        Provided satisfied work as a Software Developer with
                        good employer as well as client <br />
                        satisfaction with good User Experience
                      </li>
                      <li>
                        Utilized cutting-edge JavaScript and HTML 5 techniques,
                        frameworks, and libraries
                      </li>
                    </ul>
                  </th>
                </tr>
              </thead>
            </table>
            
            <table className="table table-borderless text-justify">
              <thead>
                <tr>
                  <th
                    scope="colspan-2"
                    className="d-flex align-self-start pr-4 mr-4"
                  >
                    2015 - 2017
                  </th>
                  <th scope="col">
                    <h5 className="font-weight-bold m-0 ml-1">
                      Front End Web Developer
                    </h5>

                    <p className="font-weight-bold mb-0 ml-1">
                      Genextwebs Technologies , India
                    </p>
                    <div>
                      <ul className="pl-0 mb-0 ml-4">
                        <li>
                          Worked as a Web Developer and participating in coding
                          , testing , debugging new applications an website
                          <br />
                          with the team of designers, <br />
                          developer and content creators
                        </li>
                        <li>
                          Developed UI layout and front-end programming for a
                          web application that matched requirements
                          <br /> of the clients
                        </li>
                        <li>
                          Designed the front end application , user interface
                          for civil engineering institute using HTML5, CSS3,
                          <br /> JavaScript , jQuery ,Bootstrap and Ajax
                        </li>
                        <li>
                          In Website user able to include members directory,
                          events, brochures download etc.
                        </li>
                        <li>
                          Integrated forum & PHP List & both are synchronized
                          with registered members on website automatically
                        </li>
                        <li>
                          Created modular, responsive templates using CSS
                          techniques and JavaScript libraries
                        </li>
                        <li>Performed bug fixes and code reviews</li>
                      </ul>
                    </div>
                  </th>
                </tr>
              </thead>
            </table>

            <h3 className="text-center my-0 p-2">
              <i className="fas fa-graduation-cap"></i> Education
            </h3>

            <table className="table table-borderless ">
              <thead>
                <tr>
                  <th
                    scope="colspan-2"
                    className="d-flex align-self-start pr-3 mr-0"
                  >
                    2017 - 2019
                  </th>
                  <th scope="col">
                    <h5 className="font-weight-bold m-0 p-0 ml-2">
                      Post Graduate Certificate in Mobile Application Design &
                      <br />
                      Development
                    </h5>

                    <p className="font-weight-bold mb-0 ml-2">
                      Lambton college Toronto, ON
                    </p>
                  </th>
                </tr>
                <tr>
                  <th
                    scope="colspan-2"
                    className="d-flex align-self-start pr-3 mr-0"
                  >
                    2012-2014
                  </th>
                  <th scope="col">
                    <h5 className="font-weight-bold m-0 p-0 ml-2">
                      Master of Engineering in Computer Science
                    </h5>

                    <p className="font-weight-bold mb-0 ml-2">
                      Parul Institute of Technology, India
                    </p>
                  </th>
                </tr>
              </thead>
            </table>
            <h3 className="text-center my-0 p-2">
              {" "}
              <i className="fas fa-certificate"></i> Certification
            </h3>
            <table className="table table-borderless ">
              <thead>
                <tr>
                  <th style={{ width: "30px" }}>
                    <img
                      src={UdemyIcon}
                      className="rounded float-left "
                      alt="Responsive "
                      style={{
                        width: "90px",
                        height: "80px",
                        paddingTop: "0px"
                      }}
                    />
                  </th>
                  <th scope="col">
                    <h5 className="d-flex align-self-start font-weight-bold  my-0 ml-4">
                      Udemy Certified Web Developer
                    </h5>

                    <p className=" d-flex align-self-start font-weight-bold mb-0 ml-4">
                      Issued April 2019 : No Expiration Date
                    </p>
                    <p className=" d-flex align-self-start font-weight-bold mb-0 ml-4">
                      Credential ID : UC-U9L5XSQ8
                    </p>
                  </th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th style={{ width: "30px" }}>
                    <img
                      src={UdemyIcon}
                      className="rounded float-left "
                      alt="Responsive "
                      style={{
                        width: "90px",
                        height: "80px",
                        paddingTop: "0px"
                      }}
                    />
                  </th>
                  <th scope="col">
                    <h5 className="d-flex align-self-start font-weight-bold  my-0 ml-4">
                      Udemy Certificate of Git Started With GituHub
                    </h5>

                    <p className=" d-flex align-self-start font-weight-bold mb-0 ml-4">
                      Issued Jan 2019 : No Expiration Date
                    </p>
                    <p className=" d-flex align-self-start font-weight-bold mb-0 ml-4">
                      Credential ID : UC-JN0V3V8N
                    </p>
                  </th>
                </tr>
              </thead>
            </table>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
