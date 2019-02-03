import React from "react";

const SVG = ({
  name = "",
  style = {},
  fill = "#000",
  width = "500px",
  className = "",
  height = "205px",
  viewBox = "0 0 32 32",
  transform = "translate(150.18181775792004, 135.68592999457962)"
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    id="svg3128"
    version="1"
    transform={transform}
    viewBox="0 0 500 200"
  >
    <g id="layer1">
      <path
        d="M 22 9 C 19.792 9 18 10.792 18 13 C 18 13.885103 18.29397 14.712226 18.78125 15.375 C 16.829274 16.496917 15.5 18.588492 15.5 21 C 15.5 23.033947 16.442042 24.839082 17.90625 26.03125 C 14.907101 27.08912 10.5 31.578049 10.5 39.5 L 33.5 39.5 C 33.5 31.578049 29.092899 27.08912 26.09375 26.03125 C 27.557958 24.839082 28.5 23.033948 28.5 21 C 28.5 18.588492 27.170726 16.496917 25.21875 15.375 C 25.70603 14.712226 26 13.885103 26 13 C 26 10.792 24.208 9 22 9 z"
        id="path3194"
        fill={fill}
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDashoffset="10"
      />
    </g>
  </svg>
);

export default SVG;
