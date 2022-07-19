import React, {useEffect, useCallback} from "react";
import {makeStyles} from "@mui/styles";
import {
    Box, CardMedia, Typography, FormGroup, FormControlLabel, Checkbox, Button,
} from "@mui/material";
import {AuthService} from "services";
import {toCamel} from "../utils";
import {PathConstant} from "../const";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const App = () => {
    const classes = useStyles();
    const data = {
        password: "fourglobe", username: "fourglobe",
    };
    let sessionId;
    let access_token;
    useEffect(async () => {
        const auth = await AuthService.login(data);
        sessionId = toCamel(auth).data.sessionId;
        const provideAuth = {
            client_id: "FOURGLOBE.api.Zadsghs",
            client_secret: "FsGjsjsGJdj@gshjs",
            scope: "r_item r_table_activity w_order r_order r_table r_category w_table_activity r_item_detail_content r_item_detail",
            session_id: sessionId,
        };
        const data_access_token = await AuthService.providerAuth(provideAuth);
        access_token = toCamel(data_access_token).data.accessToken;
        localStorage.setItem("access_token", access_token);
        navigator.geolocation.getCurrentPosition( function (position) {
            localStorage.setItem("latitude",position.coords.latitude);
            localStorage.setItem("longitude",position.coords.longitude);
        });
    }, []);

    return (<Box className={classes.container}>
        <CardMedia
            component="img"
            height="210"
            image="./static/images/image1.jpg"
            alt="Image 1"
        />
        <Box className={classes.box}>
            <Typography className={classes.text1}>
                Chào mừng bạn tới nhà hàng của chúng tôi
            </Typography>
        </Box>
        <FormGroup>
            <FormControlLabel
                style={{margin: "auto"}}
                control={<Checkbox defaultChecked/>}
                label="Đồng ý với điều khoản của chúng tôi"
            />
        </FormGroup>
        <Box style={{margin: "auto", textAlign: "center"}}>
            <Popup trigger={<Typography>Điều khoản dịch vụ</Typography>} position="center center">
                <Box>
                    <Typography style={{fontSize: 15}}>
                        Meta tạo ra các công nghệ và dịch vụ nhằm hỗ trợ mọi người kết nối với nhau, xây dựng cộng đồng
                        cũng như phát triển doanh nghiệp. Các Điều khoản này điều chỉnh việc bạn sử dụng Facebook,
                        Messenger và các sản phẩm, tính năng, ứng dụng, dịch vụ, công nghệ cũng như phần mềm khác mà
                        chúng tôi cung cấp (Sản phẩm của Meta hoặc Sản phẩm), trừ khi chúng tôi nêu rõ là áp dụng các
                        điều khoản riêng (và không áp dụng các điều khoản này). Các Sản phẩm này do Meta Platforms, Inc.
                        cung cấp cho bạn.
                    </Typography>
                </Box>
            </Popup>
        </Box>
        <Box style={{margin: "auto", textAlign: "center"}}>
            <Button variant="contained" href={PathConstant.MENU}>
                Bắt đầu đặt hàng
            </Button>
        </Box>
    </Box>);
};

const useStyles = makeStyles((theme) => ({
    container: {
        height: "100%", width: "auto",
    }, box: {
        padding: "40px 70px",
    }, text1: {
        textAlign: "center", fontSize: 20, fontWeight: 500, lineHeight: "30px", color: theme.palette.black,
    }, textField: {
        height: 100,
    },
}));

App.propTypes = {};

App.defaultProps = {};

export default App;
