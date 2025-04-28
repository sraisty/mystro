import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import type * as ReactLeaflet from "react-leaflet";

type Leaflet = {
  MapContainer: typeof ReactLeaflet.MapContainer;
  TileLayer: typeof ReactLeaflet.TileLayer;
  Circle: typeof ReactLeaflet.Circle;
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
        Circle: lazyLoadedLeaflet.Circle,
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
      center={[37.7749, -122.4194]} // San Francisco
      zoom={13}
      style={{ height: "400px", width: "100%" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[37.7749, -122.4194]}></Marker>
    </MapContainer>
  );
}
