import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../particle";
import Home2 from "./home2";
import Type from "./type";

function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Welcome.{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                  👋
                </span>
                            </h1>

                            <h1 className="heading-name">
                                I am
                                <strong className="main-name"> Tom Lawrie</strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: "left" }}>
                                <Type />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Home2 />
        </section>
    );
}

export default Home;