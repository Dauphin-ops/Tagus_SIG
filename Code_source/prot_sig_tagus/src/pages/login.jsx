import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top " style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)',fontFamily: "'Lora', sans-serif", backdropFilter: 'blur(6px)', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <div className='collapse navbar-collapse ' style={{ borderBottomRightRadius: '60px',borderTopRightRadius: '60px',padding: '30px'}}>
          <Link className="navbar-brand text-black" to="/"><strong>TagusWebMap</strong></Link>
        </div>
      </nav>
    <Container className="mt-5 mb-5">
      <Row className="justify-content-center">
        <h2 className="text-center mb-4">PAGE DE CONNEXION</h2>
        <Col className='p-5 rounded' md={6} style={{ backgroundColor: 'rgba(216, 216, 216, 0.29)' }}>
          {/* Section S'inscrire */}
          <div className="p-4 border rounded" style={{ backgroundColor: 'rgba(112, 160, 255, 0.36)' }}>
            <h3 className="text-center ">S'inscrire </h3>
            <h5 className="text-center mb-4"> (Créer un nouveau compte)</h5>
            <Form>
              <Form.Group className="mb-3" controlId="formNom">
                <Form.Control type="text" placeholder="Nom" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPrenom">
                <Form.Control type="text" placeholder="Prénom" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMotDePasse">
                <Form.Control type="password" placeholder="Mot de passe" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formReecrireMotDePasse">
                <Form.Control type="password" placeholder="Réeccrire mot de passe" />
              </Form.Group>
              <div className="d-flex justify-content-between">
                <Button variant="danger" className="me-2">Annuler</Button>
                <Button variant="secondary">Valider</Button>
              </div>
            </Form>
          </div>
          <div className="text-center my-3">OU</div>
          {/* Section Se connecter */}
          <div className="p-4 border rounded" style={{ backgroundColor: 'rgba(0, 84, 253, 0.69)' }}>
            <h3 className="text-center text-white">Se connecter </h3>
            <h5 className="text-center mb-4 text-white"> (Compte existant)</h5>
            <Form>
              <Form.Group className="mb-3" controlId="formNomLogin">
                <Form.Control type="text" placeholder="Nom" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPrenomLogin">
                <Form.Control type="text" placeholder="Prénom" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formRole">
                <Form.Control type="text" placeholder="Rôle" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMotDePasseLogin">
                <Form.Control type="password" placeholder="Mot de passe" />
              </Form.Group>
              <div className="text-center">
                <Button variant="secondary">Valider</Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Login;
