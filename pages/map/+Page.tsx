import React from "react";
import { MyMap } from "../../components/MyMap";
import { css } from "@emotion/react";

export default function MapPage() {
  return (
    <div css={styles.pageContainer}>
      <h1>Select Map Areas</h1>
      <div css={styles.mapContainer}>
        <MyMap />
      </div>
      <div css={styles.buttonContainer}>
        <button css={styles.button}>Button 1</button>
        <button css={styles.button}>Button 2</button>
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
