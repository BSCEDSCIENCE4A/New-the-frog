import React from 'react'
import {
    Grid,
    Typography,
    Card,
    IconButton
} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
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


export default function ANATOMICAL_TERMS() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/main/explore/')
    };
    return (
        <PerfectScrollbar>
        <Grid sx={classes.container} >
            <Card sx={classes.myCard}><b></b>
                <Card sx={classes.myQuestion}>
              
    
                    <IconButton sx={classes.myIcon} onClick={handleBack}>
                        <ArrowBackIcon sx={{ fontSize: 50 }} />
                    </IconButton>
                    <Typography sx={classes.myTitle}>F. <u>ANATOMICAL TERMS</u></Typography>
                    <Typography sx={classes.myLabels}>1. REGIONS</Typography>
                    <Typography sx={classes.myText}><b>Anterior:</b> the forward moving head end in a bilaterally symmetrical animal; toward that end; opposite to posterior.</Typography>
                    <Typography sx={classes.myText}><b>Posterior:</b> the hind part or toward the hinder (tail) end; away from head; opposite to anterior.</Typography>
                    <Typography sx={classes.myText}><b>Proximal:</b> nearer or toward the central part of the body; opposite of distal.</Typography>
                    <Typography sx={classes.myText}><b>Distal:</b> away from the place of attachment; toward the periphery of extremities of the body; opposite of proximal.</Typography>
                    <Typography sx={classes.myText}><b>Lateral:</b> on or toward the side; contrasted with medial.</Typography>
                    <Typography sx={classes.myText}><b>Medial (median):</b> on or near or toward the middle of the body; contrasted with lateral.</Typography>
                    <Typography sx={classes.myText}><b>Ventral:</b> toward or pertaining to the lower side or belly; away from the back; opposite to dorsal.</Typography>
                    <Typography sx={classes.myText}><b>Dorsal:</b> toward or pertaining to the back or upper surface; opposite of ventral.</Typography>
                    <Typography sx={classes.myText}><b>Cephalic:</b> pertaining to or toward the head; opposite of caudal.</Typography>
                    <Typography sx={classes.myText}><b>Caudal:</b> pertaining to or toward the tail or posterior part of the body; opposite of cephalic.</Typography>

                    <Typography sx={classes.myLabels}>2. AXES</Typography>
                    <Typography sx={classes.myText}><b>Main and Longitudinal Axes:</b> a hypothetical line extending the length of the anterior to the posterior end; or from the oral (mouth) surface to the aboral (opposite) surface in radially symmetrical animals. </Typography>
                    <Typography sx={classes.myText}><b>Dorso-Ventral Axis:</b> from the back or dorsal surface to the under or ventral surface and at right angle to the longitudinal axis. </Typography>
                    <Typography sx={classes.myText}><b>Transverse Axis:</b> from side to side at right angle to the longitudinal and dorso-ventral axes.</Typography>

                    <Typography sx={classes.myLabels}>3. PLANES</Typography>
                    <Typography sx={classes.myText}><b>Median or Sagittal Plane:</b> divides the body into symmetrical right and left halves; includes the longitudinal axis and any dorso-ventral axis; any plane parallel to the sagittal is a parasagittal plane.</Typography>
                    <Typography sx={classes.myText}><b>Transverse Plane:</b> any plane at right angle to a longitudinal axis; hence, at right angles to sagittal and frontal planes; a cross-section.</Typography>
                    <Typography sx={classes.myText}><b>Frontal Plane:</b> any plane including a longitudinal and a transverse axis; hence, parallel to the front of the body (in man), or ventral surface (any bilateral animal); at the right angle to sagittal plane.</Typography>
          </Card>
            </Card>
        </Grid >
        </PerfectScrollbar>
    )
}

