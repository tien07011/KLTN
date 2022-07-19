import React, {memo, useEffect} from "react";
import {Box, Button, Typography} from "@mui/material";
import {MenuBar} from "../../components";

const Total = () => {
    return (
        <Box style={{width: "100%", height: 860, backgroundColor: "white", textAlign: "center", marginTop: 20}}>
            <Typography style={{fontSize: 30, fontWeight: 400}}>Thanh toán</Typography>
            <Box style={{
                width: "95%",
                margin: 10,
                padding: 20,
                height: 200,
                backgroundColor: "yellow",
                borderRadius: 19
            }}>
                <Typography style={{fontSize: 28}}>Số tiền thanh toán</Typography>
                <Typography style={{fontSize: 28, marginTop: 15}}>12.165.000 VNĐ</Typography>
            </Box>
            <Box style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                <Button variant="contained">Thanh toán trực tiếp</Button>
                <Button variant="contained">Chuyển khoản</Button>
            </Box>
            <MenuBar/>
        </Box>
    );
}

export default memo(Total);