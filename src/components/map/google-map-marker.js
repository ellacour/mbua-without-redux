import React from "react";

const MbuaMarker = () => {
  return <div style={greatPlaceStyle}></div>;
};

const K_WIDTH = 10;
const K_HEIGHT = 10;
const greatPlaceStyle = {
  position: "absolute",
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,
  borderRadius: K_HEIGHT,
  backgroundColor: "#ffb60096",
  textAlign: "center",
  color: "#3f51b5",
  fontSize: 16,
  fontWeight: "bold",
  padding: 4
};

export default MbuaMarker;
