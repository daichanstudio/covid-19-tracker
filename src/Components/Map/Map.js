import React from "react";
import { MapContainer as LeafletMap, TileLayer, useMap } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "../util";

// function ChangeMapView({ coords }) {
//   console.log(coords);
//   const map = useMap();
//   map.setView([coords.lat, coords.lng], map.getZoom());

//   return null;
// }


// function Map({ center, zoom, countries, casesType }) {
//   return (
//     <div className="map">
//       <LeafletMap center={center} zoom={zoom}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {showDataOnMap(countries, casesType)}
//         <ChangeMapView coords={center} />
//       </LeafletMap>
//     </div>
//   );
// }

// export default Map;

function ChangeMap({ center, zoom}) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function Map({ center, zoom, countries, casesType}) {
  return (
    <div className="map">
      <LeafletMap>
        <ChangeMap center={center} zoom={zoom} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        ></TileLayer>
         {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;