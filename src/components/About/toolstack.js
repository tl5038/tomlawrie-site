import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiJetbrains, SiLatex,
    SiLinux, SiMarkdown,
    SiVisualstudiocode,
} from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiLinux />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJetbrains />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiLatex />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMarkdown />
            </Col>
        </Row>
    );
}

export default Toolstack;