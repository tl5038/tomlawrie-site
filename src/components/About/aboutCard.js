import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Welcome. I am <span className="teal">Tom Lawrie </span>
                        from <span className="teal"> Auckland, New Zealand.</span>
                        <br />I am a recent Computer Science graduate from the University of Auckland, as well as a Sound Engineer (BCommMus) and Musician.
                        <br />I'm passionate about science and technology and I am the co-founder of <a href="https://thegeekly.net">The Geekly</a>, a magazine exploring the universe through the lens of science.
                        <br /> I've participated in various Hackathons such as:

                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> SISHACK (Stonehill International School)
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> NeevHacks (@ Neev Academy)
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> TISBHacks
                        </li>
                    </ul>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;