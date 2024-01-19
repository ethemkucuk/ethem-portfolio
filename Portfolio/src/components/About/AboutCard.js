import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">İbrahim Ethem Küçük </span>
            from <span className="purple"> Adıyaman, Türkiye.</span>
            <br />
            I am currently unemployed as a junior developer .
            <br />
            I am studying in the Department of Computer and Instructional Technologies Education at Yıldız Technical University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Shoot Video
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Fate guides the willing, but it guides the unwilling
drags."{" "}
          </p>
          <footer className="blockquote-footer">Seneca</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
