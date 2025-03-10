import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";


import ipAddress from "../../assets/Projects/ip-address-tracker.png";
import CountdownTimer from "../../assets/Projects/Countdown-timer.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ipAddress}
              isBlog={false}
              title="IP Address Tracker"
              description="IP Address Tracker is Web applicaton that Track Location Using IP and show the ISP and City name with MAP Attched below that show location in MAP of IP."
              link="https://github.com/Aakash962002/ip-tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CountdownTimer}
              isBlog={false}
              title="Countdown Timer"
              description="Countdown timer is use to set timer for opnanig of shop, mall etc. that will show Day,Houres,Minites,Secound. "
              link="https://github.com/Aakash962002/countdown.github.io"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
