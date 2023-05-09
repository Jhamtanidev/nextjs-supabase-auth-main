// Import Leaflet and Supabase libraries
// import L from 'leaflet';
// import supabase from 'src/lib/supabase-browser';
// import './olmap.css'

// // Create the Leaflet map

//   const L = require('leaflet');
//   var map = L.map('map').setView([0, 0], 10);

// // Add a tile layer to the map
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: 'Map data &copy; OpenStreetMap contributors'
// }).addTo(map);

// // Create a marker for the ROV
// var rovMarker = L.marker([0, 0]).addTo(map);

// // Function to update the ROV marker position
// function updateROVPosition(latitude, longitude) {
//   rovMarker.setLatLng([latitude, longitude]);
// }


// // Fetch the ROV coordinates from Supabase
// supabase
//   .from('latlong')
//   .select('latitude, longitude')
//   .limit(1)
//   .then(response => {
//     // Extract the latitude and longitude from the Supabase response
//     var latitude = response.data[0].latitude;
//     var longitude = response.data[0].longitude;

//     // Update the ROV marker position on the map
//     updateROVPosition(latitude, longitude);
//   })
//   .catch(error => {
//     console.error('Error fetching ROV coordinates:', error);
//   });
  

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import supabase from 'src/lib/supabase-browser';


function Map({ markers, onClick }) {
  const handleClickMap = (event) => {
    const { latlng } = event;
    console.log('Clicked on map:', latlng);
  };

  return (
    <MapContainer
      center={[22.3072, 73.1812]}
      zoom={13}
      style={{ height: '500px', width: '100%' }}
      onClick={handleClickMap}
    >
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" maxZoom={19} attribution="© OpenStreetMap" />

      {/* Render markers */}
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={[marker.latitude, marker.longitude]}
          icon={
            new L.Icon({
              iconUrl: 'https://cdn.mapmarker.io/api/v1/pin?size=50&background=%23FF5533&text=%20&icon=fa-map-marker',
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              tooltipAnchor: [16, -28],
              shadowSize: [41, 41],
            })
          }
        >
          <Popup>
            <strong>{marker.StateName}</strong>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

function MyComponent() {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const fetchMarkers = async () => {
      const { data } = await supabase
      .from('latlong')
      .select('latitude,longitude,StateName')
      .limit(1);
      setMarkers(data);
    };

    fetchMarkers();
  }, []);

  useEffect(() => {
    const latlong = supabase.channel('custom-insert-channel').on(
      'postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'latlong' },
      (payload) => {
        console.log('Change received!', payload);
        setMarkers((prevMarkers) => [...prevMarkers, payload]);
      }
    ).subscribe();

    return () => {
      latlong.unsubscribe();
    };
  }, []);

  const handleClickMap = (event) => {
    const { latlng } = event;
    console.log('Clicked on map:', latlng);
  };
  

  return (
    <div>
      <Map markers={markers} onClick={handleClickMap} />
    </div>
  );
}

export default MyComponent;


// import './olmap.css'
// import { useEffect } from 'react';
// import L from 'leaflet';
// import './olmap.css'
// import { MapContainer, TileLayer, Marker, Circle } from 'react-leaflet';

// function Map() {
//   useEffect(() => {
//     const map = L.map('map');
//     map.setView([51.505, -0.09], 13);

//     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       maxZoom: 19,
//       attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//     }).addTo(map);

//     let marker, circle, zoomed;
//     navigator.geolocation.watchPosition(success, error);

//     function success(pos) {
//       const lat = pos.coords.latitude;
//       const lng = pos.coords.longitude;
//       const accuracy = pos.coords.accuracy;

//       if (marker) {
//         map.removeLayer(marker);
//         map.removeLayer(circle);
//       }

//       marker = L.marker([lat, lng]).addTo(map);
//       circle = L.circle([lat, lng], { radius: accuracy }).addTo(map);

//       if (!zoomed) {
//         zoomed = map.fitBounds(circle.getBounds());
//       }

//       map.setView([lat, lng]);
//     }

//     function error(err) {
//       if (err.code === 1) {
//         alert('Please allow geolocation access');
//       } else {
//         alert('Cannot get current location');
//       }
//     }

//     return () => {
//       map.remove();
//     };
//   }, []);

//   return (
//     <div id="map">
//       <MapContainer style={{ height: '350px' }} />
//     </div>
//   );
// }

// export default Map;
