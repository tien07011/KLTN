import React from "react";
import PropTypes from "prop-types";
import { SvgIcon } from "@mui/material";

const VietnamFlagIcon = ({ className, width, height }) => {
  return (
    <SvgIcon className={className} width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <rect width="26px" height="18px" rx="2" fill="white" />
      <mask
        id="mask0_77_725"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="26px"
        height="18px"
      >
        <rect width="26px" height="18px" rx="2" fill="white" />
      </mask>
      <g mask="url(#mask0_77_725)">
        <rect width="26px" height="18px" fill="#EA403F" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.9999 11.106L9.72509 13.3687L10.9334 9.65077L7.70115 7.33128L11.7227 7.29619L12.9999 3.59998L14.2771 7.29619L18.2986 7.33128L15.0664 9.65077L16.2747 13.3687L12.9999 11.106Z"
          fill="#FFFE4E"
        />
      </g>
    </SvgIcon>
  );
};
export default VietnamFlagIcon;

VietnamFlagIcon.propTypes = {
  className: PropTypes.string,

  width: PropTypes.number,
  height: PropTypes.number,
};
VietnamFlagIcon.defaultProps = {
  className: "",

  width: 26,
  height: 18,
};
