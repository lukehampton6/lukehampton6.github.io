import { useState } from "react";
import {
  Button,
  Offcanvas,
  Navbar,
  Container,
  ListGroup,
} from "react-bootstrap";

function Nav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar className="dark">
        <Container fluid>
          <Button className="primary" onClick={handleShow}>
            Nav
          </Button>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header className="primary" closeButton>
          <Offcanvas.Title className="dark-text">Menu</Offcanvas.Title>
        </Offcanvas.Header>
          <ListGroup defaultActiveKey="#link1">
            <ListGroup.Item action href="#link1">
              Projects
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Technologies
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              Resume
            </ListGroup.Item>
            <ListGroup.Item action href="#link4">
              Contact
            </ListGroup.Item>
          </ListGroup>
      </Offcanvas>
    </>
  );
}

export default Nav;
