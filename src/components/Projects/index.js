import { Card, Container, CardGroup, Button } from "react-bootstrap";
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
        <h1 data-aos="fade-down" className="dark-text header center">
          Projects
        </h1>
        <CardGroup>
          <Card data-aos="flip-right" className="card-container">
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>The Third Temple</Card.Title>
              <Card.Text>
                A full-stack forum site where users can create accounts, make posts, and interact with other posts by commenting and voting. It uses a SQL database and a templating engine to render the front end.
              </Card.Text>
              <Button href="https://the-third-temple.herokuapp.com/" target="_blank" variant="secondary">Deployment</Button>{'  '}
              <Button href="https://github.com/lukehampton6/the-third-temple" target="_blank" variant="secondary">Code</Button>
            </Card.Body>
          </Card>

          <Card data-aos="flip-left" className="card-container">
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Title>AnimeSearch</Card.Title>
              <Card.Text>
                A simple search app that uses two API's to search for specific animes and a quote from them. It also uses local storage to have a persisting search history.
              </Card.Text>
              <Button href="https://lukehampton6.github.io/anime-search/" target="_blank" variant="secondary">Deployment</Button>{'  '}
              <Button href="https://github.com/lukehampton6/anime-search" target="_blank" variant="secondary">Code</Button>
            </Card.Body>
          </Card>
        </CardGroup>

        <CardGroup>
          <Card data-aos="flip-right" className="card-container">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
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
          </Card>
        </CardGroup>

        <CardGroup>
        <Card data-aos="flip-right" className="card-container">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
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
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}

export default Projects;
