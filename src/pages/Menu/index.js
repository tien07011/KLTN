import React, {memo, useEffect} from "react";
import {Box, Typography, List, BottomNavigationAction, Paper, BottomNavigation} from "@mui/material";
import {CustomLink, MenuBar, Product} from "../../components";
import {makeStyles} from "@mui/styles";
import {MenuService} from "../../services";
import {checkAccessToken} from "../../utils";


const Menu = () => {
    const fakeData = {
        "categories": [
            {
                "category_code": "277_1000369",
                "name": "Súp",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 14607.0,
                "rgt": 14706.0,
                "sort_order": 2,
                "state": 1,
                "created": 1564052587,
                "modified": 1599549243,
                "tags": null
            },
            {
                "category_code": "277_1000370",
                "name": "Lẩu",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 19227.0,
                "rgt": 19326.0,
                "sort_order": 1,
                "state": 1,
                "created": 1570764646,
                "modified": 1570788445,
                "tags": null
            },
            {
                "category_code": "277_1000371",
                "name": "Món chính",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 19227.001,
                "rgt": 19227.002,
                "sort_order": 3,
                "state": 1,
                "created": 1578538769,
                "modified": 1578563390,
                "tags": null
            },
            {
                "category_code": "277_1000373",
                "name": "Rau",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 21132.0,
                "rgt": 21231.0,
                "sort_order": 5,
                "state": 1,
                "created": 1579246296,
                "modified": 1579324263,
                "tags": null
            },
            {
                "category_code": "277_1000374",
                "name": "Cơm",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 21232.0,
                "rgt": 21331.0,
                "sort_order": 6,
                "state": 1,
                "created": 1579246300,
                "modified": 1579324263,
                "tags": null
            },
            {
                "category_code": "277_1000375",
                "name": "Gà",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 21332.0,
                "rgt": 21431.0,
                "sort_order": 7,
                "state": 1,
                "created": 1579246303,
                "modified": 1579324263,
                "tags": null
            },
            {
                "category_code": "277_1000377",
                "name": "Mì",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 23544.0,
                "rgt": 23643.0,
                "sort_order": 9,
                "state": 1,
                "created": 1595229351,
                "modified": 1595234841,
                "tags": null
            },
            {
                "category_code": "277_1000378",
                "name": "Cafe",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 23644.0,
                "rgt": 23743.0,
                "sort_order": 10,
                "state": 1,
                "created": 1595230259,
                "modified": 1595234841,
                "tags": null
            },
            {
                "category_code": "277_1000379",
                "name": "Món chính",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 23744.0,
                "rgt": 23843.0,
                "sort_order": 11,
                "state": 1,
                "created": 1595230259,
                "modified": 1595234841,
                "tags": null
            },
            {
                "category_code": "277_1000380",
                "name": "ca1.5",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 23844.0,
                "rgt": 23943.0,
                "sort_order": 12,
                "state": 1,
                "created": 1595234692,
                "modified": 1595327856,
                "tags": null
            },
            {
                "category_code": "277_1000381",
                "name": "ca2",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 23944.0,
                "rgt": 24043.0,
                "sort_order": 13,
                "state": 1,
                "created": 1595234692,
                "modified": 1595319407,
                "tags": null
            },
            {
                "category_code": "277_1000382",
                "name": "SMAOITEMDETAIL",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 24044.0,
                "rgt": 24143.0,
                "sort_order": 14,
                "state": 1,
                "created": 1595319008,
                "modified": 1595320347,
                "tags": null
            },
            {
                "category_code": "277_1000383",
                "name": "てst",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 24344.0,
                "rgt": 24443.0,
                "sort_order": 15,
                "state": 1,
                "created": 1601611954,
                "modified": 1602069792,
                "tags": null
            },
            {
                "category_code": "277_1000384",
                "name": "longname",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 19227.004,
                "rgt": 19227.005,
                "sort_order": 16,
                "state": 1,
                "created": 1608605711,
                "modified": 1608867546,
                "tags": null
            },
            {
                "category_code": "277_1000385",
                "name": "cate",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 19227.007,
                "rgt": 19227.008,
                "sort_order": 17,
                "state": 1,
                "created": 1610014759,
                "modified": 1610365018,
                "tags": null
            },
            {
                "category_code": "277_1000386",
                "name": "st",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 24644.0,
                "rgt": 24743.0,
                "sort_order": 18,
                "state": 1,
                "created": 1610014823,
                "modified": 1610365018,
                "tags": null
            },
            {
                "category_code": "277_1000387",
                "name": "đồ ăn hè",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 24744.0,
                "rgt": 24843.0,
                "sort_order": 19,
                "state": 1,
                "created": 1610524840,
                "modified": 1610969699,
                "tags": null
            },
            {
                "category_code": "277_1000388",
                "name": "ăn kèm",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 24844.0,
                "rgt": 24943.0,
                "sort_order": 20,
                "state": 1,
                "created": 1610524847,
                "modified": 1610969700,
                "tags": null
            },
            {
                "category_code": "277_1000389",
                "name": "nước",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 24744.001,
                "rgt": 24744.002,
                "sort_order": 21,
                "state": 1,
                "created": 1610524878,
                "modified": 1610969700,
                "tags": null
            },
            {
                "category_code": "277_1000390",
                "name": "khô",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 24744.004,
                "rgt": 24744.005,
                "sort_order": 22,
                "state": 1,
                "created": 1610524887,
                "modified": 1610969700,
                "tags": null
            },
            {
                "category_code": "277_1000391",
                "name": "Food",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 24944.0,
                "rgt": 25044.0,
                "sort_order": 23,
                "state": 1,
                "created": 1611128764,
                "modified": 1611387320,
                "tags": null
            },
            {
                "category_code": "277_1000392",
                "name": "Sea Food",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 24944.001,
                "rgt": 24944.002,
                "sort_order": 24,
                "state": 1,
                "created": 1611137815,
                "modified": 1611387320,
                "tags": null
            },
            {
                "category_code": "277_1000393",
                "name": "category",
                "description": null,
                "lft": 25045.0,
                "rgt": 25144.0,
                "sort_order": 25,
                "state": 1,
                "created": 1614164380,
                "modified": 1614314258,
                "tags": null
            },
            {
                "category_code": "277_1000394",
                "name": "Drink",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 25145.0,
                "rgt": 25244.0,
                "sort_order": 26,
                "state": 1,
                "created": 1620721980,
                "modified": 1621392601,
                "tags": null
            },
            {
                "category_code": "277_1000395",
                "name": "Lunch",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 25245.0,
                "rgt": 25344.0,
                "sort_order": 27,
                "state": 1,
                "created": 1621083880,
                "modified": 1621392601,
                "tags": null
            },
            {
                "category_code": "277_1000396",
                "name": "Breakfast",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 25345.0,
                "rgt": 25444.0,
                "sort_order": 28,
                "state": 1,
                "created": 1621084314,
                "modified": 1621392602,
                "tags": null
            },
            {
                "category_code": "277_1000397",
                "name": "Brunch",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 25345.001,
                "rgt": 25345.002,
                "sort_order": 29,
                "state": 1,
                "created": 1621149949,
                "modified": 1621392602,
                "tags": null
            },
            {
                "category_code": "277_1000398",
                "name": "a",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 25445.0,
                "rgt": 25544.0,
                "sort_order": 30,
                "state": 1,
                "created": 1625224629,
                "modified": 1625644764,
                "tags": null
            },
            {
                "category_code": "277_1000399",
                "name": "categoryhhhh",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 25545.0,
                "rgt": 25644.0,
                "sort_order": 31,
                "state": 1,
                "created": 1625225170,
                "modified": 1625644765,
                "tags": null
            },
            {
                "category_code": "277_1000400",
                "name": "dat_category_1",
                "image": "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%201.jpg",
                "description": null,
                "lft": 25645.0,
                "rgt": 25744.0,
                "sort_order": 32,
                "state": 1,
                "created": 1625648743,
                "modified": 1625652032,
                "tags": null
            }
        ],
        "shop_code": "277_404"
    }
    const classes = useStyles();

    useEffect(async () => {
        const data = await MenuService.getCategory();
        console.log(data);
    }, []);

    return (
        <>
            {checkAccessToken() == true ? (
                <Box>
                    <Product products={fakeData.categories}/>
                    <Box style={{height: 20}}></Box>
                    <MenuBar/>
                </Box>
            ) : (
                // <Box className={classes.boxLogin}>
                //     <Typography style={{fontSize: 20}}>
                //         bạn hãy
                //     </Typography>
                //     <CustomLink
                //         linkProps={{href: PathConstant.ROOT}}
                //     >
                //         <Typography style={{fontSize: 20}}>đăng nhập</Typography>
                //     </CustomLink>
                //     <Typography style={{fontSize: 20}}>
                //         để sử dụng ứng dụng
                //     </Typography>
                // </Box>
                <Box></Box>
            )}
        </>
    );
}

export default memo(Menu);

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: 896,
        zIndex: 1,
    },
}));