import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
      <footer className=" text-white mt-5 py-4" style={{ backgroundColor: 'rgb(113, 113, 113)'}}>
      <Container className='mt-5'>
        <Row>
          <Col md={4}>
            <h5>TagusWebMap</h5>
            <p>Plateforme de visualisation cartographique connectée à PostgreSQL/PostGIS.</p>
          </Col>
          <Col md={4}>
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Accueil</a></li>
              <li><a href="/map" className="text-white">Carte</a></li>
              <li><a href="/login" className="text-white">Connexion</a></li>
              <li><a href="/login" className="text-white">Inscription</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Tel : 6-73-36-57-66 / 6-57-87-16-46</p>
            <p>Email : dauphin.tsague@2028.ucac-icam.com</p>
            <p>Université UCAC-ICAM Douala, Cameroun</p>
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center">&copy; {new Date().getFullYear()} TagusWebMap. Tous droits réservés.</p>
      </Container>
    </footer>
  );
}
