import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import greenwichpoint from "../assets/greenwichpoint.jpg";
import gile from "../assets/gile.jpg";
import dartmouth from "../assets/dartmouth.jpg";
import skip from "../assets/skip.jpg";
import vermont from "../assets/vermont.jpg";
import skiprunning from "../assets/skiprunning.jpg";
import bigben from "../assets/bigben.jpg";
import london from "../assets/london.jpg";
import me from "../assets/me.png";

const Contact = () => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col md={8} className="animate__animated animate__fadeIn">
                        <p className="mt-4 bigtext">
                            <b>about me.</b>
                        </p>
                        <p className="fs-3">
                            outside of school, I enjoy golf, music, photography,
                            and fly fishing.
                        </p>
                    </Col>
                </Row>

                <Row className="mt-5 justify-content-center">
                    <Col
                        className="animate__animated animate__slideInLeft"
                        lg={5}
                        xs={10}
                    >
                        <img src={me} className="img-fluid" alt="" />
                    </Col>
                    <Col
                        lg={5}
                        xs={10}
                        className="text-center bg-light animate__animated animate__slideInRight"
                    >
                        <p className="mt-4">
                            I am a '24 at Dartmouth College from Greenwich, CT.
                            At Dartmouth, I'm involved with Dartmouth Club Golf
                            Team, the Dartmouth Society of Photographers
                            (treasurer and website manager), and the Dartmouth
                            Investment and Philanthropy Program. Outside of
                            school, I am a software engineer at Team Legislate,
                            where I help build software to enhance local
                            political engagement.
                        </p>
                        <p className="mt-4">
                            After taking COSC 1 at Dartmouth, I quickly became
                            fascinated by how computers can be used to create
                            impactful software. In the future, I hope to
                            continue engineering software that makes a
                            difference.
                        </p>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col className="text-center animate__animated animate__fadeIn">
                        <h1>photos.</h1>
                    </Col>
                </Row>
                <Row className="mt-5 mb-5 justify-content-center">
                    <Col lg={8}>
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={greenwichpoint}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={bigben}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={gile}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={dartmouth}
                                    alt="Fourth slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={skip}
                                    alt="Fifth slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={vermont}
                                    alt="Sixth slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={skiprunning}
                                    alt="Sevent slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={london}
                                    alt="Eighth slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default Contact;
