// import React, { useState, useEffect, useRef } from 'react';
// import Map from 'ol/Map.js';
// import View from 'ol/View.js';
// import TileLayer from 'ol/layer/Tile.js';
// import OSM from 'ol/source/OSM';
// import VectorLayer from 'ol/layer/Vector';
// import VectorSource from 'ol/source/Vector';
// import Feature from 'ol/Feature';
// import Point from 'ol/geom/Point';
// import { fromLonLat } from 'ol/proj';
// import { Icon, Style } from 'ol/style';
// import Overlay from 'ol/Overlay';
// import "./olmap.css"
// import supabase from 'src/lib/supabase-browser';




// function Olmap() {
//   const [locations, setLocations] = useState([]);
//   const [longitudes, setLongitude] = useState([]);
//   const [latitudes, setLatitude] = useState([]);
//   const [map, setMap] = useState(null);
  
//   useEffect(() => {
//     async function fetchLocations() {
//       const { data: locations, error } = await supabase
//         .from('latlong')
//         .select('latitude, longitude');

//       if (error) {
//         console.error(error);
//       } else {
//         setLocations(locations);
//         console.log(locations);
//         const latitudeArray = locations.map(location => location.latitude);
//         const longitudeArray = locations.map(location => location.longitude);
//         setLatitude(latitudeArray);
//         setLongitude(longitudeArray);
        
//       }
//     }

//     fetchLocations();
//   }, []);

//   useEffect(() => {
//     if (locations.length > 0) {
//       const features = locations.map((location) => {
//         const geometry = new Point(fromLonLat([location.longitude, location.latitude]));
//         const feature = new Feature(geometry);

//         feature.setStyle(
//           new Style({
//             image: new Icon({
//               src: 'https://cdn.mapmarker.io/api/v1/pin?size=50&background=%23FF5533&text=%20&icon=fa-map-marker',
//               alt: 'marker',
//               scale: 0.5,
//             }),
//           })
//         );

//         // Create a tooltip for the marker
//         const tooltip = document.createElement('div');
//         tooltip.className = 'marker-tooltip';
//         tooltip.innerText = `Latitude: ${location.latitude}, Longitude: ${location.longitude}`;

//         // Create an overlay for the tooltip
//         const tooltipOverlay = new Overlay({
//           element: tooltip,
//           offset: [0, -20],
//           positioning: 'bottom-center',
//         });

//         // Add a click event to show/hide the tooltip
//         feature.on('click', (evt) => {
//           const tooltipVisible = tooltipOverlay.getElement().style.display !== 'none';
//           tooltipOverlay.getElement().style.display = tooltipVisible ? 'none' : 'block';
//           evt.stopPropagation();
//         });

//         // Get the map reference from the state
//         if (map) {
//           map.addOverlay(tooltipOverlay);
//         }

//         return feature;
//       });

//       const vectorSource = new VectorSource({
//         features: features,
//       });

//       const vectorLayer = new VectorLayer({
//         source: vectorSource,
//       });

//       const newMap = new Map({
//         target: 'map',
//         layers: [
//           new TileLayer({
//             source: new OSM(),
//           }),
//           vectorLayer,
//         ],
//         view: new View({
//           center: fromLonLat([longitudes[0], latitudes[0]]),
//           zoom: 2,
//         }),
//       });

//       setMap(newMap);
//     }
//   }, [locations, longitudes, latitudes]);
//   return <div id="map" style={{ width: '50%', height: '200px' }}></div>;
// }

// export default Olmap;


// import { useEffect, useState } from 'react';
// import supabase from 'src/lib/supabase-browser';
// import L from 'leaflet'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// function Map({ markers, onClick }) {
//   const map = L.map('map'); 
//   // Initializes map
  
//   map.setView([51.505, -0.09], 13); 
//   // Sets initial coordinates and zoom level
  
