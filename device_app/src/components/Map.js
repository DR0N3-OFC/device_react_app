import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const devices = [
    { id: 1, name: 'Device 1', position: [51.505, -0.09] },
    { id: 2, name: 'Device 2', position: [51.515, -0.1] },
  ];

  const navbarHeight = 50;

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: `calc(50vh - ${navbarHeight}px)`, width: "40vw" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
      />
      {devices.map(device => (
        <Marker key={device.id} position={device.position}>
          <Popup>{device.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
