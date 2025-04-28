import { LatLngExpression } from "leaflet";
import React from "react";
import { Leaflet } from "./MyMap";

type PolygonLayersProps = {
  points: LatLngExpression[];
  color: string;
  leaflet: Leaflet;
};

export const PolygonLayers = ({ points, color, leaflet }: PolygonLayersProps) => {
  const { Polygon, CircleMarker } = leaflet;
  return (
    <>
      {points.length > 2 && (
        <Polygon positions={points} color={color} fillColor={color} fillOpacity={0.5} weight={2} opacity={1} />
      )}
      <>
        {points.map((point, idx) => (
          <CircleMarker
            key={idx}
            center={point}
            radius={3}
            color={color}
            fillColor={color}
            fillOpacity={0.5}
            weight={2}
            opacity={1}
          />
        ))}
      </>
    </>
  );
};
