import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../img/me.jpg";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            Who Am <span className="teal"> I? </span>
                        </h1>
                        <p className="home-about-body">
                            I am a recent Computer Science graduate from the University of Auckland.
                            <br />
                            <br />I'm also a Sound Engineer (BCommMus) and Musician.
                            <br />
                            <br />
                            I Have experience in both backend and frontend web development, as well as game development in Unity.
                            <br />
                            <br />
                            Check out the about page to see what tools and technologies I'm familiar with, and the projects page to see some of my work.
                            <br />
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>Connect with me</h1>
                        <p>
                            I'm available on these <span className="teal">platforms </span>
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/tl5038"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/tl5038/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="mailto:tom@tomlawrie.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <FaEnvelope />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;