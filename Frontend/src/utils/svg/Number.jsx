import React from "react";

const Number = ({ number, top, bottom, left, right, size }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: top,
        bottom: bottom,
        left: left,
        right: right,
        zIndex: 1,
        fontSize: size,
      }}
      className="number"
    >
      {number}
    </div>
  );
};

export default Number;
