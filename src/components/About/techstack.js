import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiJavascript1,
    DiReact,
    DiTerminal,
    DiPython,
    DiGit,
    DiCss3,
} from "react-icons/di";
import {
    SiFirebase,
    SiHtml5,
    SiTensorflow,
    SiNpm,
    SiArduino,
    SiRaspberrypi, SiAbletonlive, SiCsharp, SiJava
} from "react-icons/si";


function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiCss3/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiArduino />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiTerminal />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFirebase />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNpm />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRaspberrypi />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTensorflow />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAbletonlive />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiCsharp />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJava />
            </Col>
        </Row>
    );
}

export default Techstack;