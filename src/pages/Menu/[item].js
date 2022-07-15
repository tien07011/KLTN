import React, {memo, useEffect} from "react";
import {Box, Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {makeStyles} from "@mui/styles";
import {CustomLink, MenuBar} from "../../components";
import {useRouter} from "next/router";
import {PathConstant} from "../../const";

const Item = () => {
    const classes = useStyles();
    const router = useRouter();
    console.log("router", router.query.item);

    return (
        <Box style={{width: "100%", height: "100%"}}>
            <Box style={{padding: 10, height: 60, margin: "auto", display: "flex", flexDirection: "row"}}>
                <CustomLink linkProps={{href: PathConstant.MENU}}>
                    <ArrowBackIcon sx={{ fontSize: 30, color: "black" }}/>
                </CustomLink>
                <Typography style={{fontSize: 20}}>AAAAa</Typography>
            </Box>
            <MenuBar/>
        </Box>
    );
}

export default memo(Item);

const useStyles = makeStyles((theme) => ({}));
