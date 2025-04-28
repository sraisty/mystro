import React from "react";
import { Leaflet } from "../map/MyMap";
import { LeafletMouseEvent } from "leaflet";
import { PolygonLayers } from "../map/PolygonLayers";
import { useAppDispatch, useAppSelector } from "../../store";
import { addPoint } from "../../store/polygonSlice";

export const PolygonContainer = ({ leaflet }: { leaflet: Leaflet }) => {
  if (!leaflet) {
    return null;
  }
  const { useMapEvents } = leaflet;
  const unsavedPolygon = useAppSelector((state) => state.polygons.unsavedPolygon);
  const savedPolygons = useAppSelector((state) => state.polygons.savedPolygons);

  const dispatch = useAppDispatch();

  useMapEvents({
    click: (e: LeafletMouseEvent) => {
      const { lat, lng } = e.latlng;
      dispatch(addPoint({ lat, lng }));
      console.log("Clicked point:", e.latlng);
    },
  });

  return (
    <>
      <PolygonLayers points={unsavedPolygon} color="blue" leaflet={leaflet} />
      {savedPolygons.map((polygon, idx) => (
        <PolygonLayers key={idx} points={polygon} color="purple" leaflet={leaflet} />
      ))}
    </>
  );
};
