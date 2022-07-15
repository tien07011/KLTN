import React, {memo, useEffect} from "react";
import {Box} from "@mui/material";
import {MenuBar} from "../../components";
import {makeStyles} from "@mui/styles";

const Order = () => {
    const classes = useStyles();

    return (
        <Box style={{width: "100%", height: "100%"}}>
            <MenuBar>

            </MenuBar>

        </Box>
    );
}

export default memo(Order);

const useStyles = makeStyles((theme) => ({}));
