import React from 'react'
import {
    Grid,
    Typography,
    Card,
    Box,
    IconButton
} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const classes = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: '#3f3f3f'
    },
    myCard: {
        maxWidth: '90vw',
        minHeight: '100vh',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to bottom, #F7F61B, #168820)',
        padding: 3,
        "@media (max-width: 600px)": {
            fontSize: '1.5rem',
            padding: 1
        },
    },
    myQuestion: {
        minWidth: '30vw',
        minHeight: '100vh',
        display: 'flex',
        position: 'left',
        padding: 3,
        flexDirection: 'column',
        background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(66,181,129,1) 100%)"
    },
    myTitle: {
        fontSize: '1.8rem',
        opacity: '0.8',
        fontFamily: 'Varela Round',
        color: 'black',
        marginLeft: 5,
        padding: 1,
        "@media (max-width: 600px)": {
            marginLeft: 0,
            textAlign: 'center',
            fontSize: '1.5rem',
        },
    },

    myLabels: {
        fontSize: '1.5rem',
        opacity: '0.8',
        marginLeft: 5,
        fontWeight: 'bold',
        fontFamily: 'Varela Round',
        color: 'black',
        padding: 1,
        "@media (max-width: 600px)": {
            marginLeft: 0,
            fontSize: '1.2rem',
        },
    },
    myTimeText: {
        fontSize: '1.2rem',
        fontFamily: 'Varela Round',
        color: 'black',
        "@media (max-width: 600px)": {
            fontSize: '1rem'
        },
    },
    myImg: {
        display: 'flex',
        padding: 10,
        "@media (max-width: 600px)": {
            padding: 2,
        },
    },
    myText: {
        fontSize: '1.2rem',
        paddingTop: 0,
        paddingLeft: 10,
        paddingBottom: 5,
        paddingRight: 10,
        textAlign: 'left',
        fontFamily: 'Varela Round',
        color: 'black',
        "@media (max-width: 600px)": {
            marginLeft: 0,
            fontSize: '1rem',
            paddingTop: 0,
            paddingLeft: 2,
            paddingBottom: 0,
            paddingRight: 2,
        },
    },
    myIcon: {
        width: '5vw',
        minHeight: '5vh',
    }
}


export default function REFERENCES() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/main/explore/')
    };
    return (
        <Grid sx={classes.container} >
            <Card sx={classes.myCard}><b></b>
                <Card sx={classes.myQuestion}>
                    <IconButton sx={classes.myIcon} onClick={handleBack}>
                        <ArrowBackIcon sx={{fontSize: 50}}/>
                    </IconButton>
                    <Typography sx={classes.myTitle}><u>REFERENCES</u></Typography>
                    <Typography sx={classes.myLabels}>Minkoff, E.C. (1975). A Laboratory Guide To Frog Anatomy. Pergamon Press Inc.</Typography>
                    <br />
                    <Typography sx={classes.myLabels}>Lalley, Et Al. (2009 November 13). A Comparison Of V-Frog© To Physical Frog Dissection.International Journal Of Environmental &#x26; Science Education. Vol. 5, No. 2. </Typography>
                    <Box component='a' sx={classes.myLabels} href='https://bit.ly/3kN1xtz'>
                        https://bit.ly/3kN1xtz
                    </Box>
                    <br />
                    <Typography sx={classes.myLabels}>Frogs – Anatomy And Physiology</Typography>
                    <Box component='a' sx={classes.myLabels} href='https://bit.ly/3nuMGG4'>
                        https://bit.ly/3nuMGG4
                    </Box>
                    <br />
                    <Typography sx={classes.myLabels}>Anatomy Of Frog. </Typography>
                    <Box component='a' sx={classes.myLabels} href='https://bit.ly/3nsxTeL'>
                        https://bit.ly/3nsxTeL
                    </Box>
                    <br />
                    <Typography sx={classes.myLabels}>Walag, A.M. (2021). Biology For Science Teachers 1: Laboratory Manual (1st Edition). Department Of 	Science Education.</Typography>
                    <br />
                    <Typography sx={classes.myLabels}>Amphibians: Dissecting A Frog. Chapter 30. </Typography>
                    <Box component='a' sx={classes.myLabels} href='https://bit.ly/3kN2hPn'>
                        https://bit.ly/3kN2hPn
                    </Box>
                </Card>
            </Card>
        </Grid >
    )
}

