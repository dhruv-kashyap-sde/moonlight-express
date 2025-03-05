import React from "react";

const Number = ({ number, top, bottom, left, right }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: top,
        bottom: bottom,
        left: left,
        right: right,
        zIndex: 1,
      }}
      className="number"
    >
      {number}
    </div>
  );
};

export default Number;
