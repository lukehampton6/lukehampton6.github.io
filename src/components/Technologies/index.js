import {Container, Col, Row} from "react-bootstrap";
import "devicon/devicon.min.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Technologies() {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

    return (
        <div className="primary" id="technologies">
        <Container className="margin-bottom">
            <h1 data-aos="fade-down" className="light-text header center">Technologies</h1>
            <Row className="icon-container">
                <Col data-aos="fade-right" className="icon-col">
                <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt=""/>
                </Col>
                <Col data-aos="fade-right" className="icon-col">
                <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt=""/>
                </Col>
            
                <Col data-aos="fade-left" className="icon-col">
                <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt=""/>
                </Col>
                <Col data-aos="fade-left" className="icon-col">
                <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt=""/>
                </Col>
            </Row>
            <Row className="icon-container">
                <Col data-aos="fade-right" className="icon-col">
                <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt=""/>
                </Col>
                <Col data-aos="fade-right" className="icon-col">
                <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt=""/>
                </Col>
            
                <Col data-aos="fade-left" className="icon-col">
                <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt=""/>
                </Col>
                <Col data-aos="fade-left" className="icon-col">
                <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt=""/>
                </Col>
            </Row>
        </Container>
        <div className="spacer dark-light"></div>
        </div>
    )
}

export default Technologies;