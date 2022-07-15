import React, {memo, useEffect} from "react";
import {Box, Typography, Container, Grid, Button, Dialog} from "@mui/material";
import {MenuBar} from "../../components";
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import {makeStyles} from "@mui/styles";
import CallIcon from '@mui/icons-material/Call';
import {Alert, AlertTitle} from "@mui/lab";

const Call = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Box>
            <MenuBar/>
            <Container className={classes.root}>
                <Grid container={true}>
                    <Box className={classes.content}>
                        <DirectionsRunIcon sx={{fontSize: "100px"}}/>
                        <Typography style={{fontSize: 27,}}>Staff will be there soon</Typography>
                        <Typography style={{fontSize: 27,}}>You really want to call the staff</Typography>
                        <CallIcon sx={{fontSize: "50px"}} style={{marginTop: 30}} onClick={handleClick}/>
                        <Dialog open={open} onClose={handleClick} className={classes.alert}>
                            <Alert>
                                Staff will arrive in a moment
                            </Alert>
                        </Dialog>
                    </Box>
                </Grid>
            </Container>
        </Box>
    );
}

export default memo(Call);

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        padding: 8
    },
    content: {
        paddingTop: 150,
        textAlign: "center",
        width: "100%",
    },
    alert: {
        marginTop: "100px"
    }
}));