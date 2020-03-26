import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import profilepic from "../0.jpeg";

class AboutMe extends Component {
  render() {
    return (
      <div className="contact-body  border-left ">
        <h3
          className="text-center "
          style={{
            width: "22%",
            margin: "auto",
            padding: "10px"
          }}
        >
          About Me
        </h3>

        <Grid className="aboutme-grid mt-3 pt-3">
          <Cell col={4}>
            <div className="text-center profilepic ">
              <img
                src={profilepic}
                height="300px"
                alt="avtar"
                className="rounded-circle border border-dark  shadow-lg mb-5 mt-5"
              />
            </div>
          </Cell>
          <Cell className="aboutlist" col={8}>
            <ul className="list-group font-weight-bold text-justify ">
              <h6>
                <li>
                  2+ years of experience in Front End Web Development with
                  Degree in Computer Science with more than two and bring
                  expertise in software Development with organizing information
                  of website
                </li>
                <br />
                <li>
                  Experience with Design patterns, Development and maintenance
                  of enterprise level data ,better understanding in design the
                  appearance and able to develop single-page web application
                </li>
                <br />
                <li>
                  Attention to details with proficient in data structure,
                  problem-solving and debugging, UX/UI design, Agile Scrum
                  delivery process, Web service design , Website creation and
                  maintenance
                </li>
                <br />
                <li>
                  Comfortable working as individual as well as team to
                  collaborate on finding the most effective and efficient
                  solution as well as ability to provide creative
                  problem-solving for clients
                </li>
                <br />
                <li>
                  Autonomous, very dynamic, capable of decision making and high
                  capacity to learn, work under pressure to meet tight deadlines
                  , good team player as reliable and responsible
                </li>
                <br />
                <li>
                  Basic understanding of server-side CSS pre-processing
                  platforms, such as LESS and SASS
                </li>
              </h6>
            </ul>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default AboutMe;
