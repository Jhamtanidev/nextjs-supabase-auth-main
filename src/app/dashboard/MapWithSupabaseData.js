import React, { useState, useEffect } from 'react';
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';
import supabase from 'src/lib/supabase-browser';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function MapWithSupabaseData() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchLocations() {
      const { data: locations, error } = await supabase
        .from('wanderfloatesp')
        .select('sol_vol, bat_vol');

      if (error) {
        console.error(error);
      } else {
        setLocations(locations);
        console.log(locations);
      }
    }

    fetchLocations();
  }, []);

  return (
    <MapContainer className="map-container" center={[51.505, -0.09]} zoom={5}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {locations.map((location) => (
        <Marker position={[28.7041, 77.1025]}>
          <Popup>
            {`Latitude: ${location.sol_vol}, 
            Longitude: ${location.bat_vol}`}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapWithSupabaseData;
