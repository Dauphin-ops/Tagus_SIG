import React, { useState } from 'react';
import { Navbar, Offcanvas, Container, Button, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const BurgerMenu = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <>
      <Navbar expand="lg" className="bg-light shadow-sm sticky-top">
        <Container fluid>
          <Button variant="outline-primary" onClick={handleShow}>
            &#9776; {/* Icône hamburger */}
          </Button>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link onClick={() => { navigate("/home"); }}>
               Accueil
            </Nav.Link>
            <Nav.Link onClick={() => { navigate("/en savoir plus"); }}>
               En savoir plus
            </Nav.Link>
            <Nav.Link onClick={() => { navigate("/map 1"); handleClose(); }}>
               Outils de cartographie
            </Nav.Link>
            <Nav.Link onClick={() => { navigate("");}}>
               Mon compte
            </Nav.Link>
            <Nav.Link onClick={handleLogout} className="text-danger">
               Se déconnecter
            </Nav.Link>

          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default BurgerMenu;
