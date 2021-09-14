import { Card, Container, CardGroup } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import image1 from '../../assets/images/thethirdtemple.jpg'
import image2 from '../../assets/images/animesearch.jpg'

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="light">
      <Container className="card-div">
        <h2 data-aos="fade-down" className="dark-text header-two center">
          Projects
        </h2>
        <CardGroup>
          <Card data-aos="flip-left" className="card-container">
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>The Third Temple</Card.Title>
              <Card.Text>
                A full-stack forum site where users can create accounts, make posts, and interact with other posts by commenting and voting.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>
          <Card data-aos="flip-left" className="card-container">
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Title>AnimeSearch</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>
        </CardGroup>

        <CardGroup>
          <Card data-aos="flip-left" className="card-container">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>
          <Card data-aos="flip-left" className="card-container">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>
        </CardGroup>

        <CardGroup>
        <Card data-aos="flip-left" className="card-container">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>
          <Card data-aos="flip-left" className="card-container">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}

export default Projects;
