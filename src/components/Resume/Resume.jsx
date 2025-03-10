import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Resumecontent from "./ResumeContent";
import pdf from "../../assets/aakash.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  


 

  return (
    <Container fluid className="resume-section">
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Bachelor of Computer Application [Sardar Patel College, Ranchi] "
              date="2020 - Present"
              content="CGPA: 9.50 Till 4th Sem"
            />
            <Resumecontent
              title="12TH BOARD [St.Marry's Hight School,Nadiad]"
              date="2018 - 2019"
              content={["Precentage: 83%"]}
            />
            <Resumecontent
              title="10TH BOARD [ST Mary's School,Nadiad] "
              date="2016 - 2017"
              content={["Precentage: 60%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                
                "Current rank in HackerRank  296",
               
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
