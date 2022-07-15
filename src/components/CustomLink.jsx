import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const CustomLink = ({ children, linkProps, childProps }) => {
    return (
        <Link {...linkProps} passHref>
            <Box component="a" {...childProps}>
                {children}
            </Box>
        </Link>
    );
};

CustomLink.propTypes = {
    linkProps: PropTypes.object,
    childProps: PropTypes.object,
};

CustomLink.defaultProps = {
    linkProps: {},
    childProps: {},
};

export default CustomLink;
