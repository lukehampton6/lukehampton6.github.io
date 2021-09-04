import {Container, Col, Row, Image} from "react-bootstrap";
import image from '../../assets/images/me.JPG'

function Hero() {
    return (
        <div className="primary">
            <Container>
                <Row>
                <Col>
                    <h1 className="light-text">Hey There!</h1>
                    <h2 className="dark-text">My name is Luke.</h2> 
                    <h4 className="dark-text">I am a full-stack web devoloper based in Florida. </h4>
                </Col>
                <Col>
                <Image alt='Dev-Image' src={image} roundedCircle fluid/>
                </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero;