import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import type * as ReactLeaflet from "react-leaflet";
import { PolygonContainer } from "./PolygonContainer";
import { LatLngExpression } from "leaflet";

const SAN_FRANCISCO_CENTER: LatLngExpression = [37.7749, -122.4194]; // San Francisco

export type Leaflet = {
  MapContainer: typeof ReactLeaflet.MapContainer;
  TileLayer: typeof ReactLeaflet.TileLayer;
  CircleMarker: typeof ReactLeaflet.CircleMarker;
  Marker: typeof ReactLeaflet.Marker;
  Polygon: typeof ReactLeaflet.Polygon;
  useMapEvents: typeof ReactLeaflet.useMapEvents;
};

export function MyMap() {
  const [leaflet, setLeaflet] = React.useState<null | Leaflet>(null);
  useEffect(() => {
    const loadLeaflet = async () => {
      const lazyLoadedLeaflet = await import("react-leaflet");
      setLeaflet({
        MapContainer: lazyLoadedLeaflet.MapContainer,
        TileLayer: lazyLoadedLeaflet.TileLayer,
        CircleMarker: lazyLoadedLeaflet.CircleMarker,
        Polygon: lazyLoadedLeaflet.Polygon,
        useMapEvents: lazyLoadedLeaflet.useMapEvents,
        Marker: lazyLoadedLeaflet.Marker,
      });
    };
    loadLeaflet();
  }, []);

  if (!leaflet) {
    return <div>Loading...</div>;
  }
  const { MapContainer, TileLayer, Marker } = leaflet;

  return (
    <MapContainer
      center={SAN_FRANCISCO_CENTER} // San Francisco
      zoom={12}
      style={{ height: "400px", width: "100%" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <PolygonContainer leaflet={leaflet} />
    </MapContainer>
  );
}
