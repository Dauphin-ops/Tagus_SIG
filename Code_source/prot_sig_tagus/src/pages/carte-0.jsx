import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

import Navbar from '../components/nav-bar';
import Footer from '../components/footer';

function Carte_0() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/locations')
      .then(res => res.json())
      .then(data => setLocations(data));
  }, []);

  return (
    <>
{/* Composant barre de navigation */}
    <Navbar/>

{/* Page de visualisation de la carte 1 */}
    <MapContainer center={[4.05, 9.7]} zoom={6} style={{ height: '100vh' }}>
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map(loc => (
        <Marker key={loc.id} position={loc.geometry.coordinates.reverse()}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>

{/* Composant pieds de page  */}
      <Footer/>
    </>
  );
}

export default Carte_0;

