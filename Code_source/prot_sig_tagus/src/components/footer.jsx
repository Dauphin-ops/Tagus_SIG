import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>GeoView</h5>
            <p>Plateforme de visualisation cartographique connectée à PostgreSQL/PostGIS.</p>
          </Col>
          <Col md={4}>
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Accueil</a></li>
              <li><a href="/map" className="text-white">Carte</a></li>
              <li><a href="/login" className="text-white">Connexion</a></li>
              {/* <li><a href="/register" className="text-white">Inscription</a></li> */}
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email : contact@geoview.app</p>
            <p>Université XYZ, Cameroun</p>
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center">&copy; {new Date().getFullYear()} GeoView. Tous droits réservés.</p>
      </Container>
    </footer>
  );
}
