import React, { Component } from "react";
import { Grid, Cell, ListItem, ListItemContent, List } from "react-mdl";
import profilepic from "../0.jpeg";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid ">
          <Cell
            col={6}
            style={{ borderRight: "6px solid  #9b5b50", marginBottom: "300px" }}
          >
            <h3
              style={{
                width: "75%",
                margin: "auto",
                padding: "10px"
              }}
            >
              Ankit Darji
            </h3>
            <img src={profilepic} alt="avtar" className="avtarimage mt-4" />
            <p
              className="text-justify mt-3 "
              style={{
                width: "75%",
                margin: "auto",
                paddingTop: "1em"
              }}
            >
              Self-motivated 2+ years of practical experienced IT professional
              looking for the opportunity as a Software Developer Position with
              good knowledge and proficiency in JavaScript, HTML, CSS, and
              Mobile responsive web and App development, as well as strong
              skills and ability in writing clean and efficient code.
            </p>
          </Cell>
          <Cell col={6} className="contact-grid-cell-2">
            <h3
              style={{
                width: "50%",
                margin: "auto",
                padding: "10px"
              }}
            >
              Contact
            </h3>

            <List className="contact-list">
              <ListItem>
                <ListItemContent
                  style={{
                    fontSize: "25px",
                    fontFamily: "Roboto"
                  }}
                  className="d-flex align-self-start"
                >
                  <i
                    className="fa fa-phone-square"
                    aria-hidden="true"
                    style={{ color: "#9b5b50" }}
                  />
                  +1(647)-916-2327
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  style={{ fontSize: "25px", fontFamily: "Roboto" }}
                >
                  <i
                    className="fa fa-envelope"
                    aria-hidden="true"
                    style={{ color: "#9b5b50" }}
                  />
                  ankitdarji7813@gmail.com
                </ListItemContent>
              </ListItem>
            </List>
            <div className="social-links  ">
              <a
                href="https://www.linkedin.com/in/ankit-darji/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-linkedin-square"
                  aria-hidden="true"
                  style={{ color: "#9b5b50" }}
                />
              </a>
              <a
                href="https://github.com/Darjiankit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-github-square"
                  aria-hidden="true"
                  style={{ color: "#9b5b50" }}
                />
              </a>
              <a
                href="https://twitter.com/ankitdarji7813"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-twitter-square"
                  aria-hidden="true"
                  style={{ color: "#9b5b50" }}
                />
              </a>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
