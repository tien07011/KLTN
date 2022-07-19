import React, {memo, useEffect} from "react";
import {Box, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {CustomLink, MenuBar} from "../../components";
import {makeStyles} from "@mui/styles";
import {PathConstant} from "../../const";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {uuid} from "../../utils";

const Order = () => {
    const classes = useStyles();
    const orderDetails = [
        {
            "orderDetailCode": "553707",
            "itemCode": "20468",
            "itemName": "Pho Vn",
            "orderNumber": 1,
            "price": 41741,
            "priceTaxIn": 45916,
            "comment": "This is test detail",
            "discountValue": 0,
            "discountPercent": null,
            "discountType": 1,
            "tax": 4175,
            "subtotal": 41741,
            "total": 45916
        },
        {
            "orderDetailCode": "553708",
            "itemCode": "20523",
            "itemName": "Banh bao",
            "orderNumber": 1,
            "price": 12000,
            "priceTaxIn": 13200,
            "comment": "This is test detail 2",
            "discountValue": 0,
            "discountPercent": null,
            "discountType": 1,
            "tax": 1200,
            "subtotal": 12000,
            "total": 13200
        },
        {
            "orderDetailCode": "553709",
            "itemCode": "27456",
            "itemName": "eozfcqlyma",
            "orderNumber": 1,
            "price": 68059,
            "priceTaxIn": 73504,
            "comment": "This is test detail 2",
            "discountValue": 0,
            "discountPercent": null,
            "discountType": 1,
            "tax": 5445,
            "subtotal": 68059,
            "total": 73504
        }
    ];
    return (
        <Box style={{width: "100%", height: 860, backgroundColor: "white", textAlign: "center"}}>
            <Box style={{padding: 10, height: 60, margin: "auto", display: "flex", flexDirection: "row"}}>
                <CustomLink linkProps={{href: PathConstant.MENU}}>
                    <ArrowBackIcon sx={{fontSize: 30, color: "black"}}/>
                </CustomLink>
                <Typography style={{fontSize: 20}}>MENU</Typography>
            </Box>
            <Typography>10:15 20/07/2022</Typography>
            <Grid container style={{paddingLeft: 10, paddingRight: 10}}>
                {orderDetails.map((item) => (
                    <Grid item xs={12}
                          style={{borderColor: "black", marginBottom: 16, display: "flex", flexDirection: "row", backgroundColor: "wheat"}}
                          key={uuid()}>
                        <Box style={{width: 120, height: 120}}>
                            <CardMedia
                                component="img"
                                src={"https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"}
                                //src={item.image}
                            />
                        </Box>
                        <CardContent style={{backgroundColor: "#f5ebeb", padding: 0, width: "70%"}}>
                            <Typography gutterBottom variant="h5" component="div" style={{color: "black"}}>
                                {item.itemName}
                            </Typography>
                            <Typography gutterBottom component="div" style={{color: "black", fontSize: 15}}>
                                Số lượng {item.orderNumber}
                            </Typography>
                            <Typography gutterBottom component="div" style={{color: "black", fontSize: 15}}>
                                Giá {item.total}
                            </Typography>
                        </CardContent>

                    </Grid>
                ))}
            </Grid>
            <MenuBar/>
        </Box>
    );
}

export default memo(Order);

const useStyles = makeStyles((theme) => ({}));