//   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       maxZoom: 19,
//       attribution: '© OpenStreetMap'
//   }).addTo(map); 
//   let marker, circle, zoomed;

// navigator.geolocation.watchPosition(success, error);

// function success(pos) {

//     const lat = pos.coords.latitude;
//     const lng = pos.coords.longitude;
//     const accuracy = pos.coords.accuracy;

//     if (marker) {
//         map.removeLayer(marker);
//         map.removeLayer(circle);
//     }
//     // Removes any existing marker and circule (new ones about to be set)

//     marker = L.marker([lat, lng]).addTo(map);
//     circle = L.circle([lat, lng], { radius: accuracy }).addTo(map);
//     // Adds marker to the map and a circle for accuracy

//     if (!zoomed) {
//         zoomed = map.fitBounds(circle.getBounds()); 
//     }
//     // Set zoom to boundaries of accuracy circle

//     map.setView([lat, lng]);
//     // Set map focus to current user position

// }

// function error(err) {

//     if (err.code === 1) {
//         alert("Please allow geolocation access");
//     } else {
//         alert("Cannot get current location");
//     }

// }
//   return (
//     <MapContainer
//     id='map'
//       center={[22.3072, 73.1812]}
//       zoom={13}
//       style={{ height: '500px', width: '100%' }}
//       onClick={onClick}
//     >
//       <TileLayer  />
      
//       {/* Render markers */}
//       {markers.map((marker) => (
//         <Marker key={marker.id} position={[marker.latitude, marker.longitude]}
//         icon={
//           new L.Icon({
//             iconUrl: 'https://cdn.mapmarker.io/api/v1/pin?size=50&background=%23FF5533&text=%20&icon=fa-map-marker',
//             iconSize: [25, 41],
//             iconAnchor: [12, 41],
//             popupAnchor: [1, -34],
//             tooltipAnchor: [16, -28],
            
//             shadowSize: [41, 41],
//           })
//         }>
          
//           <Popup>
//             <strong>{marker.StateName}</strong>
//           </Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// }

// function MyComponent() {
//   const [markers, setMarkers] = useState([]);

//   useEffect(() => {
   

//     const fetchMarkers = async () => {
//       const { data } = await supabase.from('latlong').select('latitude,longitude,StateName');
//       setMarkers(data);
//     };

//     fetchMarkers();
//   }, []);

  
// const latlong = supabase.channel('custom-insert-channel')
// .on(
//   'postgres_changes', 
//   { event: 'INSERT', schema: 'public', table: 'latlong' },
//   (payload) => {
//     console.log('Change received!', payload)
//     Map();
//     handleClickMap()
//   }
// )
// .subscribe()

//   const handleClickMap = (event) => {
//     const { latlng } = event;
//     console.log('Clicked on map:', latlng);
//   };

//   return (
//     <div>
//       <Map markers={markers} onClick={handleClickMap} />
//     </div>
//   );
// }

// export default MyComponent;


import { useEffect } from 'react';
import L from 'leaflet';
import './olmap.css'
import { MapContainer, TileLayer, Marker, Circle } from 'react-leaflet';

function Map() {
  useEffect(() => {
    const map = L.map('map');
    map.setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    let marker, circle, zoomed;
    navigator.geolocation.watchPosition(success, error);

    function success(pos) {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      const accuracy = pos.coords.accuracy;

      if (marker) {
        map.removeLayer(marker);
        map.removeLayer(circle);
      }

      marker = L.marker([lat, lng]).addTo(map);
      circle = L.circle([lat, lng], { radius: accuracy }).addTo(map);

      if (!zoomed) {
        zoomed = map.fitBounds(circle.getBounds());
      }

      map.setView([lat, lng]);
    }

    function error(err) {
      if (err.code === 1) {
        alert('Please allow geolocation access');
      } else {
        alert('Cannot get current location');
      }
    }

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div id="map">
      <MapContainer style={{ height: '350px' }} />
    </div>
  );
}

export default Map;
