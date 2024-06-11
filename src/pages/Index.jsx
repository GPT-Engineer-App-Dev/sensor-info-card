import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box, Text } from '@chakra-ui/react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Dummy data for the buildings
const buildings = [
  { id: 1, lat: 59.911491, lng: 10.757933, data: 'Sensor data 1' },
  { id: 2, lat: 59.913868, lng: 10.752245, data: 'Sensor data 2' },
  { id: 3, lat: 59.914501, lng: 10.768056, data: 'Sensor data 3' },
  { id: 4, lat: 59.910011, lng: 10.743678, data: 'Sensor data 4' },
  { id: 5, lat: 59.912345, lng: 10.761789, data: 'Sensor data 5' },
  { id: 6, lat: 59.909123, lng: 10.775456, data: 'Sensor data 6' },
  { id: 7, lat: 59.907890, lng: 10.734567, data: 'Sensor data 7' },
  { id: 8, lat: 59.915678, lng: 10.789012, data: 'Sensor data 8' },
  { id: 9, lat: 59.918901, lng: 10.756789, data: 'Sensor data 9' },
  { id: 10, lat: 59.917654, lng: 10.767890, data: 'Sensor data 10' },
];

// Custom icon for the building pins
const buildingIcon = new L.Icon({
  iconUrl: require('../assets/building-pin.png'),
  iconSize: [25, 25],
  iconAnchor: [12, 25],
  popupAnchor: [0, -25],
});

const Index = () => {
  const [activeBuilding, setActiveBuilding] = useState(null);

  return (
    <MapContainer center={[59.9139, 10.7522]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {buildings.map(building => (
        <Marker
          key={building.id}
          position={[building.lat, building.lng]}
          icon={buildingIcon}
          eventHandlers={{
            click: () => {
              setActiveBuilding(building);
            },
          }}
        />
      ))}
      {activeBuilding && (
        <Popup
          position={[activeBuilding.lat, activeBuilding.lng]}
          onClose={() => {
            setActiveBuilding(null);
          }}
        >
          <Box>
            <Text fontWeight="bold">Building ID: {activeBuilding.id}</Text>
            <Text>{activeBuilding.data}</Text>
          </Box>
        </Popup>
      )}
    </MapContainer>
  );
};

export default Index;