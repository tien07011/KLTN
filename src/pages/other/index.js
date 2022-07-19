import React, {memo, useEffect, useState} from "react";
import {Box, Typography, Container, Grid, Button, Dialog, CardMedia} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {MenuBar} from "../../components";

const Other = () => {
    const classes = useStyles();
    const [data, setData] = useState([]);

    useEffect(async () => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${localStorage.getItem("latitude")}&lon=${localStorage.getItem("longitude")}&exclude=hourly,daily&appid=b419ff88e5ca3ee87c4b1aa60d605519`)
            .then(res => res.json())
            .then(result => {
                setData(result);
            });
    }, []);

    const checkImage = (icon) => {
        if (icon == "01d") {
            return "http://openweathermap.org/img/wn/01d@2x.png";
        }
        if (icon == "02d") {
            return "http://openweathermap.org/img/wn/02d@2x.png";
        }
        if (icon == "03d") {
            return "http://openweathermap.org/img/wn/03d@2x.png";
        }
        if (icon == "04d") {
            return "http://openweathermap.org/img/wn/04d@2x.png";
        }
        if (icon == "09d") {
            return "http://openweathermap.org/img/wn/09d@2x.png";
        }
        if (icon == "10d") {
            return "http://openweathermap.org/img/wn/10d@2x.png";
        }
        if (icon == "11d") {
            return "http://openweathermap.org/img/wn/11d@2x.png";
        }
        if (icon == "13d") {
            return "http://openweathermap.org/img/wn/13d@2x.png";
        }
        if (icon == "50d") {
            return "http://openweathermap.org/img/wn/50d@2x.png";
        }
        if (icon == "01n") {
            return "http://openweathermap.org/img/wn/01n@2x.png";
        }
        if (icon == "02n") {
            return "http://openweathermap.org/img/wn/02n@2x.png";
        }
        if (icon == "03n") {
            return "http://openweathermap.org/img/wn/03n@2x.png";
        }
        if (icon == "04n") {
            return "http://openweathermap.org/img/wn/04n@2x.png";
        }
        if (icon == "09n") {
            return "http://openweathermap.org/img/wn/04n@2x.png";
        }
        if (icon == "10n") {
            return "http://openweathermap.org/img/wn/10n@2x.png";
        }
        if (icon == "11n") {
            return "http://openweathermap.org/img/wn/11n@2x.png";
        }
        if (icon == "13n") {
            return "http://openweathermap.org/img/wn/13dn@2x.png";
        }
        if (icon == "50n") {
            return "http://openweathermap.org/img/wn/50n@2x.png";
        }
    }
    const dataFake = {
        "lat": 21.0565,
        "lon": 105.7418,
        "timezone": "Asia/Bangkok",
        "timezone_offset": 25200,
        "current": {
            "dt": 1658253806,
            "sunrise": 1658269549,
            "sunset": 1658317231,
            "temp": 302.18,
            "feels_like": 309.18,
            "pressure": 1004,
            "humidity": 89,
            "dew_point": 300.18,
            "uvi": 0,
            "clouds": 40,
            "visibility": 10000,
            "wind_speed": 3.6,
            "wind_deg": 100,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "09d"
                }
            ]
        },
    }
    return (
        <Box style={{width: "100%", height: 860, backgroundColor: "white", textAlign: "center"}}>
            <Box className={classes.root}>
                <Typography style={{fontSize: 30, fontWeight: 600}}>{dataFake.timezone}</Typography>
                <Typography style={{
                    fontSize: 41,
                    fontWeight: 600
                }}>{dataFake.current.temp}°F</Typography>
                <Typography style={{
                    fontSize: 25,
                    fontWeight: 400
                }}>{dataFake.current.weather[0].description}</Typography>
                <Box style={{width: 150, height: 150, margin: "0px auto"}}>
                    <CardMedia
                        component="img"
                        src={checkImage(dataFake.current.weather[0].icon)}
                    />
                </Box>
            </Box>
            <MenuBar/>
        </Box>
    );
}

export default memo(Other);

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 150,
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
    }
}));