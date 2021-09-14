import { Card, Container, CardGroup, Button } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import thethirdtemple from '../../assets/images/thethirdtemple.jpg'
import animesearch from '../../assets/images/animesearch.jpg'
import myspacerevival from '../../assets/images/myspacerevival.jpg'

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="light" id="projects">
      <Container className="card-div">
        <h1 data-aos="fade-down" className="dark-text header center">
          Projects
        </h1>
        <CardGroup>
          <Card data-aos="flip-right" className="card-container">
            <Card.Img variant="top" src={thethirdtemple} />
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
            <Card.Img variant="top" src={animesearch} />
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
            <Card.Img variant="top" src={myspacerevival} />
            <Card.Body>
              <Card.Title>Social Media Back-end</Card.Title>
              <Card.Text>
                A mock-up back-end for a basic social media website using Express.js and MongoDB. There are various CRUD routes set up for users and their posts, ready to be serve data to a front-end.
              </Card.Text>
              <Button href="https://github.com/lukehampton6/myspace-revival" target="_blank" variant="secondary">Code</Button>
            </Card.Body>
          </Card>

          <Card data-aos="flip-left" className="card-container">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Project coming soon!</Card.Title>
              <Card.Text>
                Waiting to make some more substantial projects to display!
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>

        <CardGroup>
        <Card data-aos="flip-right" className="card-container">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Project coming soon!</Card.Title>
              <Card.Text>
              Waiting to make some more substantial projects to display!
              </Card.Text>
            </Card.Body>
          </Card>

          <Card data-aos="flip-left" className="card-container">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Project coming soon!</Card.Title>
              <Card.Text>
              Waiting to make some more substantial projects to display!
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
      <div className="spacer light-dark"></div>
    </div>
  );
}

export default Projects;
