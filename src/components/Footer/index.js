import { Container, Col, Row } from "react-bootstrap";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import resume from "../../assets/documents/luke-hampton-resume.pdf";

function Footer() {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

  return (
    <div className="primary blob dark-blobs" id="resume-and-contact">
        <Container className="resume-and-contact">
            <Row className="footer-row">
            <Col className="empty-col">
            </Col>
            <Col data-aos="fade-left" className="left-border">
            <h1 className="header highlight-text">Resume</h1>
            <p className="light-text header-content"><a className="link" href={resume} download="LukeHamptonResume" rel="noreferrer">Download my resume</a></p>
            <p className="light-text header-content"><a className="link" href="https://github.com/lukehampton6" target="_blank" rel="noreferrer">Heres my Github</a></p>
            </Col>
            </Row>

            <Row className="footer-row">
            <Col data-aos="fade-right" className="align-right right-border">
            <h1 className="header highlight-text">Contact Me!</h1>
            <p className="light-text header-content">Email: <a className="link" href="mailto:lukehampton6@gmail.com" >lukehampton6@gmail.com</a></p>
            <p className="light-text header-content">Phone Number: <a className="link" href="tel:3868825832">(386)-882-5832</a></p>
            <p className="light-text header-content"><a className="link" href="https://www.linkedin.com/in/luke-hampton-6098371ab/" target="_blank" rel="noreferrer">Visit my LinkedIn</a></p>
            </Col>
            <Col className="empty-col">
            </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Footer;