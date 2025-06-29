import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [registerData, setRegisterData] = useState({
    nom: '',
    prenom: '',
    mot_de_passe: '',
    confirmPassword: '',
    role: '',
  });

  const [loginData, setLoginData] = useState({
    nom: '',
    prenom: '',
    mot_de_passe: '',
    role: ''
  });

  const navigate = useNavigate();

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (registerData.mot_de_passe !== registerData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8000/signup", {
        nom: registerData.nom,
        prenom: registerData.prenom,
        mot_de_passe: registerData.mot_de_passe,
        role: registerData.role
      });
      alert("Inscription réussie !");
      localStorage.setItem("token", res.data.access_token); // Stocke le token
      navigate("/map 1"); 
    } catch (err) {
      alert("Erreur lors de l'inscription : " + err.response?.data?.detail || err.message);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/login", {
        nom: loginData.nom,
        prenom: loginData.prenom,
        mot_de_passe: loginData.mot_de_passe,
        role: loginData.role
      });

      localStorage.setItem("username", loginData.nom);
      localStorage.setItem("token", res.data.access_token); // Stocke le token
      navigate('/map 1');
    } catch (err) {
      alert("Identifiants invalides : " + err.response?.data?.detail || err.message);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(6px)', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <div className='collapse navbar-collapse' style={{ borderBottomRightRadius: '60px', borderTopRightRadius: '60px', padding: '30px' }}>
          <Link className="navbar-brand text-black" to="/"><strong>TagusWebMap</strong></Link>
        </div>
      </nav>

      <Container className="mt-5 mb-5">
        <Row className="justify-content-center">
          <h2 className="text-center mb-4">PAGE DE CONNEXION</h2>
          <Col className='p-5 rounded' md={6} style={{ backgroundColor: 'rgba(216, 216, 216, 0.29)' }}>
            {/* S'inscrire */}
            <div className="p-4 border rounded" style={{ backgroundColor: 'rgba(112, 160, 255, 0.36)' }}>
              <h3 className="text-center">S'inscrire</h3>
              <h5 className="text-center mb-4">(Créer un nouveau compte)</h5>
              <Form onSubmit={handleRegisterSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control type="text" name="nom" placeholder="Nom" onChange={handleRegisterChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="text" name="prenom" placeholder="Prénom" onChange={handleRegisterChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="password" name="mot_de_passe" placeholder="Mot de passe" onChange={handleRegisterChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="password" name="confirmPassword" placeholder="Réecrire le mot de passe" onChange={handleRegisterChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Group className="mb-3">
                    <Form.Select name="role" onChange={handleRegisterChange} value={registerData.role}>
                        <option value="">-- Sélectionner un rôle --</option>
                        <option value="maintenancier">Maintenancier</option>
                        <option value="cartographe">Cartographe</option>
                      </Form.Select>
                    </Form.Group>
                </Form.Group>
                <div className="d-flex justify-content-between">
                  <Button variant="danger" type="reset">Effacer</Button>
                  <Button variant="secondary" type="submit">Valider</Button>
                </div>
              </Form>
            </div>

            <div className="text-center my-3">OU</div>

            {/* Se connecter */}
            <div className="p-4 border rounded" style={{ backgroundColor: 'rgba(0, 84, 253, 0.69)' }}>
              <h3 className="text-center text-white">Se connecter</h3>
              <h5 className="text-center mb-4 text-white">(Connecter un compte existant)</h5>
              <Form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control type="text" name="nom" placeholder="Nom" onChange={handleLoginChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="text" name="prenom" placeholder="Prénom" onChange={handleLoginChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="password" name="mot_de_passe" placeholder="Mot de passe" onChange={handleLoginChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Select name="role" onChange={handleLoginChange}>
                    <option value="administrateur">Administrateur</option>
                    <option value="maintenancier">Maintenancier</option>
                    <option value="cartographe" selected>Cartographe</option>
                  </Form.Select>
                </Form.Group>
                <div className="text-center">
                  <Button variant="danger" type="reset">Effacer</Button>
                  <Button variant="secondary" type="submit">Valider</Button>
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
