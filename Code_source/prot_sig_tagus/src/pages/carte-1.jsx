import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Fix icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function MapPage() {
  const [markers, setMarkers] = useState([
    { id: 1, name: "Université de Douala", position: [4.05, 9.7] },
    { id: 2, name: "Université de Yaoundé I", position: [3.8667, 11.5167] },
  ]);

  return (
    <>
    <div className="container mt-4">
      <h2>Carte-Interactive</h2>
      <MapContainer center={[4.05, 9.7]} zoom={6} style={{ height: "500px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {markers.map(marker => (
          <Marker key={marker.id} position={marker.position}>
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
    </>
  );
}
