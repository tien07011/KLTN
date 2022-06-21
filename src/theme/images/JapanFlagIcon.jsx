import React from "react";
import PropTypes from "prop-types";
import { SvgIcon } from "@mui/material";

const JapanFlagIcon = ({ className, width, height }) => {
  return (
    <SvgIcon className={className} width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <rect x="0.5" y="0.5" width="25px" height="17px" rx="1.5" fill="white" stroke="#F5F5F5" />
      <mask
        id="mask0_77_509"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="26px"
        height="18px"
      >
        <rect x="0.5" y="0.5" width="25px" height="17px" rx="1.5" fill="white" stroke="white" />
      </mask>
      <g mask="url(#mask0_77_509)">
        <ellipse cx="13" cy="9.0001" rx="5.57143" ry="5.4" fill="#D81441" />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_77_509"
          x1="7.42857"
          y1="3.6001"
          x2="7.42857"
          y2="14.4001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D81441" />
          <stop offset="1" stopColor="#BB0831" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};
export default JapanFlagIcon;

JapanFlagIcon.propTypes = {
  className: PropTypes.string,

  width: PropTypes.number,
  height: PropTypes.number,
};
JapanFlagIcon.defaultProps = {
  className: "",

  width: 26,
  height: 18,
};
