import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { IoLocationSharp } from 'react-icons/io5';

const customIcon = new icon({
  iconUrl: IoLocationSharp,
  iconSize: [38, 38], // size of the icon
});

const Index = () => {
  const position = [59.9139, 10.7522]; // Oslo coordinates
  const buildings = [
    { id: 1, position: [59.9139, 10.7522], data: 'Sensor data 1' },
    { id: 2, position: [59.9149, 10.7522], data: 'Sensor data 2' },
    { id: 3, position: [59.9159, 10.7522], data: 'Sensor data 3' },
    { id: 4, position: [59.9169, 10.7522], data: 'Sensor data 4' },
    { id: 5, position: [59.9179, 10.7522], data: 'Sensor data 5' },
    { id: 6, position: [59.9189, 10.7522], data: 'Sensor data 6' },
    { id: 7, position: [59.9199, 10.7522], data: 'Sensor data 7' },
    { id: 8, position: [59.9209, 10.7522], data: 'Sensor data 8' },
    { id: 9, position: [59.9219, 10.7522], data: 'Sensor data 9' },
    { id: 10, position: [59.9229, 10.7522], data: 'Sensor data 10' },
  ];

  return (
    <MapContainer center={position} zoom={13} style={{ height: '100vh', width: '100vw' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {buildings.map(building => (
        <Marker key={building.id} position={building.position} icon={customIcon}>
          <Popup>{building.data}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Index;