import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./projectCard";
import Particle from "../particle";
import Concerts from "../../Assets/Projects/concerts-page.png";
import COMP399 from "../../Assets/Projects/COMP399.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="teal">Projects</strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few things I've worked on recently, both in and out of university.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Concerts}
                            isBlog={false}
                            title="Concert Booking Service"
                            description="The aim of this project was to build a web service for booking seats at a concert. The service was built in Java, and was designed with a mock 120 seat venue. The venue's seats were classified into three price bands, along with several other requirements. A complete description of the project can be found in the project's README file."
                            ghLink="https://github.com/tl5038/project-concert-webapp"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={COMP399}
                            isBlog={false}
                            title="Website for Women in CS at UOA"
                            description="My Capstone project at UOA, this website was built to encourage female enrolment in the school of Computer Science. It was built in Python using the Django framework, and features a news, events, contact, image gallery, and resources page. The website was deployed on AWS during the semester. More information about the project can be found in the project's README file."
                            ghLink="https://github.com/Dhruvsr/Sched"
                        />
                    </Col>

                </Row>
            </Container>
        </Container>
    );
}

export default Projects;