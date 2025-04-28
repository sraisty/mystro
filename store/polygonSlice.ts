import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { LatLngExpression } from "leaflet";

interface PolygonState {
  unsavedPolygon: LatLngExpression[];
  savedPolygons: LatLngExpression[][];
  // excludedPolygons: LatLngExpression[][]; // TODO
}

const initialState: PolygonState = {
  unsavedPolygon: [],
  savedPolygons: [],
  // excludedPolygons: [],   // TODO
};

export const polygonsSlice = createSlice({
  name: "polygons",

  initialState,
  reducers: {
    addPoint: (state, action: PayloadAction<LatLngExpression>) => {
      // console.log("addPoint reducer");
      state.unsavedPolygon.push(action.payload);
    },
    savePolygon: (state) => {
      // console.log("savePolygon reducer");
      state.savedPolygons.push(state.unsavedPolygon);
      state.unsavedPolygon = [];
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    resetPolygons: (state) => {
      // console.log("resetPolygons reducer");
      state.unsavedPolygon = [];
      state.savedPolygons = [];
    },
  },
});

export const { addPoint, savePolygon, resetPolygons } = polygonsSlice.actions;

export default polygonsSlice.reducer;
