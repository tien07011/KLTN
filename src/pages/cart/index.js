import React, {memo, useEffect} from "react";
import {Box, Divider, Typography} from "@mui/material";
import {CustomLink, MenuBar} from "../../components";
import {makeStyles} from "@mui/styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {PathConstant} from "../../const";
import {Link} from "@mui/icons-material";

const Cart = () => {
    const classes = useStyles();
    const fakeData = [
        {
            name: "san pham 1",
            price: 100,
            amount: 2,
        },
        {
            name: "san pham 2",
            price: 100,
            amount: 2,
        },
        {
            name: "san pham 3",
            price: 100,
            amount: 2,
        }
    ]
    return (
        <>
            <MenuBar/>
            <Box style={{padding: 15}}>
                <Box style={{display: "flex", flexDirection: "row"}}>
                    <CustomLink linkProps={{href: PathConstant.MENU}}>
                        <ArrowBackIcon sx={{ fontSize: 35, marginTop: "10px", color: "black" }}/>
                    </CustomLink>
                    <Typography
                        style={{fontSize: "35px !important", fontWeight: 700, paddingLeft: 10,}}>Cart</Typography>
                    <Divider/>
                </Box>
                {fakeData.length > 0 ? (
                    <Box>
                        {fakeData.map((items) => {
                            return (
                                <Box style={{display: "flex", flexDirection: "row"}}>
                                    <Box style={{width: "70%"}}>
                                        <Typography>{items.name}</Typography>
                                        <Typography>${items.price}</Typography>
                                    </Box>
                                    <Box width={{width: "30%"}}>
                                        <Typography>{items.amount}</Typography>
                                    </Box>

                                </Box>
                            );
                        })}
                    </Box>
                ) : (
                    <Box>
                        <Typography> There are currently no products in your shopping cart </Typography>
                    </Box>
                )
                }
            </Box>
        </>
    );
}

export default memo(Cart);

const useStyles = makeStyles((theme) => ({}));