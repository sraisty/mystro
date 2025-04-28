import React from "react";
import { MyMap } from "../../components/MyMap";
import { css } from "@emotion/react";
import { useAppDispatch, useAppSelector } from "../../store";
import { resetPolygons, savePolygon } from "../../store/polygonSlice";

export default function MapPage() {
  const dispatch = useAppDispatch();

  const onClickSavePolygon = () => {
    dispatch(savePolygon());
    console.log("Polygon saved");
  };
  const onResetPolygons = () => {
    dispatch(resetPolygons());
    console.log("Polygons reset");
  };

  const unsavedPolygon = useAppSelector((state) => state.polygons.unsavedPolygon);
  const savedPolygons = useAppSelector((state) => state.polygons.savedPolygons);
  const enableResetButton = savedPolygons.length > 0 || unsavedPolygon.length > 0;

  return (
    <div css={styles.pageContainer}>
      <h1>Select Map Areas</h1>
      <div css={styles.mapContainer}>
        <MyMap />
      </div>
      <div css={styles.buttonContainer}>
        <button css={styles.button} onClick={onClickSavePolygon} disabled={unsavedPolygon.length < 3}>
          Save Polygon
        </button>
        <button css={styles.button} onClick={onResetPolygons} disabled={!enableResetButton}>
          Reset
        </button>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: css({
    height: "100vh",
    width: "100vw",
  }),
  mapContainer: css({
    height: "400px",
    width: "100%",
    marginBottom: "20px",
  }),
  buttonContainer: css({
    display: "flex",
    flexDirection: "row",
    marginTop: "20px",
    gap: "10px",
  }),
  button: css({
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }),
};
