import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, CardMedia, TextField, Typography } from "@mui/material";

const App = (props) => {
  const classes = useStyles();
  useEffect(() => {
    
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
          <Typography className={classes.text1}>Nhập mã xác minh của bạn để bắt đầu đơn đặt hàng của bạn!</Typography>
      </Box>
      <Box style={{ textAlign: "center"}}>
        <TextField className={classes.textField} id="outlined-basic" label="Nhập mã xác thực" variant="outlined" />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
  },
  box: {
    padding: "40px 70px",
  },
  text1: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: "30px",
    color: theme.palette.black,
  },
  textField: {
    height: 100,
  }
}));

App.propTypes = {};

App.defaultProps = {};

export default App;
