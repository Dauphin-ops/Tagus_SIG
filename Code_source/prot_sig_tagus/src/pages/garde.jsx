import { Link } from "react-router-dom";

import OptionImpair from "../components/option-impair";
import OptionPair from "../components/option-pair";
import Login from "./login";


// export default function Garde() {
//     return (
//       <>
//         <nav className="navbar navbar-expand-lg navbar-dark sticky-top " style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(6px)', paddingBottom: '3%' }}>
//             <div className='collapse navbar-collapse bg-dark' style={{ borderBottomRightRadius: '60px',borderTopRightRadius: '60px',padding: '30px'}}>
//                 <Link className="navbar-brand" to="/"><strong>TagusWebMap</strong></Link>
//             </div>
//             <div className='m-5 align-items-right'>
//                 <BurgerMenu/>
//             </div>
//         </nav>
//         <div className='flex m-5 '>
//             <div className='container text-center align-items-center p-5 m-10 '>
//                 <h1><strong>La visualisation en un clic</strong></h1>
//                 <p>TagusWebMap vous propose d'explorer les données géographiques du Cameroun à travers une carte interactive.</p>
//             </div>
//             <div className="continer m-5">
//                 <div><Link to="/map 1"><OptionImpair/></Link></div>
//                 <div><Link to="/en savoir plus"><OptionPair/></Link></div>
//                 <div><Link to="/"><OptionImpair/></Link></div>
//             </div>
//         </div>
//       </>
//     );
//   }


import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Garde = () => {
  return (
    <Container className="mt-5 text-center">
      <Row>
        <Col>
          <h1 className="display-4 fw-bold">la visualisation en un clic</h1>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <div>
            <img
              src="https://via.placeholder.com/150x300?text=Carte+de+visualisation"
              alt="Carte de visualisation"
              className="img-fluid mb-3"
            />
            <p>Carte de visualisation</p>
          </div>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <div>
            <p>En savoir plus</p>
            <img
              src="https://via.placeholder.com/150x300?text=En+voir+plus"
              alt="En savoir plus"
              className="img-fluid mb-3"
            />
          </div>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <div>
            <p>Autre...</p>
            <img
              src="https://via.placeholder.com/150x300?text=Autre..."
              alt="Autre..."
              className="img-fluid mb-3"
            />
          </div>
        </Col>
      </Row>
      <Row className="bg-secondary text-white p-3">
        <Col md={3}>
          <p>information<br />information<br />information<br />information</p>
        </Col>
        <Col md={3}>
          <p>information<br />information<br />information<br />information</p>
        </Col>
        <Col md={3}>
          <p>information<br />information<br />information<br />information</p>
        </Col>
        <Col md={3}>
          <p>information<br />information<br />information<br />information</p>
        </Col>
      </Row>
      <Row className="bg-secondary text-white p-2">
        <Col>
          <p className="text-center">droit d'auteur réservé</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Garde;