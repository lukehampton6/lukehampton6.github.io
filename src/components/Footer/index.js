import { Container, Col, Row } from "react-bootstrap";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Footer() {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

  return (
    <div className="primary blob dark-hollow-blob" id="resume-and-contact">
        <Container className="resume-and-contact">
            <Row className="footer-row">
            <Col data-aos="fade-right">
            <h1 className="header highlight-text align-right">Resume</h1>
            </Col>

            <Col data-aos="fade-left">
            <p className="light-text header-content"><a className="link" href="/" target="_blank" rel="noreferrer">Heres a link to my resume</a></p>
            <p className="light-text header-content"><a className="link" href="https://github.com/lukehampton6" target="_blank" rel="noreferrer">And my Github</a></p>
            </Col>
            </Row>

            <Row className="footer-row">
            <Col data-aos="fade-right" className="align-right">
            <p className="light-text header-content">Email: <a className="link" href="mailto:lukehampton6@gmail.com" >lukehampton6@gmail.com</a></p>
            <p className="light-text header-content">Phone Number: (386)-444-1294</p>
            <p className="light-text header-content"><a className="link" href="https://www.linkedin.com/in/luke-hampton-6098371ab/" target="_blank" rel="noreferrer">Visit my LinkedIn</a></p>
            </Col>

            <Col data-aos="fade-left">
            <h1 className="header highlight-text">Contact Me!</h1>
            </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Footer;