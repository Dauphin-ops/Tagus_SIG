// src/components/Sidebar.jsx
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div style={{ width: '220px', backgroundColor: '#343a40' }}>
      <Nav className="flex-column p-3 text-white">
        <h4 className="text-white">GeoView</h4>
        <Nav.Link as={Link} to="/" className="text-white">Accueil</Nav.Link>
        <Nav.Link as={Link} to="/map 0" className="text-white">Carte 0</Nav.Link>
        <Nav.Link as={Link} to="/log" className="text-white">Connexion</Nav.Link>
        {/* <Nav.Link as={Link} to="/register" className="text-white">Inscription</Nav.Link> */}
      </Nav>
    </div>
  );
}
