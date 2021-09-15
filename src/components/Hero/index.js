import {Container, Col, Row, Image} from "react-bootstrap";
import image from '../../assets/images/me.JPG'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Hero() {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

    return (
        <div className="light blob light-blobs" id="about">
            <Container className="hero-container">
                <Row>
                <Col data-aos="fade-right">
                    <div className="hero-text">
                    <h1 className="dark-text header">Hey There!</h1>
                    <br/>
                    <h2 className="highlight-text header-two">My name is Luke.</h2> 
                    <p className="dark-text header-content">I am a full-stack web devoloper based in Florida. I love anything to do with computers and am always pushing myself to learn new technologies.</p>
                    </div>
                </Col>
                <Col className="img-col" data-aos="fade-left">
                <Image className="devpic" alt='Dev-Image' src={image} roundedCircle fluid/>
                </Col>
                </Row>
            </Container>
            <div className="spacer light-dark"></div>
        </div>
    );
}

export default Hero;