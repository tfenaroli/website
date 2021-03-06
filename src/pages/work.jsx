import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import Project from "../components/project";
import Classwork from "../components/classwork";
import balloonpopper from "../assets/balloonpopper.png";
import dalichat from "../assets/dalichat.png";
import notes from "../assets/notes.png";
import website from "../assets/website.png";
import illuminate from "../assets/illuminate.png";
import animation from "../assets/animation.png";
import vitalize from "../assets/vitalize.png";
import legislate from "../assets/legislate.png";
import thomas from "../assets/thomas.jpg";
import "../App.css";

const Work = () => {
    return (
        <React.Fragment>
            <Container>
                <Row className="mt-4">
                    <Col md={8} className="animate__animated animate__fadeIn">
                        <p className="bigtext">
                            <b>student and software engineer.</b>
                        </p>
                        <p className="fs-3">
                            currently studying Computer Science Modified with
                            Economics{" "}
                            <span className="dartmouth">
                                @Dartmouth College
                            </span>{" "}
                            and developing software{" "}
                            <span className="teamlegislate">
                                @Team Legislate
                            </span>
                            .
                        </p>
                    </Col>
                </Row>

                <Row className="mt-5 justify-content-center">
                    <Col
                        className="animate__animated animate__fadeIn"
                        lg={5}
                        xs={10}
                    >
                        <Image
                            src={thomas}
                            className="img-fluid"
                            alt="thomasimg"
                        />
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col className="text-center">
                        <p className="fs-3">who I've worked with.</p>
                    </Col>
                </Row>
                <Row className="mt-4 d-flex justify-content-center">
                    <Col xs={6} md={3} className="">
                        <a
                            href="https://vitalizecare.co/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                className="company"
                                fluid="true"
                                src={vitalize}
                            />
                        </a>
                    </Col>
                    <Col xs={6} md={3} className="">
                        <a
                            href="https://www.teamlegislate.org/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                className="company"
                                fluid="true"
                                src={legislate}
                            />
                        </a>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col className="text-center animate__animated animate__fadeIn">
                        <h1>projects.</h1>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-between">
                    <Project
                        title="DALIChat"
                        caption="Developed a responsive multi-page social
                                    media web application with user
                                    authentication, posting, and commenting
                                    features."
                        link="https://github.com/tfenaroli/dalichat"
                        tools="HTML, CSS,
                                    JavaScript, ReactJS, React Router,
                                    React-Bootstrap, and Firebase"
                        image={dalichat}
                    />
                    <Project
                        title="Notes App"
                        caption="Developed a mobile notes application with
                                    posting, editing, and deleting features.
                                   "
                        link="https://github.com/tfenaroli/notes_app"
                        tools="JavaScript, ReactJS, React
                                    Native, and React Navigation."
                        image={notes}
                    />
                    <Project
                        title="Dartmouth Illuminate"
                        caption="Created a responsive website for the
                                    Dartmouth Society of Photographers."
                        link="https://github.com/tfenaroli/dartmouthphotographers.com"
                        tools="HTML, CSS"
                        image={illuminate}
                    />
                    <Project
                        title="Blender Python Scripting"
                        caption="Used Python scripting in Blender to animate
                                    a golf ball along CSV file coordinates for
                                    3-d rendering."
                        link="https://gist.github.com/tfenaroli/0b08f9dcae8d40c567a6fecb30933d81"
                        tools="Python, MatLab"
                        image={animation}
                    />
                    <Project
                        title="Balloon Popper"
                        caption="Used Pygame library to create bird, kite,
                                    and balloon game."
                        link="https://github.com/tfenaroli/Balloon-Popper"
                        tools="Python, Pygame"
                        image={balloonpopper}
                    />

                    <Project
                        title="Personal Website"
                        caption="This website!"
                        link="https://github.com/tfenaroli/personal_website"
                        tools="HTML, CSS,
                                    JavaScript, ReactJS, React Router,
                                    React-Bootstrap."
                        image={website}
                    />
                </Row>
                <Row className="mt-5">
                    <Col className="text-center animate__animated animate__fadeIn">
                        <h1>classwork.</h1>
                    </Col>
                </Row>
                <Row>
                    <Classwork
                        title="Tiny Search Engine"
                        caption="Created a crawler, indexer, and querier as
                                    components of a tiny search engine."
                        link="https://github.com/tfenaroli/dartmouth-cs50-tse/tree/submit6"
                    />
                    <Classwork
                        title="Huffman Encoding"
                        caption="Used Huffman encoding to compress and
                                    decompress text files."
                        link="https://github.com/tfenaroli/dartmouth-cs10/tree/main/PS3"
                    />
                    <Classwork
                        title="Viterbi Algorithm"
                        caption="Used Viterbi Algorithm to train and then tag
                                    parts of speech of given text file."
                        link="https://github.com/tfenaroli/dartmouth-cs10/tree/main/PS5"
                    />
                    <Classwork
                        title="Data Structures"
                        caption="Created set, counters, and hashtable data
                                    structures."
                        link="https://github.com/tfenaroli/dartmouth-cs50-lab3/tree/submit3"
                    />
                    <Classwork
                        title="QuadTree Collision Detection"
                        caption="Used QuadTrees to determine if two randomly
                                    moving quantities had collided."
                        link="https://github.com/tfenaroli/dartmouth-cs10/tree/main/PS2"
                    />
                    <Classwork
                        title="Server and Client Collaborative Editor"
                        caption="Created a collaborative graphical editor
                                    using server/client communication."
                        link="https://github.com/tfenaroli/dartmouth-cs10/tree/main/PS6"
                    />
                    <Classwork
                        title="Bash Pipelining"
                        caption="Used a Bash pipeline to sort and organize
                                    United States COVID-19 vaccination data."
                        link="https://github.com/tfenaroli/dartmouth-cs50-lab1/tree/submit1"
                    />

                    <Classwork
                        title="Breadth First Search Graph Traversal"
                        caption="Used BFS to find degrees of separation
                                    between any two actors."
                        link="https://github.com/tfenaroli/dartmouth-cs10/tree/main/PS4"
                    />
                    <Classwork
                        title="Breadth-First Search Path Finding"
                        caption="Used BFS to find shortest path between two
                                    spots on Dartmouth's campus."
                        link="https://github.com/tfenaroli/dartmouth-cs1/tree/main/Lab%204"
                    />

                    <Classwork
                        title="Breadth-First Search Color Matching"
                        caption="Used BFS to allow for web camera painting."
                        link="https://github.com/tfenaroli/dartmouth-cs10/tree/main/PS1"
                    />
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default Work;
