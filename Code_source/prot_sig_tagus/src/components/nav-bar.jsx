import { Link } from 'react-router-dom';

import BurgerMenu from './menu-bascule';


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top " style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(6px)', paddingBottom: '3%' }}>
      <div className='collapse navbar-collapse' style={{ borderBottomRightRadius: '60px',borderTopRightRadius: '60px',padding: '30px', backgroundColor: 'rgb(0, 100, 240)'}}>
        <Link className="navbar-brand" to="/home"><strong>TagusWebMap</strong></Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/home">Accueil</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/map 1">Carte </Link></li>
            <li className="nav-item"><Link className="nav-link" to="/en savoir plus">En savoir plus</Link></li>
            {/* <li className="nav-item"><Link className="nav-link" to="/map 0">Carte 0</Link></li> */}
          </ul>
        </div>
      </div>
      <div className='m-5 align-items-right'>
        <BurgerMenu/>
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
