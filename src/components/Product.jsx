import React from "react";
import {Box, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import ProductCard from "./ProductCard";
import {Image, List} from "@mui/icons-material";
import {uuid} from "../utils";
import {makeStyles} from "@mui/styles";
import CustomLink from "./CustomLink";
import {PathConstant} from "../const";

const Product = ({products}) => {
    const classes = useStyles();

    return (
        <>
            {products.length > 0 ? (
                <Grid container spacing={2} className={classes.container}>
                    {products.map((item) => (
                        <Grid item xs={6} style={{borderColor: "black", paddingLeft: 16}} key={uuid()}>
                            <CustomLink
                                linkProps={{href: PathConstant.MENU + "/" + item.category_code}}
                            >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    //src={"https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc="}
                                    src={item.image}
                                />
                                <CardContent style={{backgroundColor: "#f5ebeb"}}>
                                    <Typography gutterBottom variant="h5" component="div" style={{color: "black"}}>
                                        {item.name}
                                    </Typography>
                                    {item.description != null ? (
                                        <Typography variant="body2" color="text.secondary">
                                            {item.description}
                                        </Typography>
                                    ) : (
                                        <Typography variant="body2" color="text.secondary">
                                            Sản phẩm không có mô tả
                                        </Typography>
                                    )}
                                </CardContent>
                            </CustomLink>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Box>
                    <Typography>Không có sản phẩm nào</Typography>
                </Box>
            )}
        </>
    );
};

export default Product;

const useStyles = makeStyles((theme) => ({
    container: {
        padding: 10,
        zIndex: 1,
    }
}));