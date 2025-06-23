import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">TagusWebMap</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Accueil</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/map 0">Carte 0</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/map 1">Carte 1</Link></li>
        </ul>
      </div>
    </nav>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">GeoView</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/map">Carte</Link>
          </li>
        </ul>
      </div>
    </nav>
  );

}
