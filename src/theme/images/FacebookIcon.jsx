import React from "react";
import PropTypes from "prop-types";
import { SvgIcon } from "@mui/material";

const FacebookIcon = ({ className, width, height }) => {
  return (
    <SvgIcon className={className} width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1704 26.0996V15.9126H8.77441V11.6679H12.1704V8.27181C12.1704 4.76277 14.3914 3.0365 17.5211 3.0365C19.0202 3.0365 20.3094 3.14835 20.6853 3.19794V6.86497H18.5139C16.8119 6.86497 16.4152 7.67563 16.4152 8.86223V11.6679H20.6588L19.8101 15.9115H16.4152L16.4832 26.0996"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
export default FacebookIcon;

FacebookIcon.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
FacebookIcon.defaultProps = {
  width: 28,
  height: 28,
};
