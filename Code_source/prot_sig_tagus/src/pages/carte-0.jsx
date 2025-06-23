import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

function Carte_v() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/locations')
      .then(res => res.json())
      .then(data => setLocations(data));
  }, []);

  return (
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
  );
}

export default Carte_v;

