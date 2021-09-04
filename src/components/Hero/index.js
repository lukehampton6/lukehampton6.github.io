import {Container, Col, Row, Image} from "react-bootstrap";
import image from '../../assets/images/me.JPG'

function Hero() {
    return (
        <div className="light">
            <Container className="hero-container">
                <Row>
                <Col>
                    <div className="hero-text">
                    <h1 className="dark-text">Hey There!</h1>
                    <br/>
                    <h2 className="highlight-text">My name is Luke.</h2> 
                    <h4 className="dark-text">I am a full-stack web devoloper based in Florida. I love anything to do with computers and am always pushing myself to learn new technologies.</h4>
                    </div>
                </Col>
                <Col className="img-col">
                <Image className="devpic" alt='Dev-Image' src={image} roundedCircle fluid/>
                </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero;