import React, {useEffect, useState} from "react";
import {AppBar, BottomNavigation, BottomNavigationAction, Box, Paper, Stack, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {LangConstant, PathConstant} from "../const";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import HistoryIcon from '@mui/icons-material/History';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import {CustomLink} from "./index";
import {useRouter} from "next/router";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {uuid} from "../utils";

const menuItems = [
    {
        path: PathConstant.MENU,
        icon: <RestaurantIcon color="disabled"/>,
        iconActivate: <RestaurantIcon sx={{color: "yellow"}}/>,
        name: "Menu",
    },
    {
        path: PathConstant.CART,
        icon: <LocalGroceryStoreIcon color="disabled"/>,
        iconActivate: <LocalGroceryStoreIcon sx={{color: "yellow"}}/>,
        name: "Cart",
    },
    {
        path: PathConstant.ORDER_VERSION,
        icon: <HistoryIcon color="disabled"/>,
        iconActivate: <HistoryIcon sx={{color: "yellow"}}/>,
        name: "Order",
    },
    {
        path: PathConstant.CALL,
        icon: <NotificationsActiveIcon color="disabled"/>,
        iconActivate: <NotificationsActiveIcon sx={{color: "yellow"}}/>,
        name: "Call",
    },
    {
        path: PathConstant.TOTAL,
        iconActivate: <CurrencyYenIcon sx={{color: "yellow"}}/>,
        icon: <CurrencyYenIcon color="disabled"/>,
        name: "Total",
    }
]

const checkPath = (asPath) => {
    const newAsPath = asPath.substring(asPath.indexOf("/", 0), asPath.indexOf("/", 1));
    if (asPath.indexOf("/", 1) == -1) {
        return asPath;
    }
    return newAsPath;
}

export default function MenuBar() {
    const classes = useStyles();
    const router = useRouter();

    return (
        // <AppBar className={classes.root}>
        //     <Stack direction={"row"} justifyContent={"space-around"}>
        //         {menuItems.map((menuItem, index) => (
        //             <Box style={{display: "flex", flexDirection: "column"}}>
        //                 <CustomLink
        //                     key={menuItem.path}
        //                     linkProps={{href: menuItem.path}}
        //                     className={router.pathname === menuItem.path ? classes.true : classes.false}
        //                 >
        //                     <Box style={{display: "flex", justifyContent: "center"}}>
        //                         {router.pathname === menuItem.path ? menuItem.iconActivate : menuItem.icon}
        //
        //                     </Box>
        //                 </CustomLink>
        //                 <Typography
        //                     className={router.pathname === menuItem.path ? classes.textTrue : classes.textFalse}>
        //                     {menuItem.name}
        //                 </Typography>
        //             </Box>
        //
        //         ))}
        //     </Stack>
        // </AppBar>
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3} className={classes.root}>
            <BottomNavigation>
                {menuItems.map((menuItem, index) => (
                    <Box style={{display: "flex", flexDirection: "column", padding: "10px 20px"}} key={uuid()}>
                        <CustomLink
                            key={menuItem.path}
                            linkProps={{href: menuItem.path}}
                            className={checkPath(router.pathname) === menuItem.path ? classes.true : classes.false}
                        >
                            <Box style={{display: "flex", justifyContent: "center"}}>
                                {checkPath(router.pathname) === menuItem.path ? menuItem.iconActivate : menuItem.icon}
                            </Box>
                        </CustomLink>
                        <Typography
                            className={router.pathname === menuItem.path ? classes.textTrue : classes.textFalse}>
                            {menuItem.name}
                        </Typography>
                    </Box>

                ))}
            </BottomNavigation>
        </Paper>
    );
}
const useStyles = makeStyles((theme) => ({
    root: {
        borderTopRightRadius: 7,
        borderTopLeftRadius: 7,
        borderTop: "1px solid #2E2E2E2E",
    },
    true: {
        color: "yellow",
    },
    false: {},
    textTrue: {
        textAlign: "center",
        color: "black",
    },
    textFalse: {
        textAlign: "center",
        color: "#00000042",
    }
}))