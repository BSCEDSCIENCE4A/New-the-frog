import React from 'react'

import {
    Grid,
    Typography,
    Button,
    Card,
} from '@mui/material'
import { useNavigate } from 'react-router'
import logo from '../imgs/darkFrog.png'
const classes = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: '#3f3f3f'
    },
    myCard: {
        padding: 3,
        margin: 2,
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(66,181,129,1) 100%)",
        "@media (max-width: 600px)": {
            minWidth: '70vw',
            minHeight: '80vh',
        },
    },
    myTitle: {
        fontSize: '4rem',
        fontFamily: 'Varela Round',
        fontWeight: 'bold',
        color: 'black',
        "@media (max-width: 600px)": {
            fontSize: '2rem',
        },
    },
    myText: {
        fontSize: '2rem',
        opacity: '0.7',
        textAlign: 'center',
        fontFamily: 'Varela Round',
        color: 'white',
        "@media (max-width: 600px)": {
            fontSize: '1.2rem',
        },
    },
    myImage: {
        maxWidth: '20vw',
        "@media (max-width: 600px)": {
            maxWidth: '50vw',
        },
    }
}

export default function LandPage() {
    const navigate = useNavigate();
    const handleNext = () => {
        navigate("/signIn/*")
    }
    return (
        <Grid container sx={classes.container}>
            <Card sx={classes.myCard}>
                <Typography sx={{ ...classes.myTitle }}>The Frog</Typography>
                <Grid sx={classes.myImage}>
                    <img src={logo} alt='reading' width="100%" />
                </Grid>
                <Button
                    variant="contained"
                    onClick={handleNext}
                    color='primary'
                    sx={{
                        textTransform: 'none',
                        paddingInlineStart: 5,
                        paddingInlineEnd: 5,
                        background: 'radial-gradient(circle, rgba(41,119,135,1) 0%, rgba(6,31,129,1) 100%)',
                        borderRadius: 8,
                    }}>
                    <Typography sx={classes.myText}>
                        Get Started
                    </Typography>
                </Button>
            </Card>
        </Grid>
    )
}
