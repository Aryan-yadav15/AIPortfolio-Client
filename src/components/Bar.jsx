import React from "react";
import "./bar.css";

function Bar({ height }) {
  return (
    <div
      className="bar rounded-full z-5"
      style={{
        height: `${height}%`, // Set the height as a percentage
      }}
    ></div>
  );
}

export default Bar;
