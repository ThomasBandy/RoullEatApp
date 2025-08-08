import React, { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import { GeocodingControl } from "@maptiler/geocoding-control/react";
import { createMapLibreGlMapController } from "@maptiler/geocoding-control/maplibregl-controller";
import "@maptiler/geocoding-control/style.css";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./map.css";

maptilersdk.config.apiKey = "xFfMGP6nxQo76qog5wnc";

//Used Gemini to help figure out useState and return coordinates from click

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [point, setPoint] = useState({ lng: -86.16, lat: 39.77 });
  const zoom = 6.2;
  const [mapController, setMapController] = useState();

  useEffect(() => {
    if (map.current) return;
    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.DATAVIZ.LIGHT,
      center: [point.lng, point.lat],
      zoom: zoom,
    });

    map.current.on("click", (e) => {
      setPoint(e.lngLat);
      console.log(point);
    });

    setMapController(createMapLibreGlMapController(map.current, maptilersdk));
  }, [point.lng, point.lat, zoom]);

  return (
    <div id="map-wrap" className="map-wrap">
      <div className="geocoding">
        {mapController && (
          <GeocodingControl
            apiKey={maptilersdk.config.apiKey}
            mapController={mapController}
          />
        )}
      </div>
      <div ref={mapContainer} className="map" />
    </div>
  );
}
