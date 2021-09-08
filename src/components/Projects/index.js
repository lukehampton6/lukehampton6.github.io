import {
    Row,
    Col,
    Card,
    Container
} from "react-bootstrap";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Projects() {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

  return (
    <div className="light">
    <Container className="card-div">
    <h2 data-aos="fade-down" className="dark-text header-two center">Projects</h2>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card data-aos="flip-left" className="card-container">
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
}

export default Projects;
