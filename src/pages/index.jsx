import React, {useEffect, useCallback} from "react";
import {makeStyles} from "@mui/styles";
import {
    Box,
    CardMedia,
    Typography,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Button,
} from "@mui/material";
import {AuthService} from "services";
import {toCamel} from "../utils";
import {PathConstant} from "../const";

const App = () => {
    const classes = useStyles();
    const data = {
        password: "fourglobe",
        username: "fourglobe",
    };
    let sessionId;
    useEffect(async () => {
        const auth = await AuthService.login(data);
        sessionId = toCamel(auth).data.sessionId;
        const provideAuth = {
            client_id: "FOURGLOBE.api.Zadsghs",
            client_secret: "FsGjsjsGJdj@gshjs",
            scope:
                "r_item r_table_activity w_order r_order r_table r_category w_table_activity r_item_detail_content r_item_detail",
            session_id: sessionId,
        };
        await AuthService.providerAuth(provideAuth);
        localStorage.setItem(
            "access_token",
            "cc49d092157b46929e05b7e2e6d69087FsGjsjsGJdj@gshjs"
        );
    }, []);

    return (
        <Box className={classes.container}>
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
                <Button variant="contained" href={PathConstant.MENU}>
                    Bắt đầu đặt hàng
                </Button>
            </Box>
        </Box>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        height: "100%",
        width: "auto",
    },
    box: {
        padding: "40px 70px",
    },
    text1: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 500,
        lineHeight: "30px",
        color: theme.palette.black,
    },
    textField: {
        height: 100,
    },
}));

App.propTypes = {};

App.defaultProps = {};

export default App;
